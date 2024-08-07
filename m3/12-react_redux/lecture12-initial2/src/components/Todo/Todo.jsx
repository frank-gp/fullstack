import style from "./Todo.module.css";

function Todo({ todo, deleteTodo }) {
  return (
    <div className={style.container}>
      <div>
        <h4>{todo.title}</h4>
        <p>{todo.description}</p>
      </div>
      <button className={style.removeButton} onClick={() => deleteTodo(todo.id)}>
        Remove
      </button>
    </div>
  );
}

export default Todo;
