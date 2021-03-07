import React from 'react';
import PropTypes from 'prop-types';

import ButtonType from '../shared/ButtonType';

export default function PokemonList({ pokemon }) {
  return (
    <tr className="pokedex__pokemon">
      <th className="pokedex__pokemon-id">
        {pokemon.id}
      </th>
      <th className="pokedex__pokemon-sprite">
        {pokemon.sprite}
      </th>
      <th className="pokedex__pokemon-name">
        {pokemon.name}
      </th>
      <th className="pokedex__pokemon-type">
        {pokemon.type}
        <ButtonType text="FIRE" />
      </th>
      <th className="pokedex__pokemon-stats">
        {pokemon.stats.atk}
      </th>

    </tr>
  );
}

PokemonList.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.object).isRequired,
};
