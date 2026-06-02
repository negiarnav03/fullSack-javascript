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
    passwordRef.current?.select() // selects the text in the input field
    passwordRef.current?.setSelectionRange(0, 9999) // for mobile devices
    window.navigator.clipboard.writeText(password) // copies the text to the clipboard
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


/*
way 1 to copy  (window.navigator.clipboard.writeText)  -> deprecated
// Function to write text to clipboard
const copyToClipboard = () => {
  window.navigator.clipboard.writeText("Text you want to copy");
};

way 2 to copy  (document.execCommand) -> deprecated
// Function to write text to clipboard
const copyToClipboard = () => {
  document.execCommand("copy");
};

way 3 to copy (clipboard API)
import { useRef } from 'react';

function App() {
  const inputRef = useRef(null);

  const handleCopy = () => {
    // 1. Select the text inside the input field
    inputRef.current?.select();
    inputRef.current?.setSelectionRange(0, 99999); // For mobile devices
    
    // 2. Copy the text to clipboard
    window.navigator.clipboard.writeText(inputRef.current.value);
  };

  return (
    <>
      <input ref={inputRef} type="text" value="Text to copy" readOnly />
      <button onClick={handleCopy}>Copy</button>
    </>
  );
}

*/