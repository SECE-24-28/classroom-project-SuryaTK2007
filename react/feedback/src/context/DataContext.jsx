import { createContext, useState, useEffect } from "react";
import api from '../api/Post';

const DataContext=createContext();

export const DataProvider=({children})=>{
  const [posts, setPosts] = useState([])
  const fetchData=async()=>{
    const res=await api.get("/feedback");
    setPosts(res.data)
  }
  useEffect(()=>{
    fetchData()
  },[])
  const [search, setSearch]=useState('');
  const [searchResult, setSearchResult]=useState([]);
  useEffect(()=>{
    const result=posts.filter((post)=>post.title.includes(search));
    setSearchResult(result);
  },[search])
  const [title, setTitle]=useState('')
  const [body, setBody]=useState('')
  return(
    <DataContext.Provider value={{posts, setPosts, fetchData, search, setSearch, searchResult, title, setTitle, body, setBody}}>
        {children}
    </DataContext.Provider>
  )
}

export {DataContext}