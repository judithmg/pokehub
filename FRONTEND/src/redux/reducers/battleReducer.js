import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

let attackBox = {
  attackOne: { name: '' },
  attackTwo: { name: '' },
  attackThree: { name: '' },
  attackFour: { name: '' },
};

const enemyStatic = {
  battleStats: {
    hp: 341,
    maxhp: 341,
    atk: 259,
    def: 2636,
    spa: 212,
    spd: 236,
    spe: 236,
  },
  types: ['Psychic'],
  name: 'Mew',
  moveset: [{ name: 'Icy Wind' }, { name: 'Take Down' }, { name: 'Thunderbolt' }, { name: 'Knock Off' }],
  num: 151,
  level: 100,
};

export default function battleReducer(state = initialState.battleReducer, action = {}) {
  let playerPokemon;
  let moveset;
  let enemyPokemon;
  let playerAttackMsg;
  let enemyAttackMsg;
  let enemyTeam;
  let updatedEnemyTeam;
  let playerTeam;
  let updatedPlayerTeam;
  switch (action.type) {
    case actionTypes.LOAD_ATTACK_BOX:
      moveset = action.playerPokemon.moveset;
      attackBox = {
        attackOne: { name: moveset[0].name },
        attackTwo: { name: moveset[1].name },
        attackThree: { name: moveset[2].name },
        attackFour: { name: moveset[3].name },
      };
      return {
        ...state,
        attackBox,
        playerClass: '',
        enemyClass: '',
      };

    case actionTypes.LOAD_BATTLE_TEAM:
      return {
        ...state, playerTeam: action.playerTeam,
      };

    case actionTypes.NEW_PLAYER_POKEMON_MSG:
      return {
        ...state,
        blockClicks: 'block-clicks',
        playerDiesMsg: 'Send a new Pokemon to battle!',
        playerClass: 'poke-fainted ',
        enemyClass: '',
      };

    case actionTypes.NEW_PLAYER_POKEMON_LOAD:
      playerTeam = [...state.playerTeam];
      updatedPlayerTeam = playerTeam.filter((poke) => poke.name !== state.playerPokemon.name);
      return {
        ...state,
        playerTeam: updatedPlayerTeam,
        playerPokemon: {},
      };

    case actionTypes.NEW_ENEMY_POKEMON_MSG:
      return {
        ...state,
        blockClicks: 'block-clicks',
        enemyDiesMsg: 'A new Pokemon will fight you!',
        enemyClass: 'poke-fainted ',
        playerClass: '',
      };

    case actionTypes.NEW_ENEMY_POKEMON_LOAD:
      enemyTeam = [...state.enemyTeam];
      updatedEnemyTeam = enemyTeam.filter((enemy) => enemy.name !== state.enemyPokemon.name);
      enemyPokemon = updatedEnemyTeam[Math.floor(Math.random()
        * (updatedEnemyTeam.length - 1)) + 1];
      return {
        ...state,
        blockClicks: '',
        enemyClass: '',
        enemyAttackMsg: `Pokemon ${enemyPokemon.name} wants to fight you!`,
        enemyTeam: updatedEnemyTeam,
        enemyPokemon,

      };

    case actionTypes.LOAD_ENEMY_TEAM:
      return {
        ...state,
        enemyTeam: action.updatedEnemyTeam,
        enemyPokemon: action.enemyPokemon,
      };

    case actionTypes.LOAD_PLAYER_POKEMON:
      playerPokemon = {
        ...action.playerPokemon,
        battleStats: action.stats,
        level: 90,
      };
      return { ...state, playerPokemon };

    case actionTypes.LOAD_ENEMY:
      return { ...state, enemyPokemon: enemyStatic };

    case actionTypes.HANDLE_KO:
      enemyPokemon = { ...state.enemyPokemon };
      enemyPokemon.battleStats.hp = 0;
      return {
        ...state,
        enemyClass: 'animate__animated animate__fadeOutDown',
        enemyPokemon,
        attackBox: null,
        enemyAttackMsg: '',
        playerDiesMsg: '',
        enemyDiesMsg: `${enemyPokemon.name.toUpperCase()} fainted!`,
        playerAttackMsg: '',

      };

    case actionTypes.HANDLE_KO_ENEMY:
      playerPokemon = { ...state.playerPokemon };
      playerPokemon.battleStats.hp = 0;
      return {
        ...state,
        attackData: action.attackData,
        playerClass: 'animate__animated animate__fadeOutDown',
        playerPokemon,
        attackBox: null,
        playerAttackMsg: '',
        enemyAttackMsg: '',
        playerDiesMsg: `Oh, no! ${playerPokemon.name.toUpperCase()} whited out!`,

      };

    case actionTypes.RESOLVE_ATTACK_PLAYER:
      action.attackPower > 0 ? playerAttackMsg = `${action.playerPokemon.name.toUpperCase()} used ${action.moveName}!` : playerAttackMsg = `${action.playerPokemon.name.toUpperCase()} used ${action.moveName}! But it did nothing...`;
      return {
        ...state,
        enemyPokemon: action.enemyPokemon,
        enemyClass: 'animate__animated animate__rubberBand',
        playerClass: 'animate__bounce animate__animated',
        attackBox: null,
        playerAttackMsg,
        enemyAttackMsg: '',
      };

    case actionTypes.RESOLVE_ATTACK_ENEMY:
      action.attackPower > 0
        ? enemyAttackMsg = `Enemy Pokemon ${action.enemyPokemon.name.toUpperCase()} attacked! ${action.enemyPokemon.name.toUpperCase()} used ${action.moveName}!`
        : enemyAttackMsg = `Enemy Pokemon ${action.enemyPokemon.name.toUpperCase()} attacked! ${action.enemyPokemon.name.toUpperCase()} used ${action.moveName}! But it did nothing...`;
      return {
        ...state,
        attackData: action.attackData,
        enemyPokemon: action.enemyPokemon,
        playerClass: 'animate__animated animate__rubberBand',
        enemyClass: 'animate__bounce animate__animated',
        playerAttackMsg: '',
        enemyAttackMsg,
      };

    default:
      return state;
  }
}
