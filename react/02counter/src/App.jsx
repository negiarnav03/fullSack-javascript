import { useState } from 'react' //it calls hooks
// useState is a hook and it returns an array which has two values [variable , function]

import './App.css'

function App() {

  const [Counter, setCount] = useState(0)

  //let Counter = 15;

  const addValue = () => {

    setCount(Counter + 1);
    console.log(Counter);
  }

  const changeValue = () => {

    setCount(Counter - 1);
    console.log(Counter);
  }

  return (
    <>
    <h1>hello world</h1>
    <h2>Counter value: {Counter}</h2>

    <button onClick={addValue}>add value{Counter}</button>
    <br/>
    <button onClick={changeValue}>remove value{Counter}</button>
    </>


  )
}

export default App
