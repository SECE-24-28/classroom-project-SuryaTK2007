import { useState } from 'react'
import './App.css'
import Temp from './Temp.jsx'

function App() {
  let members=["Surya", "Saumyajit", "Yaazh"];
  return (
    <>
     {
        members.map((member)=>(<p>{member}</p>))
     }
    </>
  )
}

export default App
