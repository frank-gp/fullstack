const ComponentA = ({counter, onIncrement}) => {

    return (
        <div>
            <h1>ComponentA</h1>
            <p>Counter: {counter}</p>
            <button onClick={onIncrement}>Increment counter A</button>
        </div>
    );
}

export default ComponentA