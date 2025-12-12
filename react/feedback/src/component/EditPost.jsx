import { useParams } from 'react-router-dom'
import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
const EditPost = () => {
    const {posts} = useContext(DataContext);
    const { id } = useParams();
    const post = posts.find((post) => post.id==id);
    if(!post){
        return <div>Post not found</div>
    }
  return (
    <div>
      <input type='text' value={post.title}/><br /><br />
      <textarea value={post.body}/><br /><br />
      <button>Delete</button>
    </div>
  )
}

export default EditPost
