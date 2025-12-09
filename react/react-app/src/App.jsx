import { useState } from 'react'
import './App.css'
function App() {
  const [originalList] = useState([
    { id: 1, sname: "surya", fee: false },
    { id: 2, sname: "hari", fee: false },
    { id: 3, sname: "kumar", fee: true }
  ]);
  const [list, setList] = useState(originalList);
  const [newName, setNewName] = useState("");
  const [search, setSearch] = useState("");
  const handleDelete = (id) => {
    setList(list.filter(item => item.id !== id));
  };
  const handleCheck = (id) => {
    const newList = list.map(item =>
      item.id === id ? { ...item, fee: !item.fee } : item
    );
    const updated = newList.find(item => item.id === id);
    console.log("Student:", updated.sname, "Fee Status:", updated.fee);
    
    setList(newList);
  };
  const handleRevert = () => {
    setList(originalList); 
  };
  const handleAdd = () => {
    const newStudent = {
      id: list.length + 1,
      sname: newName,
      fee: false
    };
    setList([...list, newStudent]);
    setNewName("");
  };
  const handleSearch = () => {
    const filteredList = list.filter(item =>
      item.sname.toLowerCase().includes(search.toLowerCase())
    );
    setList(filteredList);
  };
  return (
    <>
      <h1>Students List</h1>
      <hr />
      <input type='text' placeholder='Search here' value={search} onChange={(e)=>setSearch(e.target.value)}/><br /><br />
      <button onClick={()=>handleSearch()}>Search</button><br /><br />
      <input 
        type="text" 
        placeholder="Enter student name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />

      <button onClick={handleAdd}>Add Student</button>

      <ul>
        {list.map(item =>
          <li key={item.id}>
            <input 
              type="checkbox" 
              checked={item.fee} 
              onChange={() => handleCheck(item.id)}
            />
            {item.sname}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        )}
      </ul>

      <button onClick={handleRevert}>Revert</button>
    </>
  )
}

export default App;
