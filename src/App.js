import React from 'react'

import blogData from "./blogData"
import Post from "./Post"
import Login from "./Login"

function App(){
  const blogComponent =  blogData.map(post => <Post key={post.id} title={post.title} content={post.content} author={post.author} date={new Date().toLocaleTimeString()} />)

  return(
    <div>
        <Login/>
        {blogComponent}
        
    </div>
  )
}


export default App;
