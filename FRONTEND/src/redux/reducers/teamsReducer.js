import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function teamsReducer(state = initialState.teamsReducer, action) {
  let teams;
  let userteam;
  let pokemon;
  let newteam;
  let maxid;
  switch (action.type) {
    case actionTypes.LOAD_TEAMS:
      return { ...state, teams: action.teamData };
    case actionTypes.CREATE_TEAM:
      maxid = state.teams
        .reduce(
          (max, character) => (character.id > max ? character.id : max),
          0,
        );
      newteam = {
        id: maxid + 1,
        pokemons: [],
      };
      teams = [...state.teams, newteam];
      console.log(state.teams);
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
      return { ...state, team: userteam };
    case actionTypes.TEAM_LOADING:
      return { ...state, teamLoading: true };
    case actionTypes.ADD_POKEMON_TO_TEAM:
      teams = [...state, pokemon];
      return { ...state, teams };

    default:
      return state;
  }
}
