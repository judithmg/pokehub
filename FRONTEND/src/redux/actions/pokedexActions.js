import axios from 'axios';
import actionTypes from './actionTypes';

// const pokedexUrl = 'http://localhost:5000/pokehub/pokedex';
// const movesUrl = 'http://localhost:5000/pokehub/moves';
// const learnsetUrl = 'http://localhost:5000/pokehub/learnset';
// const abilitiesUrl = 'http://localhost:5000/pokehub/abilities';

function loadPokelist() {
  return async (dispatch) => {
    const { data } = await axios.get('./pokemon.json');
    dispatch({
      type: actionTypes.LOAD_POKELIST,
      data,

    });
  };
}

function loadPokemonDetail(pokeId) {
  return {
    type: actionTypes.LOAD_POKEMON,
    pokeId,
  };
}

function loadMoves() {
  return async (dispatch) => {
    const { data } = await axios.get('./moves.json');
    dispatch({
      type: actionTypes.LOAD_MOVES,
      data,
    });
  };
}
function loadLearnset() {
  return async (dispatch) => {
    const { data } = await axios.get('./learnset.json');
    dispatch({
      type: actionTypes.LOAD_LEARNSET,
      data,
    });
  };
}
function loadAbilities() {
  return async (dispatch) => {
    const { data } = await axios.get('./abilities.json');
    dispatch({
      type: actionTypes.LOAD_ABILITIES,
      data,
    });
  };
}

export {
  loadPokelist, loadPokemonDetail, loadMoves, loadLearnset, loadAbilities,
};
