/* eslint-disable no-param-reassign */
import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function teamsReducer(state = initialState.teamsReducer, action = {}) {
  let teams;
  let userteam;
  let newTeam;
  let caseId;
  let index;
  let pokemon;
  let pokemons;
  let pokeFromPokedex;
  let pokemonLearnset;
  let filteredMoves;
  let modifiedTeam;

  switch (action.type) {
    case actionTypes.LOAD_TEAMS:
      return { ...state, teams: action.data };

    case actionTypes.CREATE_TEAM:
      caseId = state.teams
        .reduce(
          (max, teamId) => (teamId.id > max ? teamId.id : max),
          0,
        );
      newTeam = {
        id: caseId + 1,
        pokemons: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }],
      };
      return { ...state, newTeam };

    case actionTypes.DELETE_ONE_TEAM:
      return { ...state, teams: action.data.teams };

    case actionTypes.MODIFY_TEAM:
      teams = state.teams.filter((team) => team.id === action.data.id);
      teams = [...teams, action.data];
      return { ...state, teams };

    case actionTypes.LOAD_ONE_TEAM:
      // find team from url params

      /^\d+$/.test(action.teamId)
        ? caseId = +action.teamId
        : caseId = action.teamId;
      userteam = state.teams?.find((team) => team.id === caseId);

      /* once the team is found, go through all pokemons on the team, and for each find its learnset
      then for each move on its learnsets, get the full info from the movelist */
      modifiedTeam = userteam?.pokemons?.map((pokeFromTeam) => {
        pokemonLearnset = action.learnsets
          ?.find((pokeLearnset) => pokeLearnset?.name?.toLowerCase()
        === pokeFromTeam?.name?.toLowerCase());

        filteredMoves = pokemonLearnset?.learnset
          ?.map((pokemove) => action.moves
            .filter((move) => move.id === pokemove));

        return {
          ...pokeFromTeam,
          learnset: filteredMoves,
        };
      });

      return { ...state, team: { id: userteam.id, pokemons: modifiedTeam, _id: userteam._id } };

    case actionTypes.ADD_POKEMON_TO_TEAM:
      /* find the num of the pokemon added on the pokedex list, then get its data
      remove that pokemon from the newly created team, and add the new one with its full info
      then sort by id (order of adding) */
      [pokeFromPokedex] = action.pokedex.filter((poke) => poke.num === +action.num);

      index = state.newTeam.pokemons.findIndex((poke) => !poke.num);
      if (index === -1) index = 0;
      pokemon = {
        ...pokeFromPokedex,
        id: state.newTeam.pokemons[index].id,
        num: action.num,
      };

      pokemons = state.newTeam.pokemons.filter((poke) => poke.id !== pokemon.id);

      pokemons = [...pokemons, pokemon];
      pokemons.sort((a, b) => a.id - b.id);
      newTeam = { ...state.newTeam, pokemons };
      return { ...state, newTeam };

    case actionTypes.SUBMIT_TEAM:
      teams = [...state.teams, action.data.teams[action.data.teams.length - 1]];
      return { ...state, teams, newTeam: {} };

    case actionTypes.MODIFY_POKEMON:
      return {
        ...state,
        team: action.team,
      };

    default:
      return state;
  }
}
