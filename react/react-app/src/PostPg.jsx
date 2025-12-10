import { Route } from 'react-router-dom'
import React from 'react'
import { Link } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Post from './Post'

const PostPg = () => {
  return (
    <div>
    <ol>
        <li><Link to='/post/1'>Post1</Link></li>
        <li><Link to='/post/2'>Post2</Link></li>
        <li><Link to='/post/3'>Post3</Link></li>
    </ol>
      <Routes>
        <Route path=':id' element={<Post />}/>
      </Routes>
    </div>
  )
}

export default PostPg
