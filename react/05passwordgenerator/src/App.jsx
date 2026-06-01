import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {

  const [length, setLength ] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  //const [copyText, setCopyText] = useState("Copy")

    
  // useRef is used to directly access the DOM element without re-rendering
  const passwordRef= useRef(null) // it will refer to the input field

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 9999) // for mobile devices
    window.navigator.clipboard.writeText(password)
    // setCopyText("Copied!")
    // setTimeout(() => {
    //   setCopyText("Copy")
    // }, 2000) 
  }, [password])


  const generatePassword=useCallback(()=>{ // memoizes the function (re-creates it only when dependencies change)
    let pass = ""
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numberAllowed) str+='0123456789'
    if(charAllowed) str+='!@#$%^&*()_+~`|}{[]:;?><,./-='

    for(let i =1;i<=length;i++){
      pass += str.charAt(Math.floor(Math.random()*str.length))
    }
    setPassword(pass)
    
  },[length, numberAllowed, charAllowed, setPassword]) // takes these dependencies in account(chache memory) 
  // to decide when to re-create the function

  useEffect(()=>{ // runs the function on initial mount and whenever dependencies change
    generatePassword()
  }, [length, numberAllowed, charAllowed, generatePassword])



  return (
    <>

    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'> 
      <h1 className='text-4xl text-center text-white my-3'>Password Generator</h1>  

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
         type='text'
        value={password}
        className='outline-none w-full py-1 px-3 placeholder: text-black bg-white'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />

        <button 
        onClick={copyPasswordToClipboard} 
        className='bg-blue-700 text-white px-3 py-1 shrink-0' >copy
        </button>
      </div>

      <div className='flex text-sm gap-x-2'> 
        <div className='flex items-center gap-x-1'>
          <input 
          type='range' 
           min={6}
           max={50}
           value={length}
           className='cursor-pointer'
           onChange={(e)=>setLength(e.target.value)}
          />
          <label>length:{length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type='checkbox'
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={()=>setNumberAllowed((prev)=>!prev)}

          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type='checkbox'
          defaultChecked={charAllowed}
          id="charInput"
          onChange={()=>setCharAllowed((prev)=>!prev)}

          />
          <label htmlFor='charInput'>Characters</label>
        </div>

        


      </div>
    
    </div>
    </>
  )
}

export default App
