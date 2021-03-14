import actionTypes from './actionTypes';

export function createTeam(team) {
  return {
    type: actionTypes.CREATE_TEAM,
    team,
  };
}

export function addPokemonToTeam(num) {
  console.log(num);
  return {
    type: actionTypes.ADD_POKEMON_TO_TEAM,
    num,
  };
}
