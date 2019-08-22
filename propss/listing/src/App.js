import React from 'react';
import Listing from './Listing';
import './App.css';
import './css/main.css';

function App() {
  const data = require('./data/etsy.json')
  return (
    <Listing items={data} />
  );
}

export default App;
