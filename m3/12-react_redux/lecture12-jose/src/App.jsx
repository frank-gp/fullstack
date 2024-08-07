// import { useState } from "react"

import { useEffect, useState } from "react";
import CreateTodo from "./components/CreateTodo/CreateTodo.jsx";
import TodoList from "./components/TodoList/TodoList.jsx";

import { useSelector } from "react-redux";

function App() {
  const [todos3, setTodos3] = useState([]);

  const todos = useSelector((state) => state.todos);

  console.log(todos);

  useEffect(() => {
    if (todos.length === 0) return;

    setTodos3(todos);
  }, [todos]);

  return (
    <>
      <div>
        <div>
          <h3>CreateTodo</h3>
          <CreateTodo />
        </div>
        <div>
          <h3>Todo List</h3>
          {todos.length === 0 ? <p>No todos</p> : <TodoList todos={todos3} />}
        </div>
      </div>
    </>
  );
}

export default App;
