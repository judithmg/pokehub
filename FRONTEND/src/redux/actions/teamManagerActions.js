// import actionTypes from './actionTypes';
// import teamData from '../../pages/teams/teamData';

// export function loadTeams() {
//   return {
//     type: actionTypes.LOAD_TEAMS,
//     teamData,
//   };
// }

import axios from 'axios';
import actionTypes from './actionTypes';
import dbUrls from '../../constants/dbUrls';

const {
  baseUrl,
  login,
  movesUrl,
  learnsetsUrl,
} = dbUrls;

export function loadTeams(user) {
  return async (dispatch) => {
    const { data } = await axios.get(`${baseUrl}${login}/${user}`);
    dispatch({
      type: actionTypes.LOAD_TEAMS,
      data: data.teams,
    });
  };
}

export function deleteOneTeam(teamId) {
  return {
    type: actionTypes.DELETE_ONE_TEAM,
    teamId,
  };
}
export function modifyTeam(teamId, team) {
  return {
    type: actionTypes.MODIFY_TEAM,
    team,
    teamId,
  };
}
export function loadOneTeam(
  teamId,
  moves,
  learnsets,
) {
  return {
    type: actionTypes.LOAD_ONE_TEAM,
    teamId,
    moves,
    learnsets,
  };
}

function loadTeamSuccess(
  teamId,
  moves,
  learnsets,
) {
  return {
    type: actionTypes.LOAD_ONE_TEAM,
    teamId,
    moves,
    learnsets,
  };
}

export function loadTeam(teamId) {
  return async (dispatch) => {
    try {
      const moves = await axios.get(`${baseUrl}${movesUrl}`);
      const learnsets = await axios.get(`${baseUrl}${learnsetsUrl}`);

      dispatch(loadTeamSuccess(teamId, moves.data, learnsets.data));
    } catch (error) {
      console.log(error);
    }
  };
}
