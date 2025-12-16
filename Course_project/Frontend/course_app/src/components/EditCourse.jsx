import React, { useContext } from 'react'
import { deleteCourses, updateCourses } from '../api/CourseApi'
import { useParams } from 'react-router-dom'
import { DataContext } from '../context/DataContext'

const EditCourse = () => {
  const {courses, title, duration}=useContext(DataContext)
  const {id}=useParams();
  const clickedCourse=courses.find((course)=>(course._id).toString()===id.toString())
  if(!clickedCourse)
    return (
  <>
  <h1>Course Not Found</h1>
  </>
             )
  return (
    <div>
      <h1>Edit Course </h1>
      <h2>{clickedCourse.title}</h2>
    </div>
  )
}

export default EditCourse
