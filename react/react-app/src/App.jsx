import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let city="New York";
  let nums=[1,2,3,4,5];
  return (
    <>
      <p>{city}</p>
      <p>The array: {nums}</p>
      <p>{JSON.stringify({name:"Surya",age:20})}</p>
      {/* <p>{true}</p> same happens for false, null, undefined, it won't print anything */}
      <p>{{name:"Surya",age:20}.name}</p>
    </>
  )
}

export default App
