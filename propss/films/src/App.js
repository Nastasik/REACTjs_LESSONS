import React from 'react';
import Stars from './Stars';
import './App.css';

function App() {
  return (    
      <>
        <Stars count={3}/> 
        <Stars count={5.7}/>
        <Stars count={9}/>        
      </> 
  );
}

export default App;
