import PropTypes from 'prop-types';

import React from 'react';

import RadarChart from '../shared/RadarChart';
import EvolutionChain from './EvolutionChain';

export default function VisualInfoComponent({ pokemon }) {
  return (
    <div className="pokemon__abstract-visual">
      <div className="abstract__stats">
        <RadarChart stats={pokemon?.baseStats} />
      </div>

      {(pokemon.evos || pokemon.prevo) && (
        <EvolutionChain
          evos={pokemon.evos}
          prevo={pokemon.prevo}
          pokemon={pokemon}
          key={Math.random()}
        />
      )}
    </div>
  );
}

VisualInfoComponent.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    num: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.string),
    evos: PropTypes.arrayOf(PropTypes.string),
    prevo: PropTypes.string,
    baseStats: PropTypes.shape(
      {
        hp: PropTypes.number,
        spa: PropTypes.number,
        atk: PropTypes.number,
        spe: PropTypes.number,
        def: PropTypes.number,
        spd: PropTypes.number,
      },
    ).isRequired,
  }).isRequired,

};
