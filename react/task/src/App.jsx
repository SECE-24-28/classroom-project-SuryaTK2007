import { useState } from 'react'
import './App.css'

function App() {
  const [list, setList]=useState([{id:1,name:"surya",feeStatus:"false"},{id:2, name:"yaazh",feeStatus:"false"}])
  return (
    <>
      <h1>Students</h1>
      <ul>
          {list.map((li)=>
          <li key={li.id}>
            {li.name}
          </li>
          )}
      </ul>
    </>
  )
}

export default App
