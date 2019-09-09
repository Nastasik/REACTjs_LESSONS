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
        
        <Link to={`/posts/${post.id}/edit`}>
            <button className="form-button">Изменить</button>
        </Link>       
        <button onClick={onRemove(id)} className="button-delete">Удалить</button>
        
      </div>
    </div>
  );
}

export default withRouter(PostEdit);