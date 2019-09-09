import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import PostsList from './PostsList'

import PostCreate from "./PostCreate";
import PostEdit from "./PostEdit";

function App() {
  const [posts, setPosts] = useState([]);


  useEffect(() => {               
    const fetchData = async () => {
      const response = await fetch("http://localhost:7777/posts", {
        method: 'GET'
      })
      console.log(response, 'response')  
      const json = await response.json();         
      console.log(json, 'date')      
      setPosts({posts: json});
      
  }
  fetchData();
    }, [posts.length]);
  console.log(posts, 'postsINapp')
 

  
  const handleOnRemove = id => () => {
    const fetchData = async () => {      
      try {
          const response = await fetch("http://localhost:7777/posts/" + id, {              
              metod: 'DELETE'             
          });   
                   
          const data = await response.json();                              
          setPosts({data});          
      } catch (error) {
          console.log(error);
      } 
    };
    fetchData();
    
  };
  
    return (
      <div className="App">        
        <Router>
        <Redirect to="/" />        
          <Switch>
            <Route path="/posts/new" exact
                component={() => <PostCreate setPosts={setPosts}/>}
            />
            <Route path="/posts/:id" exact
                component={() => <PostEdit setPosts={setPosts} posts={posts} onRemove={handleOnRemove} />}
            />
            <Route path="/" exact component={() => (
                <>               
                    <Link to="/posts/new">
                      <button className="button">Создать пост</button>
                    </Link>
                    <PostsList posts={posts}/> 
                </>)}
            />
            <Route path="/posts/:id/edit" exact
                component={() => <PostView setPosts={setPosts} posts={posts} onRemove={handleOnRemove} />}
            />
          </Switch>
        </Router>
      </div>
    ); 
}

export default App;