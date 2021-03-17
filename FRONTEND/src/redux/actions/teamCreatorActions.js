import axios from 'axios';
import actionTypes from './actionTypes';
import dbUrls from '../../constants/dbUrls';

export function createTeam() {
  return {
    type: actionTypes.CREATE_TEAM,

  };
}

export function deleteOneTeam(team) {
  return async () => {
    try {
      const user = 'eloy@eloy.com';
      const submit = {
        team,
        email: user,
      };
      const { data } = await axios.patch(`${dbUrls.baseUrl}${dbUrls.teamsUrl}/delete`, submit);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
}

export function teamActionsError(error) {
  return {
    type: actionTypes.TEAM_ERROR,
    error,
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
