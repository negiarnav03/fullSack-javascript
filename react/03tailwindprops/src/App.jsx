import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name : "Arnav",
    age : 21
  }

  return (
    <>

      <h1 className='bg-green-500 text-black p-4 rounded-2xl text-2xl m-auto block text-center'> tailwind test</h1>
  
    <Card channel="Myntra" btnText="Visit store"/>
    <Card channel="amazon" />
    <Card channel="flipkart" />
    </>
  )
}

export default App
