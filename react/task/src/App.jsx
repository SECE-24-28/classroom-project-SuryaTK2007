import { useState } from 'react'
import './App.css'

function App() {
  const [list, setList]=useState([{id:1,name:"surya",fee:false},{id:2, name:"yaazh",fee:false}])
  const handleDelete=(id)=>{
    const newList=list.filter((li)=>li.id!=id)
    setList(newList)
  }

  return (
    <>
      <h1>Students</h1>
      <ul>
          {list.map((li)=>
          <li key={li.id}>
            <input type='checkbox' checked={li.fee}/>
            {li.name}
            <button onClick={()=>handleDelete(li.id)}>Delete</button>
          </li>
          )}
      </ul>
    </>
  )
}

export default App
