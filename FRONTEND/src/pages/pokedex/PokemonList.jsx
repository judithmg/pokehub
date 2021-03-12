/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ButtonType from '../shared/ButtonType';

export default function PokemonList({ pokemon }) {
  return (
    <tr className="pokedex__pokemon" key={Math.random()}>
      <td className="pokedex__pokemon-id">
        {`# ${pokemon.num}`}
      </td>
      <td className="pokedex__pokemon-sprite">
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${pokemon.num}.png`} alt={pokemon.name} />
      </td>
      <td className="pokedex__pokemon-name">
        <Link to={`/pokemon/${pokemon.name.toLowerCase()}`}>
          {pokemon.name}
        </Link>
      </td>
      <td className="pokedex__pokemon-type">
        {pokemon.types.map((type) => <ButtonType text={type} type={type} key={Math.random()} />)}

      </td>
      <td className="pokedex__pokemon-stats --desktop">
        <p>{pokemon.baseStats.atk}</p>
        <p>{pokemon.baseStats.hp}</p>
        <p>{pokemon.baseStats.def}</p>
        <p>{pokemon.baseStats.spa}</p>
        <p>{pokemon.baseStats.spd}</p>
        <p>{pokemon.baseStats.spe}</p>
      </td>
    </tr>
  );
}

PokemonList.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    stats: PropTypes.objectOf(PropTypes.number),
    type: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
