import { useState } from "react";

import CreateTodo from "./components/CreateTodo/CreateTodo.jsx";
import TodoList from "./components/TodoList/TodoList.jsx";

import style from "./App.module.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Todo 1", description: "This is todo 1", status: "Not Started" },
    { id: 2, title: "Todo 2", description: "This is todo 2", status: "Not Started" },
    { id: 3, title: "Todo 3", description: "This is todo 3", status: "Not Started" },
  ]);

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
