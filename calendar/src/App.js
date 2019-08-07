import React from 'react';
import Calendar from './Calendar';
import './App.css';
// import {MadeDate} from './Date.js';
import './css/main.css';

function App() {
    const now = new Date(2017, 2, 18);
    // new MadeDate(new Date(2017, 2, 8));
console.log(new Date(2017, 2, 8))
    return (
      <Calendar date = {now} />
    );
}

export default App;
