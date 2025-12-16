import { createContext } from "react";
import { getCourses, deleteCourses, updateCourses, addCourses } from "../api/CourseApi";
import { useState, useEffect } from "react";

const DataContext = createContext();
const DataProvider = ({ children }) => {
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
    const handleSubmitAdd=async(e)=>{
      e.preventDefault();
      const course={title,duration};
      const res=await addCourses(course);
      setCourses([...courses,res.data]);
      setTitle("");
      setDuration("");
    }
  return (
    <DataContext.Provider
      value={{
        courses, title, duration, setTitle, setDuration, handleSubmitAdd
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };