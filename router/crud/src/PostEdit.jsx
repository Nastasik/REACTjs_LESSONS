import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

function PostEdit({ match, setPosts, posts, onRemove }) {
  
console.log(posts, 'post11')
  const [post, setPost] = useState("");
  const id = Number(match.params.id);
  console.log(posts.posts, 'match.params.id')
  console.log(post, 'post')

  useEffect(() => {
    if(posts.posts !== undefined) {
    const postIndex = posts.posts.findIndex((post) => post.id === id);

        console.log(postIndex, 'postIndex')
    const postData = posts.posts[postIndex];
    console.log(postData, 'postData')
    setPost({post: postData});}
}, [id]);

const back = () => {
  window.history.back();
}

const [postText, setPostText] = useState("");

const handleChange = e => {
    const text = e.target.value;
    setPostText(text);
};

const fetchData = async () => {
  const response = await fetch("http://localhost:7777/posts");
  console.log(response, 'response');
  const json = await response.json();         
  console.log(json, 'date');      
  setPosts({posts: json});   
}

const handleClick = () => {
        fetch("http://localhost:7777/posts", {
              method: 'POST',
              headers: {                    
                  'Access-Control-Allow-Origin': 'http://localhost:7777/posts',
                  'Content-Type': 'application/json'
              },                
              body: JSON.stringify({"id": 0, "content": postText}),
          }).then(() => {
              fetchData();
              console.log(postText,'postText!')
          }).then(() => {
            window.history.back();
          })          
          .catch((error) => {
              console.log(error);
          })
    }
  
console.log(post, 'POST((')
  return (
    post.post!==undefined && <div className="card">
      <div className="close" onClick={back}>x</div> 
      <div className="avatar">
        <img src="" alt="" />
      </div>      
      <div className="content">
        <div className="author">Отправитель</div>
        <div>{post.post.created}</div>
        <h1>{post.post.content}</h1>        
        <input name='content' onChange={handleChange} value={post.post.content} placeholder='Содержание'/>
        <button onClick={handleClick} className="form-button">Сохранить</button>              
      </div>
    </div>
  );
}

export default withRouter(PostEdit);