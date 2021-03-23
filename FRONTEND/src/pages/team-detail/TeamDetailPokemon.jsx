import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import RadarChart from '../shared/RadarChartComponent';
import TeamMoves from './TeamMovesComponent';
import { pokemonSprites } from '../../constants/images';

import '../../styles/teams.scss';

export default function TeamDetailPokemon({ pokemon }) {
  return (
    pokemon.learnset
    && (
    <div className="teamdetail__pokemon" key={Math.random()}>

      <div className={`pokemon__sprite ${pokemon.types[0]}`}>
        <span>{pokemon.name}</span>
        <Link to={`/pokemon/${pokemon.name.toLowerCase()}`}>
          <img
            src={`${pokemonSprites.httpFrontSprite}${pokemon.num}.png`}
            alt="pokemon sprite"
          />
        </Link>
      </div>
      <div className="pokemon__data">
        <div className="pokemon__stats --desktop">
          <RadarChart stats={pokemon.baseStats} size={150} />
        </div>
        <div className="pokemon__info --desktop">
          <h2>Base stats</h2>
          <div className="pokemon__base-stats ">
            <div>
              <span>HP</span>
              <span>{pokemon.baseStats.hp}</span>
            </div>
            <div>
              <span>ATK</span>
              <span>{pokemon.baseStats.atk}</span>
            </div>
            <div>
              <span>DEF</span>
              <span>{pokemon.baseStats.def}</span>
            </div>
            <div>
              <span>SPEED</span>
              <span>{pokemon.baseStats.spe}</span>
            </div>
            <div>
              <span>SP ATK</span>
              <span>{pokemon.baseStats.spa}</span>
            </div>
            <div>
              <span>SPEED</span>
              <span>{pokemon.baseStats.spd}</span>
            </div>
          </div>
        </div>
        <TeamMoves pokemon={pokemon} key={Math.random()} />
      </div>
    </div>
    )
  );
}
TeamDetailPokemon.propTypes = {
  pokemon: PropTypes.shape({
    num: PropTypes.number,
    name: PropTypes.string,
    learnset: PropTypes.arrayOf(PropTypes.array),
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
    types: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
