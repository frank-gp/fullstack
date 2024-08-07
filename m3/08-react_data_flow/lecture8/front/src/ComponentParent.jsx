import { useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

const ComponentParent = () => {
  const [counter, setCounter] = useState(0);

  const handleOnIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <ComponentA counter={counter} onIncrement={handleOnIncrement} />
      <ComponentB counter={counter} onIncrement={handleOnIncrement} />
    </div>
  );
};

export default ComponentParent;
