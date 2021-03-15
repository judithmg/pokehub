import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function teamsReducer(state = initialState, action) {
  let teams;
  let userteam;
  let newTeam;
  let maxid;
  let index;
  let pokemon;
  let pokemons;
  switch (action.type) {
    case actionTypes.LOAD_TEAMS:
      return { ...state, teams: action.teamData };
    case actionTypes.CREATE_TEAM:
      maxid = state.teams
        .reduce(
          (max, character) => (character.id > max ? character.id : max),
          0,
        );
      newTeam = {
        id: maxid + 1,
        pokemons: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }],
      };
      return { ...state, newTeam };
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
      console.log(state);
      index = state.newTeam.pokemons.findIndex((poke) => !poke.num);
      if (index === -1) index = 0;
      pokemon = {
        ...state.newTeam.pokemons[index],
        num: action.num,
      };
      pokemons = state.newTeam.pokemons.filter((poke) => poke.id !== pokemon.id);
      pokemons = [...pokemons, pokemon];
      pokemons.sort((a, b) => a.id - b.id);
      newTeam = { ...state.newTeam, pokemons };
      return { ...state, newTeam };
    case actionTypes.SUBMIT_TEAM:
      teams = [...state.teams, state.newTeam];
      return { ...state, teams };

    default:
      return state;
  }
}
