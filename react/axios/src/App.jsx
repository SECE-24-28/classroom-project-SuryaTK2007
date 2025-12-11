import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import api from './api/Stu_api'

function App() {
  const [SList, setSList]=useState([])
  useEffect(()=>{
    const fetchData=async()=>{
      const res=await api.get('/student')
      setSList(res.data)
    }
    fetchData()
  },[])
  return (
    <>
      <h1>Hello World</h1>
      {
        SList.map((stu) =>
          <p key={stu.id}>{stu.id} - {stu.sname} - {stu.smark}</p>
      )
      }
    </>
  )
}

export default App
