import { useEffect, useState } from 'react'
import './App.css'
import { getCourses } from './api/CourseApi'

function App() {
  const [courses, setCourses]=useState([]);
  const [title, setTitle]=useState("");
  const [duration, setDuration]=useState("");
  const fetchCourse=async()=>{
    const res=await getCourses();
    setCourses(res.data);
  }
  useEffect(()=>{
    fetchCourse();
  },[])
  return (
    <>
     <h1>Course App</h1>
     <form action="">
      <input type='text'/><br /><br />
      <input type='text'/><br /><br />
      <button>Add Course</button>
     </form>
      <ul>
        {
          courses.map((course)=>(
            <li>{course.title} - {course.duration}</li>
          ))
        }
        
      </ul>
     
    </>
  )
}

export default App
