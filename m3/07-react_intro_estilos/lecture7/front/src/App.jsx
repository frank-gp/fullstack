import "./App.css";
import CardList from "./CardList";
// import Login from "./Login";
// import Register from "./Register";
import styles from "./App.module.css";
import { CustomButton } from "./CustomButton";
// console.log(styles)
console.log(CustomButton)

function App() {
  // const isRegistered = false;
const counter = 0;
  return (
    <div>
      <h1 className={styles.title}>Mi primera app</h1>
      <h2 className={styles.subtitle}>Contador: {counter}</h2>
      <CustomButton>Contador de clics</CustomButton>
      <CardList />
      {/* {isRegistered ? <Login /> : <Register />} */}

      {/* {isRegistered && <Login />}
      {!isRegistered && <Register />} */}
    </div>
  );
}

export default App;
