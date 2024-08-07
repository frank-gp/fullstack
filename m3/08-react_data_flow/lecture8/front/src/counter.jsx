import "./App.css";
import styles from "./App.module.css";
import { CustomButton } from "./CustomButton";
import { useState } from "react";

function App() {
  const [state, setState] = useState(0);

  const increment = () => {
    setState(state + 1);
  };

  return (
    <div>
      <h2 className={styles.subtitle}>Contador: {state}</h2>
      <CustomButton onClick={increment}>Contador de clics</CustomButton>

    </div>
  );
}

export default App;
