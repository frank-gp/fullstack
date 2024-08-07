const ComponentB = ({ counter, onIncrement }) => {
  return (
    <div>
      <h1>ComponentB</h1>
      <p>Counter: {counter}</p>
      <button onClick={onIncrement}>Increment counter B</button>
    </div>
  );
};

export default ComponentB;
