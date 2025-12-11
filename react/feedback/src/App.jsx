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
      setPosts(res.data)
    }
    fetchData()
  },[])
  return (
    <>
     {
      posts.map((post)=>
        <div key={post.id}>
          <h3>{post.id}</h3>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      )
     }
    </>
  )
}

export default App
