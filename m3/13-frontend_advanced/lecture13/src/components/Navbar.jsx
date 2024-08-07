// import { useState } from "react";
import { useToggle } from "../hooks/useToggle";
import UserPortrait from "./UserPortrait";

import "../styles/Navbar.css";

function Navbar() {
  // const [isLogged, setIsLogged] = useState(false);
  // const toggleHandler = () => setIsLogged(!isLogged);

  const [isLogged, toggleHandler] = useToggle(false);

  return (
    <div className="nav-container">
      <div className="buttons">
        <button onClick={toggleHandler}>{isLogged ? "Logout" : "Login"}</button>
      </div>
      <UserPortrait status={isLogged} />    
    </div>
  );
}

export default Navbar;
