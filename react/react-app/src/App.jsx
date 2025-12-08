import { useState } from 'react'
import './App.css'
import Temp from './Temp.jsx'

function App() {

  let members=["Surya", "Saumyajit", "Yaazh"];
  return (
    <>
      <Temp param='Title'/>
     {
        members.map((member)=>(<p>{member}</p>))
     }
    </>
  )
}

export default App
