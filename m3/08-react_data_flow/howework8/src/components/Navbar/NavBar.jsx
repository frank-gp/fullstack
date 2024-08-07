import styles from "./NavBar.module.css";
import logo from "../../assets/favicon.ico";
import avatar from "../../assets/react.svg";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        {/* <img src="https://via.placeholder.com/150" alt="Logo" className={styles.logo} /> */}
        <img src={logo} />
      </div>
      <div className={styles.linksSection}>
        <span>Home</span>
        <span>Mis Turnos</span>
        <span>About</span>
        <span>Contact</span>
      </div>
      <div className={styles.avatarSection}>
        <div>
          {/* <img src="https://via.placeholder.com/150" alt="Profile" className={styles.profileImg} /> */}
          <img src={avatar} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
