import { useEffect, useState } from "react";
import Turno from "../../components/Turno/Turno";
import styles from "./MisTurnos.module.css";
import axios from "axios";

const MisTurnos = () => {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:3000/turns/")
      .then((response) => {
        setTurnos(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // No es necesario especificar un cleanup para este useEffect, así que no necesitas return () => {} aquí
  }, []); // <- Array vacío como segundo argumento para que se ejecute solo una vez

  return (
    <div>
      <h1 className={styles.title}>Mis Turnos</h1>
      <div className={styles.mis_turnos}>
        {turnos.map((turno) => (
          <Turno key={turno.id} {...turno} />
        ))}
      </div>
    </div>
  );
};

export default MisTurnos;
