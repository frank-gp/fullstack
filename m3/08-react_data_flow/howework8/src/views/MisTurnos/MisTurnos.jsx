import { useState } from "react";
import misTurnosArray from "../../helpers/misTurnos";
import Turno from "../../components/Turno/Turno";
import styles from "./MisTurnos.module.css";

const MisTurnos = () => {
  const [turnos, setTurnos] = useState(misTurnosArray);

  return (
    <div>
      <h1>Mis Turnos</h1>
      <h3>Este es el componente Mis Turnos</h3>
      <div className={styles.mis_turnos}>
        {turnos.map((turno) => (
          //   <div>
          <Turno key={turno.id} {...turno} />
          //   </div>
          // <Turno id={turno.id} date={turno.date} time={turno.time} status={turno.status} />
        ))}
      </div>
      {/* <Turno /> */}
    </div>
  );
};

export default MisTurnos;
