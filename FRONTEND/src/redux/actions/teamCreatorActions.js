import actionTypes from './actionTypes';

export function createTeam() {
  return {
    type: actionTypes.CREATE_TEAM,

  };
}

export function addPokemonToTeam(num,
  pokedex) {
  return {
    type: actionTypes.ADD_POKEMON_TO_TEAM,
    num,
    pokedex,
  };
}

export function submitTeam() {
  return {
    type: actionTypes.SUBMIT_TEAM,

  };
}
