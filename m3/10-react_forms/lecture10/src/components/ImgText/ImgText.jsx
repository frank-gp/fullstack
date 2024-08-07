import styles from "./ImgText.module.css";

const ImgText = ({ text }) => {
  return (
    <div className={styles.container}>
      <img src="https://source.unsplash.com/random?food" alt="" />
      <p>{text}</p>
    </div>
  );
};

export default ImgText;
