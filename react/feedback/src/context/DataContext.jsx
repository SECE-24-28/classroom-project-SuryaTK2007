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
  return(
    <DataContext.Provider value={{posts}}>
        {children}
    </DataContext.Provider>
  )
}

export default DataContext