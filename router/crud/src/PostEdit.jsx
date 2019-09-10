import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

function PostEdit({ match, setPosts, posts }) {

    const [editText, setEditText] = useState("");
    const [editPost, setEditPost] = useState("");
    const id = Number(match.params.id);
  

  useEffect(() => {
      if(posts.posts !== undefined) {
          const postIndex = posts.posts.findIndex((post) => post.id === id);
          const postData = posts.posts[postIndex];
          const text = postData.content;    
          setEditPost({post: postData});   
          setEditText(text);
      }
  }, [id, posts]);

  const back = () => {
      window.history.back();
  }

  const handleChange = e => {
      const text = e.target.value;
      setEditText(text);
  };

  const fetchData = async () => {
      const response = await fetch("http://localhost:7777/posts"); 
      const json = await response.json();
      setPosts({posts: json});   
  }

  const onUpdate = () => {
        fetch("http://localhost:7777/posts", {
              method: 'POST',
              headers: {                    
                  'Access-Control-Allow-Origin': 'http://localhost:7777/posts',
                  'Content-Type': 'application/json'
              },                
              body: JSON.stringify({"id": id, "content": editText}),
          }).then(() => {
              fetchData();              
          }).then(() => {
            window.history.back();
          })          
          .catch((error) => {
              console.log(error);
          })
  }
  
  return (
    editPost.post!==undefined && 
    <div className="card">
      <button className="close" onClick={back}>x</button> 
      <div className="avatar">
        <img src="" alt="" />
      </div>     
      <p className="author">Отправитель</p>
      <p>{editPost.post.created}</p>
      <form onSubmit={onUpdate}>
          <input name='content' value={`${editText}`} onChange={handleChange} placeholder='Содержание'/>
          <button type='submit'>Сохранить</button> 
      </form>                            
    </div>
    
  );
}

export default withRouter(PostEdit);