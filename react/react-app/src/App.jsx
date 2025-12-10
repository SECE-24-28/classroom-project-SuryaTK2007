import { useEffect, useState, useRef } from "react";
import "./App.css"

function App() {
  const [originalList, setOriginalList] = useState([]); 
  const [list, setList] = useState([]);
  const [newName, setNewName] = useState("");
  const [search, setSearch] = useState("");
  const inputRef=useRef(null);
  useEffect(() => {
    const data = [
      { id: 1, sname: "surya", fee: false },
      { id: 2, sname: "hari", fee: false },
      { id: 3, sname: "kumar", fee: true }
    ];
    setOriginalList(data); 
    setList(data); 
  }, []);

  const handleDelete = (id) => {
    setList(list.filter(item => item.id !== id));
  };

  const handleCheck = (id) => {
    const newList = list.map(item =>
      item.id === id ? { ...item, fee: !item.fee } : item
    );

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
    inputRef.current.focus();
  };

  const handleSearch = () => {
    const filtered = originalList.filter(item =>
      item.sname.toLowerCase().includes(search.toLowerCase())
    );
    setList(filtered);
  };

  return (
    <>
      <h1>Students List</h1>
      <input
        type="text"
        placeholder="Search here"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      /><br></br><br></br>
      <button onClick={handleSearch}>Search</button><br></br><br></br>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter student name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      /><br></br><br></br>
      <button onClick={handleAdd}>Add Student</button>

      <ul>
        {list.map(item => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.fee}
              onChange={() => handleCheck(item.id)}
            />
            {item.sname}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <button onClick={handleRevert}>Revert</button>
    </>
  );
}

export default App;
