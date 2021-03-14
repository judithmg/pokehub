import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function teamsReducer(state = initialState.teamsReducer, action) {
  let teams;
  let userteam;
  // eslint-disable-next-line no-debugger
  debugger;
  console.log(action.teamId);
  console.log(state.teams);
  switch (action.type) {
    case actionTypes.LOAD_TEAMS:
      return { ...state, teams: action.teamData };
    case actionTypes.CREATE_TEAM:
      teams = [...state.teams, action.team];
      return { ...state, teams };
    case actionTypes.DELETE_ONE_TEAM:
      teams = state.teams.filter((team) => team.id !== action.teamId);
      return { ...state, teams };
    case actionTypes.MODIFY_TEAM:
      teams = state.teams.filter((team) => team.id === action.data.id);
      teams = [...teams, action.data];
      return { ...state, teams };
    case actionTypes.LOAD_ONE_TEAM:
      userteam = state.teams.filter((team) => team.id === action.teamId);
      console.log('this', userteam);
      return { ...state, team: userteam };
    case actionTypes.TEAM_LOADING:
      return { ...state, teamLoading: true };
    default:
      return state;
  }
}
