import actionTypes from './actionTypes';

function abilitiesLoading() {
  return {
    type: actionTypes.ABILITIES_LOADING,
  };
}
function pokedexLoading() {
  return {
    type: actionTypes.POKEDEX_LOADING,
  };
}
function movesLoading() {
  return {
    type: actionTypes.MOVES_LOADING,
  };
}
function learnsetsLoading() {
  return {
    type: actionTypes.LEARNSETS_LOADING,
  };
}
export {
  abilitiesLoading,
  pokedexLoading,
  movesLoading,
  learnsetsLoading,
};
