import actionTypes from './actionTypes';

export function createTeam() {
  return {
    type: actionTypes.CREATE_TEAM,

  };
}

export function addPokemonToTeam(num,
  pokedex,
  moves,
  learnsets,
  abilities) {
  return {
    type: actionTypes.ADD_POKEMON_TO_TEAM,
    num,
    pokedex,
    moves,
    learnsets,
    abilities,
  };
}

export function submitTeam() {
  return {
    type: actionTypes.SUBMIT_TEAM,

  };
}
