import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useParams } from 'react-router-dom';
import { modifyPokemon } from '../../redux/actions/teamCreatorActions';

export function TeamDetailPokemonMovesComponent({ actions, pokemon }) {
  const { teamId } = useParams();
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
  }

  return (
    <>
      <div className="pokemon__moves pokemon__info">
        <h2>Moves</h2>
        <select onChange={(e) => handleChange(e.target.id, e.target.value)} id={`${pokemon.name.toLowerCase()}-move-1`}>
          {pokemon.learnset && pokemon.learnset.map((move) => (
            <>
              <option>
                {move[0]?.name}
              </option>
            </>
          ))}
        </select>
        <select
        // value={....moveset...}
          onChange={(e) => handleChange(e.target.id, e.target.value)}
          id={`${pokemon.name.toLowerCase()}-move-2`}
        >
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
      <div>
        <button
          type="button"
          onClick={() => actions.modifyPokemon(teamId,
            pokemon,
            pokemonMoveset)}
        >
          SAVE
        </button>

      </div>
      <div className="pokemon__moves pokemon__info">
        <h2>titulo</h2>
        <span />
        <span />
        <span />
        <span />

      </div>
    </>
  );
}

TeamDetailPokemonMovesComponent.propTypes = {
  actions: PropTypes.shape({
    modifyPokemon: PropTypes.func,
  }).isRequired,
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    moveset: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,

    })),
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

function mapStateToProps(state) {
  return {
    teams: state.teamsReducer.teams,
    team: state.teamsReducer.team,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      modifyPokemon,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamDetailPokemonMovesComponent);
