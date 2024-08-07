import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(state);
      console.log(action);
      // state.todos.push(action.payload)
    },
    removeTodo: (state, action) => {},
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
