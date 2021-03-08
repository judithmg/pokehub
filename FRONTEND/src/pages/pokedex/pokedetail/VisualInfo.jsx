/* eslint-disable react/prop-types */
import React from 'react';
import RadarChart from './RadarChart';

export default function VisualInfoComponent({ pokemon }) {
  return (
    <div className="pokemon__abstract-visual">
      <div className="abstract__stats">
        <RadarChart stats={pokemon.stats} />
      </div>
      <div className="abstract__evochain">{pokemon.evo.map((evo) => (<img src={evo} alt={evo} />))}</div>
    </div>
  );
}
