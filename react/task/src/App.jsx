import { useState } from 'react'
import './App.css'
import DataContext, { DataProvider } from './context/DataContext'
import { useContext } from 'react'

function App() {
  const {list, setList, handleDelete, handleCheck}=useContext(DataContext)
  // const [list, setList]=useState([{id:1,name:"surya",fee:false},{id:2, name:"yaazh",fee:false}])
  // const handleDelete=(id)=>{
  //   const newList=list.filter((li)=>li.id!=id)
  //   setList(newList)
  // }
  // const handleCheck=(id)=>{
  //   const newList=list.map((li)=>
  //     li.id===id?{...li, fee:!li.fee}:li
  //   );
  //   setList(newList);
  //   const updated=newList.find((li)=>
  //     li.id==id
  // )
  //   console.log(updated.name, updated.fee)
  // }
  return (
    <>
      <h1>Students</h1>
      <ul>
          {list.map((li)=>
          <li key={li.id}>
            <input type='checkbox' checked={li.fee} onChange={()=>handleCheck(li.id)}/>
            {li.name}
            <button onClick={()=>handleDelete(li.id)}>Delete</button>
          </li>
          )}
      </ul>
    </>
  )
}

export default App
