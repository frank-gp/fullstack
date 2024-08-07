import { useEffect, useState } from "react";
// import misTurnosArray from "../../helpers/misTurnos";
import Turno from "../../components/Turno/Turno";
import styles from "./MisTurnos.module.css";
import axios from "axios";

const MisTurnos = () => {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:3000/turns/").then((response) => {
      setTurnos(response.data);
    });

    // fetch("http://127.0.0.1:3000/turns/")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setTurnos(data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   })
    // .finally(() => {
    //   console.log("Finally");
    // });

    return () => {};
  });

  return (
    <div>
      <h1 className={styles.title}>Mis Turnos</h1>
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
