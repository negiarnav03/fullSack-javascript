// method of creating a slice in RTK

import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = { // initial state can be anything, an object, an array etc. it is for storing the intial value of the state
    todos: [{ id: 1, text: "Hello" }]
}


export const todoSlice = createSlice({
    name: 'todo', // name for the slice (must be unique)
    initialState, // initial state of the slice
    reducers: { // they contains properties: and their functions (known as action handlers)
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo: (state,action) =>{
            state.todos = state.todos.map((todo) => (todo.id === action.payload.id ? action.payload : todo))
        }
    }
})


export const {addTodo, removeTodo, updateTodo} = todoSlice.actions
export default todoSlice.reducer

