import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import LogIn from './components/LogIn'
import Profile from './components/Profile'

function App() {
  

  return (
    <UserContextProvider>
      <h1>Mini conext</h1>
      <LogIn/>
      <Profile/>
      
    </UserContextProvider>
  )
}

export default App
