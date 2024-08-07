import styles from "./Turno.module.css";

const Turno = ({ id, date, time, status, description }) => {
  return (
    <div className={styles.turno} id={id}>
      <h3>{description}</h3>
      <hr />
      <p>Hora: {time}</p>
      <p>Fecha: {date}</p>
      <p className={styles.status}>{status.toUpperCase()}</p>
      <button disabled={status === "cancelled"}>Cancelar Turno</button>
    </div>
  );
};

export default Turno;
