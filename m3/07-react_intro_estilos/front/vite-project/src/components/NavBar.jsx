import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <span>Home</span>
      <span>Mis Turnos</span>
      <span>About</span>
      <span>Contact</span>
    </div>
  );
};

export default NavBar;
