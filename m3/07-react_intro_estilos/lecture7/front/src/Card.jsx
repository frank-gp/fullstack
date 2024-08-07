import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <h1>Tarjeta</h1>
      <p>Nombre: Frank</p>
      <p>Email: user@mail.com</p>
    </div>
  );
};

export default Card;
