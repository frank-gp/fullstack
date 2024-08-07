import style from "./Todo.module.css";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../redux/reducer";

function Todo({ todo,  }) {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(removeTodo(todo.id))
  };
  return (
    <div className={style.container}>
      <div>
        <h4>{todo.title}</h4>
        <p>{todo.description}</p>
      </div>
      <button className={style.removeButton} onClick={handleOnClick}>
        Remove
      </button>
    </div>
  );
}

export default Todo;
