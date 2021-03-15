/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import RadarChart from '../shared/RadarChart';
import TeamDetailPokemonMoves from './TeamDetailPokemonMoves';
import { pokemonSprites } from '../../constants/images';

import '../../styles/teams.scss';

export default function TeamDetailPokemonComponent({ pokemon }) {
  return (
    pokemon.learnset
    && (
    <div className="teamdetail__pokemon">
      <div className={`pokemon__sprite ${pokemon.types[0]}`}>
        <span>{pokemon.name}</span>
        <Link to={`/pokemon/${pokemon.name.toLowerCase()}`}>
          <img
            src={`${pokemonSprites.httpSprite}${pokemon.num}.png`}
            alt="pokemon sprite"
          />
        </Link>
      </div>
      <div className="pokemon__data">
        <div className="pokemon__stats">
          <RadarChart stats={pokemon.baseStats} />
        </div>
        <div className="pokemon__info">
          <h2>Base stats</h2>
          <div className="pokemon__base-stats">
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
        <div>
          <div className="pokemon__info">
            <h2>Ability</h2>
            {pokemon.abilities && pokemon.abilities.map((ability) => (
              ability
            ))}
          </div>
          <div className="pokemon__info">
            <h2>Lvl</h2>
            100
          </div>
          <div className="pokemon__info">
            <h2>Shiny</h2>
            No
          </div>
        </div>
        <TeamDetailPokemonMoves pokemon={pokemon} />
      </div>
    </div>
    )
  );
}
TeamDetailPokemonComponent.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
