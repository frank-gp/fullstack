import { useState } from "react";

import style from "./CreateTodo.module.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/reducer";

function CreateTodo() {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const handleChange = (event) => {
    setTodo({
      ...todo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // const {title, description} = event.target.value

    console.log(event.target.value);

    dispatch(addTodo(todo));
  };

  //   useEffect(() => {
  //     dispatch(addTodo(todo));
  //   }, [todo]);

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
          <button className={style.button} type="submit">
            Create Todo
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreateTodo;
