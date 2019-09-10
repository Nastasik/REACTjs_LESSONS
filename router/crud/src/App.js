import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import PostsList from './PostsList'
import PostView from './PostView'
import PostCreate from "./PostCreate";
import PostEdit from "./PostEdit";

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {               
        const fetchData = async () => {
            const response = await fetch("http://localhost:7777/posts", {
                method: 'GET'
            });       
            const json = await response.json();
            setPosts({posts: json});      
        }
        fetchData();
    }, [posts.length]);
  
    return (
      <div className="App">        
        <Router>
        <Redirect to="/" />        
          <Switch>
            <Route path="/posts/new" exact
                component={() => <PostCreate setPosts={setPosts}/>}/>
            <Route path="/posts/:id" exact
                component={() => <PostView setPosts={setPosts} posts={posts}/>}/>
            <Route path="/" exact component={() => (
                <>               
                    <Link to="/posts/new">
                      <button className="button">Создать</button>
                    </Link>
                    <PostsList posts={posts}/> 
                </>)}/>
            <Route path="/posts/:id/edit" exact
                component={() => <PostEdit setPosts={setPosts} posts={posts} />}/>
          </Switch>
        </Router>
      </div>
    ); 
}

export default App;