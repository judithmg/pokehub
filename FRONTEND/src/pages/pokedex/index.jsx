import React from 'react';

import '../../styles/pokedex.scss';

import pokemonData from '../../data/pokemon.json';
import PokemonList from './PokemonList';

export default function PokedexComponent() {
  return (
    <>
      <section className="pokedex__container">
        <table>
          <thead>
            <tr className="pokedex__header">
              <th className="pokedex__pokemon-id pokedex__pokemon-header">
                {' '}
              </th>
              <th className="pokedex__pokemon-sprite pokedex__pokemon-header">{' '}</th>
              <th className="pokedex__pokemon-name pokedex__pokemon-header">
                {' '}
              </th>
              <th className="pokedex__pokemon-type pokedex__pokemon-header">
                {' '}
              </th>
              <th className="pokedex__pokemon-stats pokedex__pokemon-header --desktop">
                <p>ATK</p>
                <p>HP</p>
                <p>DEF</p>
                <p>SP. ATK</p>
                <p>SP.DEF </p>
                <p>SPEED</p>
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
