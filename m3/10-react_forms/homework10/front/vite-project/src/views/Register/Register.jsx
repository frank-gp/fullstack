import axios from "axios";
import { useState, useEffect } from "react";
import "./Register.css";
import validateRegister from "../../helpers/validateRegister";

const Register = () => {
  const [userDataState, setUserDataState] = useState({
    name: "",
    username: "",
    email: "",
    birthdate: "",
    nDni: "",
    password: ""
  });

  const [stateErrors, setErrors] = useState({
    name: "",
    username: "",
    email: "",
    birthdate: "",
    nDni: "",
    password: ""
  });

  const [formValid, setFormValid] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserDataState({ ...userDataState, [name]: value });
  };

  useEffect(() => {
    const errors = validateRegister(userDataState);
    setErrors(errors);

    // Verificar si todos los campos son válidos
    const isValid = Object.values(errors).every(error => error === '');
    // Verificar si todos los campos requeridos están llenos
    const allFieldsFilled = Object.values(userDataState).every(value => value.trim() !== '');

    setFormValid(isValid && allFieldsFilled);
  }, [userDataState]);

  const handleOnSubmit = (event) => {
    event.preventDefault();

    // Validar los campos antes de enviar
    const errors = validateRegister(userDataState);
    setErrors(errors);

    // Verificar si hay algún error en los campos
    const hasErrors = Object.values(errors).some(error => error !== '');

    if (!hasErrors) {
      // Si no hay errores, enviar la solicitud de registro
      axios
        .post("http://127.0.0.1:3000/users/register/", userDataState)
        .then((response) => {
          console.log(response.data);
          setSubmitMessage("Registration successful"); // Mensaje de éxito
        })
        .catch((error) => {
          console.error("Error:", error);
          setSubmitMessage("Registration failed"); // Mensaje de error
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit} id="registerUserForm" className="registerUserForm">
        <h2>Register</h2>
        <hr />
        <br />
        <br />
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={userDataState.name} onChange={handleInputChange} />
          {stateErrors.name && <p className="error">{stateErrors.name}</p>}
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={userDataState.username} onChange={handleInputChange} />
          {stateErrors.username && <p className="error">{stateErrors.username}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={userDataState.email} onChange={handleInputChange} />
          {stateErrors.email && <p className="error">{stateErrors.email}</p>}
        </div>
        <div>
          <label htmlFor="birthdate">Birthdate:</label>
          <input type="date" id="birthdate" name="birthdate" value={userDataState.birthdate} onChange={handleInputChange} />
          {stateErrors.birthdate && <p className="error">{stateErrors.birthdate}</p>}
        </div>
        <div>
          <label htmlFor="nDni">nDni:</label>
          <input type="number" id="nDni" name="nDni" value={userDataState.nDni} onChange={handleInputChange} />
          {stateErrors.nDni && <p className="error">{stateErrors.nDni}</p>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={userDataState.password} onChange={handleInputChange} />
          {stateErrors.password && <p className="error">{stateErrors.password}</p>}
        </div>
        <button type="submit" disabled={!formValid}>Register</button>
      </form>
      {submitMessage && <p>{submitMessage}</p>}
    </div>
  );
};

export default Register;
