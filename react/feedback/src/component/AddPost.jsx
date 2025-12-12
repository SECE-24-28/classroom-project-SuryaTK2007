import { useState , useContext} from 'react'
import React, { use } from 'react'
import { DataContext } from '../context/DataContext'
import api from '../api/Post'

const AddPost = () => {

  const {posts, fetchData, title, setTitle, body, setBody, handleSubmit}=useContext(DataContext)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <textarea placeholder='Body' value={body} onChange={(e)=>setBody(e.target.value)}/>
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default AddPost
