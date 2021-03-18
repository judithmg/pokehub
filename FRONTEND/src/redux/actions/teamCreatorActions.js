import axios from 'axios';
import actionTypes from './actionTypes';
import dbUrls from '../../constants/dbUrls';

// HANDLE ERROR

export function teamActionsError(error) {
  return {
    type: actionTypes.TEAM_ERROR,
    error,
  };
}

// CREATE

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

export function submitTeamSuccess(data) {
  return {
    type: actionTypes.SUBMIT_TEAM,
    data,
  };
}

export function submitTeam(team, user) {
  return async (dispatch) => {
    try {
      const submit = {
        team,
        email: user.email,
      };
      const { data } = await axios.put(`${dbUrls.baseUrl}${dbUrls.teamsUrl}`, submit);
      dispatch(submitTeamSuccess(data));
    } catch (error) {
      dispatch(teamActionsError(error));
    }
  };
}

// DELETE

function deleteOneTeamSuccess(data) {
  return {
    type: actionTypes.DELETE_ONE_TEAM,
    data,
  };
}

export function deleteOneTeam(team) {
  return async (dispatch) => {
    try {
      const user = 'eloy@eloy.com';
      const submit = {
        team,
        email: user,
      };
      const { data } = await axios.patch(`${dbUrls.baseUrl}${dbUrls.teamsUrl}/delete`, submit);
      dispatch(deleteOneTeamSuccess(data));
    } catch (error) {
      dispatch(teamActionsError(error));
    }
  };
}

// MODIFY ONE POKEMON

export function modifyPokemon(teamId,
  pokemon,
  pokemonMoves) {
  return {
    type: actionTypes.MODIFY_POKEMON,
    teamId: +teamId,
    pokemon,
    pokemonMoves,
  };
}
