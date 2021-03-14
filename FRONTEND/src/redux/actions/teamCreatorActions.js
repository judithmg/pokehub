import actionTypes from './actionTypes';

export function createTeam(team) {
  return {
    type: actionTypes.CREATE_TEAM,
    team,
  };
}

export function addPokemonToTeam(num) {
  return {
    type: actionTypes.ADD_POKEMON_TO_TEAM,
    num,
  };
}

export function submitTeam() {
  return {
    type: actionTypes.SUBMIT_TEAM,

  };
}
