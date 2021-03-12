import axios from 'axios';
import actionTypes from './actionTypes';
import constants from '../../constants/dbUrls';

const {
  baseUrl,
  pokedexUrl,
  movesUrl,
  learnsetsUrl,
  abilitiesUrl,
} = constants;

function loadPokedex() {
  return async (dispatch) => {
    const { data } = await axios.get(`${baseUrl}${pokedexUrl}`);
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
    const { data } = await axios.get(`${baseUrl}${movesUrl}`);
    dispatch({
      type: actionTypes.LOAD_MOVES,
      data,
    });
  };
}
function loadLearnsets() {
  return async (dispatch) => {
    const { data } = await axios.get(`${baseUrl}${learnsetsUrl}`);
    dispatch({
      type: actionTypes.LOAD_LEARNSETS,
      data,
    });
  };
}
function loadAbilities() {
  return async (dispatch) => {
    const { data } = await axios.get(`${baseUrl}${abilitiesUrl}`);
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
