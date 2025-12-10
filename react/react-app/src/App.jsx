import { useState } from 'react'
import { createContext } from 'react';
import './App.css'
import { DataProvider } from './context/DataContext';
import One from './One';
import Two from './Two';
import {Routes, Route, Link} from 'react-router-dom'
function App() {
  
  return (
    <>
      <nav>
        <Link to='/one'>One</Link><br />
        <Link to='/two'>Two</Link><br />
        <Link to='/'>Home</Link>
      </nav>
      <DataProvider>
          <Routes>
            <Route path='/one' element={<One/>}/>
            <Route path='/two' element={<Two/>}/>
            <Route path='/' element={<h1>Home</h1>} />
          </Routes>
      </DataProvider>
    </>
  )
}

export default App;
