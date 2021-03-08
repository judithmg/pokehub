/* eslint-disable react/prop-types */
import React from 'react';

export default function TeamComponent({ team }) {
  return (
    <div className="teams__team">
      <div className="teams__sprites">
        {team.pokemons.map((pokemon) => (<img src={pokemon.sprite} alt="poke sprite" />))}
      </div>
      <span className="teams__id">
        #
        {' '}
        {team.id}
      </span>
    </div>
  );
}
