import { useState } from "react";

import style from "./CreateTodo.module.css";

function CreateTodo() {
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
