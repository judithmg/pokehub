export default {
  pokedexReducer: {
    pokedex: [],
    pokedexPage: 1,
    pokemon: {},

    moves: [],
    abilities: [],
    learnsets: [],

    pokemonsShown: [],
    pokemonLearnset: [],
    pokemonAbilities: [],

    pokemonTypeFiltered: '',

    abilitiesLoadingBool: false,
    pokedexLoadingBool: false,
    movesLoadingBool: false,
    learnsetsLoadingBool: false,
  },

  teamsReducer: {
    teams: [],
    team: {},
    creatingTeam: {},
    teamLoading: true,
  },

};
