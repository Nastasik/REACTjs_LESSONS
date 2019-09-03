import React, { useState } from 'react';
import './App.css';
import List from './List';
import Details from './Details';

function App() {
  const [info, setInfo] = useState({ id: null , name: null});
console.log(info, 'INFO')
  function handleInfo(id, name) {
    setInfo({ id, name });
  }

  return (
    <div className="App">
      <List handleInfo={handleInfo}/>
      {info.id ? <Details info={info}/> : null}
    </div>
  );
}

export default App;
