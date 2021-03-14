/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamComponent({ team }) {
  return (
    <div className="teams__team">
      <div className="teams__sprites">
        {team.pokemons.map((pokemon) => (<img src={pokemon.sprite} alt="poke sprite" key={Math.random()} />))}
      </div>
      <span className="teams__id">
        <Link to={`/team-detail/${team.id}`}>
          {`# ${team.id}`}
        </Link>
      </span>
      <button type="button">delete</button>
    </div>
  );
}
