import actionTypes from './actionTypes';

function loadPokemonDetail(pokeId) {
  return {
    type: actionTypes.LOAD_POKEMON_DETAIL,
    pokeId,
  };
}

function loadPokemonLearnset(pokeId) {
  return {
    type: actionTypes.LOAD_POKEMON_LEARNSET,
    pokeId,
  };
}
function loadPokemonAbilities(pokeId) {
  return {
    type: actionTypes.LOAD_POKEMON_ABILITIES,
    pokeId,
  };
}

export {
  loadPokemonDetail,
  loadPokemonLearnset,
  loadPokemonAbilities,
};
