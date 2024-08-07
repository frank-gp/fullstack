import "./App.css";
// import styles from "./App.module.css";
import { useState } from "react";
import Card from "./Card";

function App() {
  const array1 = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 25 },
  ];
  const [characters, setCharacters] = useState(array1);

  const addCharacter = () => {
    setCharacters([...characters, { id: 3, name: "Bob", age: 40 }]);
  };

  const modifyCharacter = () => {
    characters[0].age = 35;
    setCharacters([...characters]);
  }

  return (
    <>
      {characters.map((item) => {
        return (
          // <div key={item.id}>
          //   <h2>{item.name}</h2>
          //   <h2>{item.age}</h2>
          // </div>
          <Card key={item.id} character={item} />
        );
      })}

      <button onClick={addCharacter}>Add</button>
      <button onClick={modifyCharacter}>modify</button>
    </>
  );
}

export default App;
