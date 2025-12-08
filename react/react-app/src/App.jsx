import { useState } from 'react'
import './App.css'
import Temp from './Temp.jsx'

function App() {
  let [count, setCount] = useState(0)
  return (
    <>
     <h1>Count is {count}</h1>
     <button onClick={() => setCount((c) => c + 1)}>Increment</button>
     <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
     <Temp />
    </>
  )
}

export default App
