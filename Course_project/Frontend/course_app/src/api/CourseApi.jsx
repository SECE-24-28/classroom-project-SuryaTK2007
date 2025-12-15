import axios from 'axios'
const api=axios.create({baseURL:"https://localhost:4000/api"})
export const getCourse=()=>axios.get("/courses")
export const addCourses=(course)=>axios.post("/courses",course);
export const updateCourses=(id, course)=>axios.put(`courses/${id}`, course);
export const deleteCourses=(id)=>axios.get(`courses/${id}`);