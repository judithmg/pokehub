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
      const { data } = await axios.put(`${dbUrls.baseUrl}${dbUrls.teamsUrl}/add`, submit);
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

export function modifyOnePokemonNO(team,
  user,
  moveset,
  pokemon) {
  const newpoke = {
    ...pokemon,
    moveset,
  };
  const userId = user._id;
  const { pokemons } = team;
  pokemons[pokemon.id - 1] = newpoke;
  const updatedteam = {
    id: team.id,
    pokemons,
  };
  return async (dispatch) => {
    try {
      await axios.patch(`${dbUrls.baseUrl}${dbUrls.teamsUrl}/delete/${team._id}`, { userId })
        .then(() => axios.put(`${dbUrls.baseUrl}${dbUrls.teamsUrl}/add`, {
          team: updatedteam,
          email: user.email,
        }));
      dispatch(modifyOnePokemonSuccess(updatedteam));
    } catch (error) {
      dispatch(teamActionsError(error));
    }
  };
}

export function modifyOnePokemon(team,
  teams,
  user,
  moveset,
  pokemon) {
  const newpoke = {
    ...pokemon,
    moveset,
  };
  const userId = user._id;
  const { pokemons } = team;
  pokemons[pokemon.id - 1] = newpoke;
  const updatedteam = {
    _id: team._id,
    id: team.id,
    pokemons,
  };
  const updatedTeamsArray = teams.filter((teamarr) => teamarr._id !== updatedteam._id);
  updatedTeamsArray.push(updatedteam);
  return async (dispatch) => {
    try {
      await axios.put(`${dbUrls.baseUrl}${dbUrls.teamsUrl}/probando/${userId}`, { teams: updatedTeamsArray });
      dispatch(modifyOnePokemonSuccess(updatedteam));
    } catch (error) {
      dispatch(teamActionsError(error));
    }
  };
}
