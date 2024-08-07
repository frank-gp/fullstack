import { useSelector } from "react-redux";
import CreateTodo from "./components/CreateTodo/CreateTodo.jsx";
import TodoList from "./components/TodoList/TodoList.jsx";

import style from "./App.module.css";

function App() {
  const todos = useSelector((state) => state.todos);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h3>CreateTodo</h3>
        <CreateTodo />
      </div>
      <div>
        <h3>Todo List</h3>
        {todos.length === 0 && <p>No todos</p>}
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
