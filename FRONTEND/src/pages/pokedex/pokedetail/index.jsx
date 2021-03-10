/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import 'react-svg-radar-chart/build/css/index.css';

import pokemons from '../../../data/pokemon.json';

import '../../../styles/pokedetail.scss';
import '../../../styles/_types.scss';

import Moveset from './Moveset';
import MainInfo from './MainInfo';
import VisualInfoComponent from './VisualInfo';

export default function PokeDetailComponent(props) {
  const [pokemon, setPokemon] = useState('');
  const [pokeId] = useState(props?.match?.params?.pokeId);
  // tengo que meter esto dentro de un useEffect
  useEffect(() => {
    setPokemon(pokemons.find((poke) => poke.name.toLowerCase() === pokeId));
  }, [pokeId]);

  return (
    <>
      <section>
        { pokemon && (
        <>
          <div className={`pokemon__abstract ${pokemon.types[0].toLowerCase()}`}>
            <MainInfo pokemon={pokemon} />
            <VisualInfoComponent pokemon={pokemon} />
          </div>
          <div className="pokemon__details">
            <div className="pokemon__ability">
              <span className="pokemon__ability-title">ABILITY</span>
              <span className="pokemon__ability-name">
                {pokemon.abilities[0]}
                {' '}
                {pokemon.abilities[0]}
              </span>
              <span className="pokemon__ability.description">kdjksf dskfjsd fskdjf fklsdj dlkj</span>
            </div>
            <div className="pokemon__moves">
              <div className="pokemon__moves-lvl">
                <span className="pokemon__moves-title">
                  MOVES
                </span>
                <Moveset moves={pokemon.name} />
              </div>
              <div className="pokemon__moves-egg" />
            </div>
          </div>
        </>
        )}
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
