import axios from 'axios';
import actionTypes from './actionTypes';

const pokedexUrl = 'http://localhost:5000/pokehub/pokedex';
const movesUrl = 'http://localhost:5000/pokehub/pokedex/moves';
const learnsetsUrl = 'http://localhost:5000/pokehub/pokedex/learnsets';
const abilitiesUrl = 'http://localhost:5000/pokehub/pokedex/abilities';

function loadPokedex() {
  return async (dispatch) => {
    const { data } = await axios.get(pokedexUrl);
    dispatch({
      type: actionTypes.LOAD_POKEDEX,
      data,
    });
  };
}
function loadPokemonsShown(page) {
  return {
    type: actionTypes.LOAD_POKEMON_SHOWN,
    page,
  };
}
function loadMoves() {
  return async (dispatch) => {
    const { data } = await axios.get(movesUrl);
    dispatch({
      type: actionTypes.LOAD_MOVES,
      data,
    });
  };
}
function loadLearnsets() {
  return async (dispatch) => {
    const { data } = await axios.get(learnsetsUrl);
    dispatch({
      type: actionTypes.LOAD_LEARNSETS,
      data,
    });
  };
}
function loadAbilities() {
  return async (dispatch) => {
    const { data } = await axios.get(abilitiesUrl);
    dispatch({
      type: actionTypes.LOAD_ABILITIES,
      data,
    });
  };
}
function loadPokemonFromType(pokemonTypeFiltered) {
  return {
    type: actionTypes.LOAD_POKEMON_FROM_TYPE,
    pokemonTypeFiltered,
  };
}

export {
  loadPokedex,
  loadPokemonsShown,
  loadMoves,
  loadLearnsets,
  loadAbilities,
  loadPokemonFromType,
};
