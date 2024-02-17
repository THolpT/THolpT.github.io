import React from 'react';
import logo from './logo.svg';
import './pokedex.css'
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import MainPokedex from '../components/Main/main-pokedex';

function Pokedex() {
  return (
<div className="">

  <Header/>
  <MainPokedex/>
  <Footer/>
  
    </div>
  )
}

export default Pokedex;
