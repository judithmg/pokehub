/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

import RadarChart from '../../shared/RadarChart';

export default function VisualInfoComponent({ pokemon }) {
  return (
    <div className="pokemon__abstract-visual">
      <div className="abstract__stats">
        <RadarChart stats={pokemon.baseStats} />
      </div>
      {pokemon.evos && (
      <div className="abstract__evochain">
        {' '}
        <span className="abstract__evochain-text">NEXT EVOLUTION</span>
        <Link to={`/pokemon/${pokemon.evos[0].toLowerCase()}`}>
          <img
            alt="pokemon evo"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${pokemon.num + 1}.png`}
          />

        </Link>

      </div>
      )}
    </div>
  );
}
