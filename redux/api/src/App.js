import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainPage from './components/MainPage';
import IdPage from './components/IdPage';
import {Redirect} from 'react-router-dom';

function App() {
  return (
    <Router>           
        <Redirect from="/" to="/services" />       
        <Route path="/services" component={MainPage} exact/>
        <Route path="/services/:id" component={IdPage} exact/> 
    </Router>      
  );
}

export default App;
