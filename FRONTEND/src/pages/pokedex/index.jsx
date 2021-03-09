import React from 'react';

import '../../styles/pokedex.scss';

import pokemonData from '../../data/pokemini.json';
import PokemonList from './PokemonList';

export default function PokedexComponent() {
  const pokemons = pokemonData.map((pokemon) => Object.entries(pokemon));
  return (
    <>
      <section className="pokedex__container">

        <table>
          <thead>
            <tr className="pokedex__header">
              <th className="pokedex__header-id">
                ID
              </th>
              <th className="pokedex__header-sprite">**</th>
              <th className="pokedex__header-name">
                Name
              </th>
              <th className="pokedex__header-type">
                Type
              </th>
              <th className="pokedex__header-stats">
                Stats
              </th>
            </tr>
          </thead>
          <tbody>
            {pokemons && pokemons.map((pokemon) => (
              <PokemonList pokemon={pokemon[1]} key={pokemon[1].name} />
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
