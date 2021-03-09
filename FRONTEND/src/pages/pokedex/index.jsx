import React from 'react';

import '../../styles/pokedex.scss';

import pokemonData from '../../data/pokemon.json';
import PokemonList from './PokemonList';

export default function PokedexComponent() {
  return (
    <>
      <section className="pokedex__container">
        {console.log(pokemonData[0][0])}
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
            {pokemonData && pokemonData.map((pokemon) => (
              <PokemonList pokemon={pokemon} key={pokemon.name} />
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
