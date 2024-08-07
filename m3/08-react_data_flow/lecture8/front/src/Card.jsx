import styles from "./Card.module.css";

// const Card = ({character}) => {
const Card = ({character: { name, age }}) => {
  // const { name, age } = character;
  console.log(name, age)
  return (
    <div className={styles.container}>
      <h1>{name}</h1>
      <p>{age}</p>
    </div>
  );
};

export default Card;
