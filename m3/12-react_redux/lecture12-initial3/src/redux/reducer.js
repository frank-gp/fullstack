import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    todos: [
        { id: 1, title: "Todo 1", description: "This is todo 1", status: "Not Started" },
      ]
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // console.log(state.todos)
            action.payload.id = state.todos.length + 1
            // console.log(action)
            state.todos = state.todos.concat(action.payload)

            // state.todos.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }

})

export const {addTodo, removeTodo} = todoSlice.actions