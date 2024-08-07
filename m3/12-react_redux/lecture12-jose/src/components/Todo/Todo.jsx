import { useDispatch } from "react-redux";
import style from "./Todo.module.css";
import { removeTodo } from "../../redux/reducer";

function Todo({ todo }) {
  const dispatch = useDispatch();
  console.log("prueba 1", todo);
  const handleClick = () => {
    dispatch(removeTodo(todo.title));
  };
  return (
    <div className={style.container}>
      <div>
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
      </div>
      <button className={style.removeButton} onClick={handleClick}>
        Remove
      </button>
    </div>
  );
}

export default Todo;
