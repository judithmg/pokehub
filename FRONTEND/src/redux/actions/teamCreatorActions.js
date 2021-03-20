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

export function submitTeam(team,
  user,
  name) {
  const updatedteam = {
    ...team,
    id: name,
  };
  const submit = {
    team: updatedteam,
    email: user.email,
  };
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`${dbUrls.baseUrl}${dbUrls.teamsUrl}`, submit);
      dispatch(submitTeamSuccess(data));
    } catch (error) {
      dispatch(teamActionsError(error));
    }
  };
}

// DELETE

export function deleteOneTeamSuccess(data) {
  return {
    type: actionTypes.DELETE_ONE_TEAM,
    data,
  };
}

export function deleteOneTeam(team,
  user) {
  return async (dispatch) => {
    try {
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

export function modifyOnePokemonSuccess(team) {
  return {
    type: actionTypes.MODIFY_POKEMON,
    team,
  };
}

export function modifyOnePokemon(team,
  user,
  moveset,
  pokemon) {
  const newpoke = {
    ...pokemon,
    moveset,
  };
  const { pokemons } = team;
  pokemons[pokemon.id - 1] = newpoke;
  const updatedteam = {
    id: team.id,
    pokemons,
  };
  return async (dispatch) => {
    try {
      await axios.put(`${dbUrls.baseUrl}${dbUrls.teamsUrl}`, {
        team: updatedteam,
        email: user.email,
      });
      await axios.delete(`${dbUrls.baseUrl}${dbUrls.teamsUrl}/delete/${team._id}`);
      dispatch(modifyOnePokemonSuccess(updatedteam));
    } catch (error) {
      dispatch(teamActionsError(error));
    }
  };
}
