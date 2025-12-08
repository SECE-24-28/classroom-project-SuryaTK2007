import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function demo(a){
    console.log("Hello " + a);
  }
  return (
    <>
      <button onClick={()=>demo("Surya")}>Click Me</button>
    </>
  )
}

export default App
