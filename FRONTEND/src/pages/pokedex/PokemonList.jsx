/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import ButtonType from '../shared/ButtonType';

export default function PokemonList({ pokemon }) {
  return (
    <tr className="pokedex__pokemon">
      { console.log(pokemon)}
      { console.log(pokemon.types)}
      <th className="pokedex__pokemon-id">
        {pokemon.id}
      </th>
      <th className="pokedex__pokemon-sprite">
        {pokemon.id}
      </th>
      <th className="pokedex__pokemon-graph">
        sss
      </th>
      <th className="pokedex__pokemon-name">
        {pokemon.name}
      </th>
      <th className="pokedex__pokemon-type">
        {pokemon.types.map((type) => <ButtonType text={type} type={type} key={`${pokemon.name}-${pokemon.types[0]}`} />)}

      </th>
      <th className="pokedex__pokemon-stats">
        {pokemon.stats.atk}
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
