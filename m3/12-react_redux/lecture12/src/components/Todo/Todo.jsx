import { useDispatch } from "react-redux";
import {removeTodo} from "../../redux/reducer"
import style from "./Todo.module.css";

function Todo({ todo }) {
  const dispatch = useDispatch();

  const handleOnClink = () => {
    dispatch(removeTodo(todo.id));
  };
  
  return (
    <div className={style.container}>
      <div>
        <h4>{todo.title}</h4>
        <p>{todo.description}</p>
      </div>
      <button onClick={handleOnClink} className={style.removeButton}>Remove</button>
    </div>
  );
}

export default Todo;
