import React from 'react';
import logo from './logo.svg';
import './style/global.css'
import './style/null.css'
import Home from './home/home';
import Pokedex from './pokedex/pokedex';
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';


function App() {
  return (
<div className="pokem">

<Router>
  <Routes>
    <Route path='/' Component={Home}/>
    <Route path='/pokedex' Component={Pokedex}/>
    </Routes>
</Router>

    </div>
  )
}

export default App;
