import React from 'react';
import logo from './logo.svg';
import './home.css'
import Header from '../components/Header/header';
import Main from '../components/Main/main-home';
import Footer from '../components/Footer/footer';
import '../style/global.css'

function Home() {
  return (
<div className="home">

<Header/>

<Main/>

<Footer/>

</div>
  )
}

export default Home;