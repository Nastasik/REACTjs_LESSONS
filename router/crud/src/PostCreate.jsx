import React, { useState } from "react";

function PostCreate({setPosts}) {   
    const [postText, setPostText] = useState("");

  const handleChange = e => {
      const text = e.target.value;
      setPostText(text);
  };
 
  const fetchData = async () => {
      const response = await fetch("http://localhost:7777/posts");  
      const json = await response.json();
      setPosts({posts: json});   
  }

  const handleSubmit = () => {
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
  
  return (
    <div className="create">
      <h2>Создать пост</h2>
      <form onSubmit={handleSubmit}>
        <textarea rows="3" cols="50" onChange={handleChange} />       
        <button type='submit'>Опубликовать</button>       
      </form>
    </div>
  );
}

export default PostCreate