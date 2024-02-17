import React from 'react';
import logo from './logo.svg';
import Logoheader from '../../img/logo.svg'
import './header.css'
import { Link } from 'react-router-dom';


function Header() {
  return (

<div className="head">

<header>
<div className='image'>
<Link to="/">
<img src={Logoheader} alt="logo" />
</Link>
</div>

<div className="menu">
  <ul>
<Link to="/">
    <li className="menu_header"><a href="#">Home</a></li>
</Link>
<Link to="/Pokedex">
    <li className="menu_header"><a href="#">Pokedex</a> </li>
</Link>
<Link to="/">
    <li className="menu_header"><a href="#">Legendaries</a></li>
</Link>
<Link to="/">
    <li className="menu_header"><a href="#">Documentation</a></li>
</Link>
  </ul>
</div>

</header>

</div>

  )
}

export default Header;