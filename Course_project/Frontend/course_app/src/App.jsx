import { useEffect, useState } from 'react'
import './App.css'
import { getCourses, addCourses} from './api/CourseApi'
import { Link } from 'react-router-dom';

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

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const course={title,duration};
    const res=await addCourses(course);
    setCourses([...courses,res.data]);
    setTitle("");
    setDuration("");
  }

  return (
    <>
     <h1>Course App</h1>
     <form action="" onSubmit={handleSubmit}>
      <input type='text'value={title} onChange={(e)=>setTitle(e.target.value)}/><br /><br />
      <input type='text'value={duration} onChange={(e)=>setDuration(e.target.value)}/><br /><br />
      <button type='submit'>Add Course</button>
     </form>
      <ul>
        {
          courses.map((course) => (
            <li key={course._id}>
              <Link to="/editcourse">
                {course.title} - {course.duration}
              </Link>
            </li>
          ))
        }
        
      </ul>
     
    </>
  )
}

export default App
