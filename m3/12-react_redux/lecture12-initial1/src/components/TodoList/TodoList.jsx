import Todo from "../Todo/Todo.jsx";

import style from "./TodoList.module.css";

function TodoList({ todos }) {
  return (
    <div className={style.container}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
