import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './css/index.css';
import Menu from './Menu';
import HomePage from './HomePage';
import DriftPage from './DriftPage';
import ForzaPage from './ForzaPage';
import TimeAttackPage from './TimeAttackPage';

export default function App() {
  return (
    <Router>      
        <Menu />
        <div className="page">
          <Route path="/home" exact component={HomePage} />
          <Route path="/drift" component={DriftPage} />
          <Route path="/timeattack" component={TimeAttackPage} />
          <Route path="/forza" component={ForzaPage} />
        </div>     
    </Router>
  );
}