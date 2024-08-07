import { useNavigate } from "react-router-dom";
import style from "./styles/LoginForm.module.css";

function LoginForm() {
  const navigate = useNavigate();
  // console.log( navigate );


  const handleOnSubmit = (event) => {
    event.preventDefault();
    // logica para verificar credenciales de usuario
    navigate("/home");
  }

  return (
    <div className={style.container}>
      <h1>Bienvenido</h1>
      <form onSubmit={handleOnSubmit}>
        <h1>Login</h1>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
