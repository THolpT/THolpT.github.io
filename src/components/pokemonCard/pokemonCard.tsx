import React, { useState, useEffect } from 'react';
import './pokemonCard.css'; // Подключаем файл стилей

// Определяем тип данных для объекта Pokemon
type Pokemon = {
  id: number;
  damage: number;
  defense: number;
  element: string;
  name: string;
  img: string;
}

// Компонент карточки Pokemon
const PokemonCard: React.FC<Pokemon> = ({ id, damage, defense, element, name, img }) => {
  // Определяем класс стихии покемона
  let elementClass = '';
  if (element === 'fire') {
    elementClass = 'fire';
  } else if (element === 'water') {
    elementClass = 'water';
  } else if (element === 'grass') {
    elementClass = 'grass';
  }

  return (
    <div className="pokemon-card" key={id}>
      <div className="pokemon-info">
        <h3 className="pokemon-name font">{name}</h3>
        <div className="stats">
          <div className="stat">
            <p>Атака:</p>
            <div className="circle">{damage}</div>
          </div>
          <div className="stat">
            <p>Защита:</p>
            <div className="circle defense-circle">{defense}</div>
          </div>
        </div>
        <div className={`element-circle ${elementClass}`}>
          <p className="element font">{element}</p>
        </div>
      </div>
      <div className="pokemon-right">
        <img className="pokemon-image" src={img} alt={name} />
      </div>
    </div>
  );
}

// Компонент списка карточек Pokemon
const PokemonCards: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    // Получаем данные о покемонах с API
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(async (data: any) => {
        const pokemonPromises = data.results.map(async (pokemon: any) => {
          const response = await fetch(pokemon.url);
          const pokemonData = await response.json();

          const element = pokemonData.types.length > 0 ? pokemonData.types[0].type.name : 'unknown';

          return {
            id: pokemonData.id,
            damage: pokemonData.stats[0].base_stat,
            defense: pokemonData.stats[1].base_stat,
            element,
            name: pokemonData.name,
            img: pokemonData.sprites.front_default
          };
        });

        const pokemonList = await Promise.all(pokemonPromises);
        // Преобразуем объект уникальных покемонов в массив и устанавливаем состояние списка
        setPokemonList(pokemonList);
      });
  }, []);

  return (
    <div className='pokemon-list'>
      {/* Отображаем каждую карточку покемона */}
      {pokemonList.map(pokemon => (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          damage={pokemon.damage}
          defense={pokemon.defense}
          element={pokemon.element}
          name={pokemon.name}
          img={pokemon.img}
        />
      ))}
    </div>
  );
}

export default PokemonCards;
