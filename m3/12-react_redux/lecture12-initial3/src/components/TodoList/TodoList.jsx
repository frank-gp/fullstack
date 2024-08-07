import Todo from "../Todo/Todo.jsx";

import style from "./TodoList.module.css";

function TodoList({ todos, deleteTodo }) {
  return (
    <div className={style.container}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;
