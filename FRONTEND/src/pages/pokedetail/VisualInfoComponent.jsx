import PropTypes from 'prop-types';

import React from 'react';

import RadarChart from '../shared/RadarChartComponent';
import EvolutionChainComponent from './EvolutionChainComponent';

export default function VisualInfoComponent({ pokemon, pokedex }) {
  return (
    <div className="pokemon__abstract-visual">
      <div className="abstract__stats">
        <RadarChart stats={pokemon?.baseStats} size={200} />
      </div>

      {(pokemon.evos || pokemon.prevo) && (
        <EvolutionChainComponent
          evos={pokemon.evos}
          prevo={pokemon.prevo}
          pokemon={pokemon}
          key={Math.random()}
          pokedex={pokedex}
        />
      )}
    </div>
  );
}

VisualInfoComponent.propTypes = {
  pokedex: PropTypes.arrayOf(PropTypes.object).isRequired,
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
    ),
  }).isRequired,

};
