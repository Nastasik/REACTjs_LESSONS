import React from 'react';
import ShopItemFunc from './ShopItemFunction';
import './App.css';
import {User} from './User.js';
import './css/main.css';
import './assets/preview.png';
import './img/item-black.jpg';
import './img/item-blue.jpg';

function App() {
  const item = new User({
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  });

  return (
    <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ShopItemFunc user = {item} />
    </div>
  </div>   
  );
}

export default App;
