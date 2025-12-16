import './App.css'
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { DataContext } from './context/DataContext';
import { useContext } from 'react';
import EditCourse from './components/EditCourse';
import Home from './components/Home';

function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/editcourse/:id' element={<EditCourse/>}></Route>
     </Routes>
    </>
  )
}

export default App
