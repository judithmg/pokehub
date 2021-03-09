/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import ButtonType from '../shared/ButtonType';

export default function PokemonList({ pokemon }) {
  return (
    <tr className="pokedex__pokemon">
      <th className="pokedex__pokemon-id">
        #
        {' '}
        {pokemon.num}
      </th>
      <th className="pokedex__pokemon-sprite">
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${pokemon.num}.png`} alt={pokemon.name} />
      </th>
      <th className="pokedex__pokemon-name">
        {pokemon.name}
      </th>
      <th className="pokedex__pokemon-type">
        {pokemon.types.map((type) => <ButtonType text={type} type={type} key={`${pokemon.name}-${pokemon.types[0]}`} />)}

      </th>
      <th className="pokedex__pokemon-stats">
        {pokemon.baseStats.atk}
        {pokemon.baseStats.hp}
        {pokemon.baseStats.def}
        {pokemon.baseStats.spa}
        {pokemon.baseStats.spd}
        {pokemon.baseStats.spe}
      </th>

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
