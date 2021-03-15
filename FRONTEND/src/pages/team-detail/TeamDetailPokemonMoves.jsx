import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TeamDetailPokemonMovesComponent({ pokemon }) {
  const [pokemonMoveset, setPokemonMoveset] = useState([{
    name: pokemon.learnset[0][0].name,
    moveId: `${pokemon.name.toLowerCase()}-move-1`,
  }, {
    name: pokemon.learnset[0][0].name,
    moveId: `${pokemon.name.toLowerCase()}-move-2`,
  }, {
    name: pokemon.learnset[0][0].name,
    moveId: `${pokemon.name.toLowerCase()}-move-3`,
  }, {
    name: pokemon.learnset[0][0].name,
    moveId: `${pokemon.name.toLowerCase()}-move-4`,
  }]);

  function handleChange(id, name) {
    const updatedArray = pokemonMoveset.filter((move) => move.moveId !== id);
    updatedArray.push({
      name,
      moveId: id,
    });
    setPokemonMoveset(updatedArray);
    console.log(updatedArray);
  }
  return (

    <div className="pokemon__moves">
      <div className="pokemon__moves-name">
        <span>Moves</span>
        <select onChange={(e) => handleChange(e.target.id, e.target.value)} id={`${pokemon.name.toLowerCase()}-move-1`}>
          {pokemon.learnset && pokemon.learnset.map((move) => (
            <option>
              {move[0]?.name}
            </option>
          ))}
        </select>
        <select onChange={(e) => handleChange(e.target.id, e.target.value)} id={`${pokemon.name.toLowerCase()}-move-2`}>
          {pokemon.learnset && pokemon.learnset.map((move) => (
            <option id={`${pokemon.name.toLowerCase()}-move-1`}>
              {move[0]?.name}
            </option>
          ))}
        </select>
        <select onChange={(e) => handleChange(e.target.id, e.target.value)} id={`${pokemon.name.toLowerCase()}-move-3`}>
          {pokemon.learnset && pokemon.learnset.map((move) => (
            <option id={`${pokemon.name.toLowerCase()}-move-1`}>
              {move[0]?.name}
            </option>
          ))}
        </select>
        <select onChange={(e) => handleChange(e.target.id, e.target.value)} id={`${pokemon.name.toLowerCase()}-move-4`}>
          {pokemon.learnset && pokemon.learnset.map((move) => (
            <option id={`${pokemon.name.toLowerCase()}-move-1`}>
              {move[0]?.name}
            </option>
          ))}
        </select>
      </div>
      <div className="pokemon__moves-pp">
        <span>PP</span>
        {pokemon.name.toLowerCase()}
      </div>
    </div>
  );
}

TeamDetailPokemonMovesComponent.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    learnset: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      category: PropTypes.string,
      desc: PropTypes.string,
      shortDesc: PropTypes.string,
      pp: PropTypes.number,
      basePower: PropTypes.number,
      type: PropTypes.string,
      accuracy: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
      ])),
    }))).isRequired,
  }).isRequired,
};
