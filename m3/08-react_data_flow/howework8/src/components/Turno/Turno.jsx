import styles from "./Turno.module.css";

const Turno = ({ id, date, time, status }) => {
  return (
    <div className={styles.turno}>
      <h4>{id}</h4>
      <h4>{date}</h4>
      <h4>{time}</h4>
      <h4>{status}</h4>
    </div>
  );
};

export default Turno;
