import React from 'react';
import logo from './logo.svg';
import './main-pokedex.css'
import PokemonCards from '../pokemonCard/pokemonCard';


function MainPokedex() {
  return (
<div className="poked">
<p className='title'>
  800 <strong>Pokemons</strong> for you to choose your favorite
</p>

<input type="text" />
<PokemonCards></PokemonCards>
    </div>
  )
}

export default MainPokedex;
