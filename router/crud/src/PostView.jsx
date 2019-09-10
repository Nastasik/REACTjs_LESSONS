import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

function PostView({ match, setPosts, posts }) { 
    const [post, setPost] = useState("");
    const id = Number(match.params.id);

    useEffect(() => {
        if(posts.posts !== undefined) {
            const postIndex = posts.posts.findIndex((post) => post.id === id);
            const postData = posts.posts[postIndex];           
            setPost({post: postData});
        }
    }, [id, posts]);

    const fetchData = async () => {
      const response = await fetch("http://localhost:7777/posts");     
      const json = await response.json();      
      setPosts({posts: json});   
    }

    const onRemove = () => {           
        fetch("http://localhost:7777/posts/" + id, {              
                method: "DELETE",             
            }).then(() => {                     
                fetchData(); 
            }).then(() => {
                window.history.back();
            })         
            .catch((error) => {
                console.log(error);
            })      
        fetchData();      
    }

    const back = () => {
        window.history.back();
    }

    return (
      post.post!==undefined && 
          <div className="card">
                <button type="button" className="close" onClick={back}>x</button>
                <div className="avatar">
                    <img src="" alt="" />
                </div>
                <p className="author">Отправитель</p>
                <p>{post.post.created}</p>
                <h2>{post.post.content}</h2>
                <div className="container">        
                    <Link to={`/posts/${post.post.id}/edit`}>
                        <button>Изменить</button>
                    </Link> 
                    <form onSubmit={onRemove}>      
                        <button type="submit">Удалить</button> 
                    </form>     
                </div>  
          </div>         
    );
}

export default withRouter(PostView);