import Todo from "../Todo/Todo.jsx";

import style from "./TodoList.module.css";

// eslint-disable-next-line react/prop-types
function TodoList({ todos }) {
  return (
    <div className={style.container}>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
