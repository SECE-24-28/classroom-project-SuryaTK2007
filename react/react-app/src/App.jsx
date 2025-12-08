import { useState } from 'react'
import './App.css'
import Temp from './Temp.jsx'

function App() {

  let members=["Surya", "Saumyajit", "Yaazh"];
  return (
    <>
      <Temp param='Title'/>

     {
        members.length!=0?members.map((member)=>(<p>{member}</p>)):(<p>The list is empty</p>)
     }
    </>
  )
}

export default App
