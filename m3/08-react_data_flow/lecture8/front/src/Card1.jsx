import styles from "./Card.module.css";

const Card = (props) => {
  const { name, age } = props.character;
  console.log(name, age)
  return (
    <div className={styles.container}>
      <h1>{name}</h1>
      <p>{age}</p>
    </div>
  );
};

export default Card;
