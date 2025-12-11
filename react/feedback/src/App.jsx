import { useContext, useState } from 'react'
import './App.css'
import Home from './component/Home'
import { DataContext } from './context/DataContext';
import Search from './component/Search';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  
  return (
    <>
      <button onClick={() => setActiveTab('home')}>Home</button>
      <button onClick={() => setActiveTab('search')}>Search</button>
      {activeTab === 'home' ? <Home /> : <Search />}
    </>
  )
}

export default App

