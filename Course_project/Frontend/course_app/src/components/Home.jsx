import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import EditCourse from './EditCourse';

const Home = () => {
  const {courses, title, duration, setTitle, setDuration, handleSubmitAdd}=useContext(DataContext);
  return (
    <div>
      <h1>Course App</h1>
     <form action="" onSubmit={handleSubmitAdd}>
      <input type='text'value={title} onChange={(e)=>setTitle(e.target.value)}/><br /><br />
      <input type='text'value={duration} onChange={(e)=>setDuration(e.target.value)}/><br /><br />
      <button type='submit'>Add Course</button>
     </form>
      <ul>
        {
          courses.map((course) => (
            <li key={course._id}>
              <Link to={`/editcourse/${course._id}`}>
                {course.title} - {course.duration}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Home
