import { useState } from 'react'
import { createContext } from 'react';
import './App.css'
import { DataProvider } from './context/DataContext';
import One from './One';
import Two from './Two';
function App() {
  
  return (
    <>
      <DataProvider>
          <One/>
          <Two/>
      </DataProvider>
    </>
  )
}

export default App;
