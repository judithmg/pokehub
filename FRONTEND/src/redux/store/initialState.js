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

  },

  teamsReducer: {
    teams: [],
    team: {},
    newTeam: {},
  },

  userReducer: {
    user: {},
  },

  battleReducer: {
    boxMessages: '',
    attackData: {},
    playerTeam: [],
    enemyTeam: [],
    playerPokemon: {},
    enemyPokemon: {},
    attackBox: {},

    playerClass: '',
    enemyClass: '',
    blockClicks: '',

    playerAttackMsg: '',
    enemyAttackMsg: '',
    playerDiesMsg: '',
    enemyDiesMsg: '',
  },
};
