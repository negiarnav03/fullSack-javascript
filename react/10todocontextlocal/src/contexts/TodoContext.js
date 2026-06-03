import {createContext, useContext} from 'react'


export const TodoContext = createContext({
    todos:[
        {
            // these are the values
            id: 1,
            todo: "todo msg",
            completed: false,
        }
    ],
    // these are the methods in a context api
    addTodo: () => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}

})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider