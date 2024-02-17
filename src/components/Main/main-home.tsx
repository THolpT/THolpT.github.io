import React from 'react';
import logo from './logo.svg';
import BannerMain from '../../img/banner.svg'
import './main-home.css'
import '../../style/global.css'
import { Link } from 'react-router-dom';

function MainHome() {
  return (

<div className="main">
<main>
<div className="text">
    <p className='find'><strong>Find</strong> all your favorite <strong>Pokemon</strong></p>
    <p className='inf'>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
<Link to="/Pokedex">
    <button className='but'><strong>See pokemons</strong></button>
</Link>
</div>
<div className='img'>
<img src={BannerMain} alt="logo" />
</div>
</main>
</div>

  )
}

export default MainHome;