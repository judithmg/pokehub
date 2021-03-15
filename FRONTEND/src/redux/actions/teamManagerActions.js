import actionTypes from './actionTypes';
import teamData from '../../pages/teams/teamData';

export function loadTeams() {
  return {
    type: actionTypes.LOAD_TEAMS,
    teamData,
  };
}

export function createTeam(team) {
  return {
    type: actionTypes.CREATE_TEAM,
    team,
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
export function loadOneTeam(teamId, moves,
  learnsets) {
  return {
    type: actionTypes.LOAD_ONE_TEAM,
    teamId,
    moves,
    learnsets,
  };
}
