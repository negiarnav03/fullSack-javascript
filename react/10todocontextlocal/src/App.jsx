import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import { TodoForm, TodoItem } from './components'


function App() {





  // using use state to manage the state of the application
  const [todos, setTodos] = useState([])
  

  // defining the methods to be used in the application, it will be passed to the provider via the value prop.
  const addTodo = (todo) => {
    setTodos((prev) => [{id:Date.now(),...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => (prevTodo.id !== id)))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo)))
  }



 // this one it to get the todos from the local storage when the application is loaded
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])

  // this one is to save the todos to the local storage whenever the todos are changed
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])





  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}} >
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>

                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>

                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'> 
                            <TodoItem todo={todo} />
                          </div>
                        )
                        )}
                    </div>

                </div>
            </div>
    </TodoProvider>
  )
}

export default App
