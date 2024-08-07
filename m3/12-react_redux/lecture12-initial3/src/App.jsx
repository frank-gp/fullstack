// import { useState } from "react";
import { useSelector } from "react-redux";

import CreateTodo from "./components/CreateTodo/CreateTodo.jsx";
import TodoList from "./components/TodoList/TodoList.jsx";

import style from "./App.module.css";

function App() {
  // const [todos, setTodos] = useState([
  //   { id: 1, title: "Todo 1", description: "This is todo 1", status: "Not Started" },
  // ]);

  // const deleteTodo = (id) => {
  //   setTodos(todos.filter((todo) => todo.id !== id));
  // };
  const todos = useSelector((state) => state.todos);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h3>CreateTodo</h3>
        <CreateTodo /* setTodos={setTodos} */ todos={todos} />
      </div>
      <div>
        <h3>Todo List</h3>
        {todos.length === 0 && <p>No todos</p>}
        <TodoList todos={todos} /* deleteTodo={deleteTodo} */ />
      </div>
    </div>
  );
}

export default App;
