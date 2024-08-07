import axios from "axios";
import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [loginUser, setLoginUser] = useState({
    username: "john_username",
    password: "password123",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginUser({
      ...loginUser,
      [name]: value,
    });
  };

  const loginUserForm = (event) => {
    event.preventDefault();
    console.log(loginUser);

    axios
      .post("http://127.0.0.1:3000/users/login/", loginUser)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <form id="loginUserForm" className="loginUserForm" onSubmit={loginUserForm}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={loginUser.username} onChange={handleInputChange} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={loginUser.password} onChange={handleInputChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
