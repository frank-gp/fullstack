import axios from "axios";
import { useEffect, useState } from "react";
import "./Register.css";
import validateRegister from "../../helpers/validateRegister";

const Register = () => {
  const [userDataState, setUserDataState] = useState({
    // name: "Jhon Name",
    // username: "john_username",
    // email: "john@example.com",
    // birthdate: "2024-05-04",
    // nDni: 12345678,
    // password: "password123",
    // ==========  ==========
    name: "",
    username: "",
    email: "",
    birthdate: "",
    nDni: 18,
    password: "",
  });

  const [stateErrors, setErrors] = useState({
    name: "Name is required",
    username: "Username is required",
    email: "Email is required",
    birthdate: "Birthdate is required",
    nDni: "DNI is required",
    password: "Password is required",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserDataState({ ...userDataState, [name]: value });

    setErrors(validateRegister(userDataState));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // console.log(userDataState);

    axios
      .post("http://127.0.0.1:3000/users/register/", userDataState)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
