import { useState } from 'react'
import './App.css'

function App() {
  const [list, setList]=useState([{id:1, sname:"surya", fee:false},{id:2, sname: "hari", fee:false},{id:3, sname:"kumar", fee:true}]);
  const handleDelete=(id)=>{
    const newList=list.filter((item)=> item.id!==id);
    setList(newList);
  }
  const handleCheck = (id) => {
    const newList = list.map((item) =>
      item.id === id ? { ...item, fee: !item.fee } : item
    )
    const updated = newList.find(item => item.id === id);
    console.log("Student:", updated.sname, "Fee Status:", updated.fee);
    setList(newList);
  }
  return (
    <>
      <h1>Students List</h1>
      <hr/>
      <ul>
        {
          list.map((item)=>
            <li key={item.id}>
              <input type="checkbox" checked={item.fee} onChange={()=>handleCheck(item.id)}/>
              {item.sname}
              <button onClick={()=>handleDelete(item.id)}>Delete</button>
            </li>
          )
        }
      </ul>
    </>
  )
}

export default App
