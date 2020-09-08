import React, {useState} from 'react'



function Post(props){
    const[upcount, setUpCount] = useState(0)
    const[downcount, setDownCount] = useState(0)
    const [showText, setShowText] = useState(true);
    return(
        <div className="create-post">
           
    {showText &&<h3>Title: {props.title}</h3>} 
     {showText &&<p>{props.content}</p>}
     {showText &&<h4>Author: {props.author}</h4>}
     {showText &&<p>Date: {props.date}</p>}
    
     {showText &&<span>
         <button onClick={() => setUpCount(upcount + 1)}>upvote {upcount}</button>
         <button onClick={() => setDownCount(downcount + 1)} >downvote{downcount}</button><button>edit</button>
         <button onClick={() => setShowText(!showText)}>delete</button>
         <button>view full post</button>
     </span>}
            <hr/>
        
        </div>
    )
}

export default Post