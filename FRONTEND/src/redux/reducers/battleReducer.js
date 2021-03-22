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

export default function battleReducer(state = initialState.battleReducer, action) {
  let playerPokemon;
  let moveset;
  let enemyPokemon;
  let playerAttackMsg;
  let enemyAttackMsg;
  switch (action.type) {
    case actionTypes.LOAD_TEXT_BOX:
      return { ...state, boxMessages: action.message };

    case actionTypes.LOAD_ATTACK_BOX:
      moveset = action.playerPokemon.moveset;
      attackBox = {
        attackOne: { name: moveset[0].name },
        attackTwo: { name: moveset[1].name },
        attackThree: { name: moveset[2].name },
        attackFour: { name: moveset[3].name },
      };
      return { ...state, attackBox };

    case actionTypes.LOAD_BATTLE_TEAM:
      return {
        ...state, playerTeam: action.playerTeam,
      };
    case actionTypes.LOAD_ENEMY_TEAM:
      return {
        ...state,
        enemyTeam: action.enemyTeam,
        enemyPokemon: action.enemyPokemon,
      };

    case actionTypes.LOAD_PLAYER_POKEMON:
      playerPokemon = {
        ...action.playerPokemon,
        battleStats: action.stats,
        level: 100,
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
        playerAttackMsg: `${enemyPokemon.name.toUpperCase()} fainted!`,

      };
    case actionTypes.HANDLE_KO_ENEMY:
      playerPokemon = { ...state.playerPokemon };
      playerPokemon.battleStats.hp = 0;
      return {
        ...state,
        playerClass: 'animate__animated animate__fadeOutDown',
        playerPokemon,
        attackBox: null,
        playerAttackMsg: '',
        enemyAttackMsg: `Oh, no! ${playerPokemon.name.toUpperCase()} whited out!`,

      };

    case actionTypes.RESOLVE_ATTACK_PLAYER:
      action.attackPower > 0 ? playerAttackMsg = `${action.playerPokemon.name.toUpperCase()} used ${action.moveName}!` : playerAttackMsg = `${action.playerPokemon.name.toUpperCase()} used ${action.moveName}! But it did nothing...`;
      enemyPokemon = action.enemyPokemon;
      playerPokemon = action.playerPokemon;
      return {
        ...state,
        enemyPokemon,
        playerClass: 'animate__animated animate__rubberBand',
        enemyClass: 'animate__bounce animate__animated',
        attackBox: null,
        playerAttackMsg,
        enemyAttackMsg: '',
      };
    case actionTypes.RESOLVE_ATTACK_ENEMY:
      action.attackPower > 0
        ? enemyAttackMsg = `Enemy Pokemon ${state.enemyPokemon.name.toUpperCase()} attacked! ${state.enemyPokemon.name.toUpperCase()} used ${action.moveName}!`
        : playerAttackMsg = `Enemy Pokemon ${state.enemyPokemon.name.toUpperCase()} attacked! ${state.enemyPokemon.name.toUpperCase()} used ${action.moveName}!`;
      enemyPokemon = action.enemyPokemon;
      playerPokemon = action.playerPokemon;
      return {
        ...state,
        enemyPokemon,
        enemyClass: 'animate__animated animate__rubberBand',
        playerClass: 'animate__bounce animate__animated',
        playerAttackMsg: '',
        enemyAttackMsg,
      };

    case actionTypes.RESET_CLASSES:
      return { ...state, enemyClass: '', playerClass: '' };

    default:
      return state;
  }
}
