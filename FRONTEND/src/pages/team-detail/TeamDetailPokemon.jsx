/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import RadarChart from '../shared/RadarChart';
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
        <div className="pokemon__stats"><RadarChart stats={pokemon.baseStats} /></div>
        <div className="pokemon__ability">
          <span>Ability</span>
          {pokemon.abilities && pokemon.abilities.map((ability) => (<div>{ability}</div>))}
        </div>
        <div className="pokemon__lvl">
          <span>Lvl</span>
          100
        </div>
        <div className="pokemon__shiny">
          <span>Shiny</span>
          No
        </div>
        <div className="pokemon__moves">
          <div className="pokemon__moves-name">
            <span>Moves</span>
            <select>
              {pokemon.learnset && pokemon.learnset.map((move) => (
                <option>
                  {move[0]?.name}
                </option>
              ))}
            </select>
            <select>
              {pokemon.learnset && pokemon.learnset.map((move) => (
                <option>
                  {move[0]?.name}
                </option>
              ))}
            </select>
            <select>
              {pokemon.learnset && pokemon.learnset.map((move) => (
                <option>
                  {move[0]?.name}
                </option>
              ))}
            </select>
            <select>
              {pokemon.learnset && pokemon.learnset.map((move) => (
                <option>
                  {move[0]?.name}
                </option>
              ))}
            </select>
          </div>
          <div className="pokemon__moves-pp">
            <span>PP</span>
            {pokemon.name}
          </div>
        </div>
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
