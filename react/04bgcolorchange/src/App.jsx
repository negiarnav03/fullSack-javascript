import { useState } from 'react'
import './App.css'


function App() {
  
  const [color, setColor] = useState('#313131')

  return (
  
   <div className='w-full h-screen duration-100'
   style={{backgroundColor: color}}
   >

    <div className='fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2'>

      <div className="flex flex-wrap gap-3 shadow-lg bg-white justify-center 
      px-3 py-2 rounded-3xl ">

          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "red"}}> red </button>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "green"}}>green </button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "blue"}}>blue</button>
          <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "yellow"}}>yellow</button>
          <button onClick={() => setColor("orange")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "orange"}}>orange</button>

      </div>
      
    </div>
    
   </div>
   
  )
}

export default App
