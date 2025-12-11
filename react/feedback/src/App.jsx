import { useEffect } from 'react';
import { use, useContext, useState } from 'react'
import './App.css'
import Home from './component/Home'
import DataContext from './context/DataContext';
function App() {
  const {posts}=useContext(DataContext);
  const [search, setSearch]=useState('');
  const [searchResult, setSearchResult]=useState([]);
  useEffect(()=>{
    const result=posts.filter((post)=>post.title.includes(search));
    setSearchResult(result);
  },[search])
  return (
    <>
    <label>Search</label>
    <input type='text' name='search' value={search} onChange={(e)=>setSearch(e.target.value)}/>
     {
       search ? (
         searchResult.map((post)=>
           <div key={post.id}>
             <h3>{post.id}</h3>
             <h4>{post.title}</h4>
             <p>{post.body}</p>
           </div>
         )
       ) : (
         <Home/>
       )
     }
    </>
  )
}

export default App
