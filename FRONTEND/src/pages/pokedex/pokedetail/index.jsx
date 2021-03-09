import React from 'react';

import PropTypes from 'prop-types';
import 'react-svg-radar-chart/build/css/index.css';

import pokemon from './pokemon';

import '../../../styles/pokedetail.scss';
import '../../../styles/_types.scss';

import Moveset from './Moveset';
import MainInfo from './MainInfo';
import VisualInfoComponent from './VisualInfo';

export default function PokeDetailComponent() {
  return (
    <>
      <section>
        <div className={`pokemon__abstract ${pokemon.types[0]}`}>
          <MainInfo pokemon={pokemon} />
          <VisualInfoComponent pokemon={pokemon} />
        </div>
        <div className="pokemon__details">
          <div className="pokemon__ability">
            <span className="pokemon__ability-title">ABILITY</span>
            <span className="pokemon__ability-name">
              {pokemon.ability.name}
            </span>
            <span className="pokemon__ability.description">{pokemon.ability.description}</span>
          </div>
          <div className="pokemon__moves">
            <div className="pokemon__moves-lvl">
              <span className="pokemon__moves-title">
                MOVES
              </span>
              <Moveset moves={pokemon.moves} />
            </div>
            <div className="pokemon__moves-egg" />
          </div>
        </div>
      </section>
    </>
  );
}

PokeDetailComponent.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    stats: PropTypes.objectOf(PropTypes.number),
    type: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
