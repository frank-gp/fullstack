import { Link } from "react-router-dom";
import style from "./styles/NavBar.module.css";

function Navbar() {
  return (
    <div className={style.container}>
      {/* <a href="/home">Home</a>
      <a href="/about">About</a> */}
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navbar;
