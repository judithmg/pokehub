import actionTypes from './actionTypes';

export function createTeam(team) {
  return {
    type: actionTypes.CREATE_TEAM,
    team,
  };
}

export function addPokemonToTeam(pokemon) {
  console.log('hello');
  return {
    type: actionTypes.ADD_POKEMON_TO_TEAM,
    pokemon,
  };
}
