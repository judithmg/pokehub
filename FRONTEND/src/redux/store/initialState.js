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
    enemyHP: 0,
    playerHP: 0,
    boxMessages: '',
    attack: {
      name: '',
      type: '',
      basePower: 0,
      category: '',
      attackPower: 0,
      modifier: 1,
    },
    playerTeam: [],
    enemyTeam: [],
    playerPokemon: {},
    enemyPokemon: {},
    attackBox: {},
    playerClass: '',
    enemyClass: '',
  },
};
