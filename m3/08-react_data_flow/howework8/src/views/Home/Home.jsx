import ImgText from "../../components/ImgText/ImgText";
// import PhotoTextSection from "../components/PhotoTextSection";
import styles from "./Home.module.css";
import texts from "../../helpers/texts";
import { useState } from "react";

const Home = () => {
  const [textsToShow, setTextsToShow] = useState(texts);

  return (
    <>
      {/* <PhotoTextSection /> */}
      <div className={styles.container}>
        <h3>Bienvenido al Gestor de Turnos</h3>
        {textsToShow.map((text, index) => {
          return <ImgText key={index} text={text} />;
        })}
      </div>
    </>
  );
};

export default Home;
