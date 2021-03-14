import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function teamReducer(state = initialState.teamsReducer, action) {
  let teams;
  switch (action.types) {
    case actionTypes.LOAD_TEAMS:
      return { ...state, teams: action.data, teamLoading: false };
    case actionTypes.DELETE_TEAM:
      teams = state.teams.filter((team) => team.id === action.data.id);
      return { ...state, teams };
    case actionTypes.MODIFY_TEAM:
      teams = state.teams.filter((team) => team.id === action.data.id);
      teams = [...teams, action.data];
      return { ...state, teams };
    case actionTypes.LOAD_ONE_TEAM:
      teams = state.teams.filter((team) => team.id === action.data.id);
      return { ...state, team: action.data };
    case actionTypes.TEAM_LOADING:
      return { ...state, teamLoading: true };
    default:
      return state;
  }
}
