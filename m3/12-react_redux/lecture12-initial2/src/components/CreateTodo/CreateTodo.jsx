import { useState } from "react";

import style from "./CreateTodo.module.css";

function CreateTodo({ setTodos, todos }) {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title: todo.title,
        description: todo.description,
        status: "Not Started",
      },
    ]);

    setTodo({
      title: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.inputContanier}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" value={todo.title} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input type="text" name="description" id="description" value={todo.description} onChange={handleChange} />
        </div>
        <div>
          <button className={style.addButton} type="submit">
            Create Todo
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreateTodo;
