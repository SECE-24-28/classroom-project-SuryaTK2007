import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import api from './api/Post'
function App() {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    const fetchData=async()=>{
      const res=await api.get("/feedback");
      console.log(res.data);
    }
    fetchData()
  },[])
  return (
    <>
     
    </>
  )
}

export default App
