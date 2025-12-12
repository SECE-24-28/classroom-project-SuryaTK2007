import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext.jsx'
import { Link } from 'react-router-dom'

const Home = () => {
  const {posts} = useContext(DataContext)
  return (
    <>
    {
      posts.map((post)=>
        <div key={post.id} className="post">
          <Link to={`/editpost/${post.id}`}>
            <h3>{post.id}</h3>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </Link>
        </div>
      )
     }
    </>
  )
}

export default Home
