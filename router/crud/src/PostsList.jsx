import React from "react";

import { Link } from 'react-router-dom';



function PostsList(props) {    
  const {posts} = props;

  
  console.log(posts.posts, 'POSTSinList')
    return (
        <div className="list">
            { posts.posts!==undefined && posts.posts.map(post =>
                  <Link to={`/posts/${post.id}`} key={post.id} state={post}> 
                      <div className="card" key={post.id}>                         
                          <img className="avatar" src="" alt="avatar"/>
                          <div className="content">
                            <div className="author">Отправитель</div>
                            <div>{post.created}</div>
                            <h1>{post.content}</h1>
                          </div>            
                      </div>
                  </Link>           
            )}
        </div>
    );  
}

export default PostsList;