import axios from "axios";
import { useState, useEffect } from "react";
import "./Login.css";
import validateLogin from "../../helpers/validateLogin";

const Login = () => {
  const [loginUser, setLoginUser] = useState({
    username: "john_username",
    password: "password123",
  });

  const [stateErrors, setErrors] = useState({
    username: "",
    password: "",
  });

  const [formValid, setFormValid] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginUser({
      ...loginUser,
      [name]: value,
    });
  };

  useEffect(() => {
    const errors = validateLogin(loginUser);
    setErrors(errors);

    // Verificar si todos los campos son válidos
    const isValid = Object.values(errors).every((error) => error === "");
    // Verificar si todos los campos requeridos están llenos
    const allFieldsFilled = Object.values(loginUser).every((value) => value.trim() !== "");

    setFormValid(isValid && allFieldsFilled);
  }, [loginUser]);

  const handleOnSubmit = (event) => {
    event.preventDefault();

    // Validar los campos antes de enviar
    const errors = validateLogin(loginUser);
    setErrors(errors);

    // Verificar si hay algún error en los campos
    const hasErrors = Object.values(errors).some((error) => error !== "");

    if (!hasErrors) {
      // Si no hay errores, enviar la solicitud de inicio de sesión
      axios
        .post("http://127.0.0.1:3000/users/login/", loginUser)
        .then((response) => {
          console.log(response.data);
          setSubmitMessage("Login successful"); // Mensaje de éxito
        })
        .catch((error) => {
          console.error("Error:", error);
          setSubmitMessage("Login failed"); // Mensaje de error
        });
    }
  };

  return (
    <div>
      <form id="loginUserForm" className="loginUserForm" onSubmit={handleOnSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={loginUser.username} onChange={handleInputChange} />
        {stateErrors.username && <p className="error">{stateErrors.username}</p>}
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={loginUser.password} onChange={handleInputChange} />
        {stateErrors.password && <p className="error">{stateErrors.password}</p>}
        <button type="submit" disabled={!formValid}>
          Login
        </button>
      </form>
      {submitMessage && <p>{submitMessage}</p>}
    </div>
  );
};

export default Login;
