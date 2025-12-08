import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let age=20;
  return (
    <>
      <p>{age>=18?"Adult":"Minor"}</p>
    </>
  )
}

export default App
