import React from "react";
import { Link } from 'react-router-dom';

function PostsList(props) {    
    const {posts} = props;  
  
    return (
        <div className="list">
            { posts.posts!==undefined && posts.posts.map(post =>
                  <Link to={`/posts/${post.id}`} key={post.id} state={post}> 
                      <div className="card" key={post.id}>                         
                            <div className="avatar">
                                <img src="" alt="" />
                            </div>                           
                            <p className="author">Отправитель</p>
                            <p>{post.created}</p>
                            <h2>{post.content}</h2>                                     
                      </div>
                  </Link>           
            )}
        </div>
    );  
}

export default PostsList;