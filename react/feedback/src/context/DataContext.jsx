import { createContext, useState, useEffect } from "react";
import api from '../api/Post';

const DataContext=createContext();

export const DataProvider=({children})=>{
  const [posts, setPosts] = useState([])
    useEffect(()=>{
    const fetchData=async()=>{
      const res=await api.get("/feedback");
      setPosts(res.data)
    }
    fetchData()
  },[])
  const [search, setSearch]=useState('');
  const [searchResult, setSearchResult]=useState([]);
  useEffect(()=>{
    const result=posts.filter((post)=>post.title.includes(search));
    setSearchResult(result);
  },[search, posts])
  return(
    <DataContext.Provider value={{posts, search, setSearch, searchResult}}>
        {children}
    </DataContext.Provider>
  )
}

export {DataContext}