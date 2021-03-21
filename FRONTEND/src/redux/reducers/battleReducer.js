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
      return { ...state, playerTeam: action.playerTeam };

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
      };
    case actionTypes.HANDLE_KO_ENEMY:
      playerPokemon = { ...state.playerPokemon };
      playerPokemon.battleStats.hp = 0;
      return {
        ...state,
        playerClass: 'animate__animated animate__fadeOutDown',
        playerPokemon,
      };

    case actionTypes.RESOLVE_ATTACK_PLAYER:
      enemyPokemon = action.enemyPokemon;
      playerPokemon = action.playerPokemon;
      return {
        ...state,
        enemyPokemon,
        playerClass: 'animate__animated animate__rubberBand',
        enemyClass: 'animate__bounce animate__animated',
        attackBox: null,
        playerAttackMsg: `${playerPokemon.name.toUpperCase()} used ${action.moveName}!`,
        enemyAttackMsg: '',
      };
    case actionTypes.RESOLVE_ATTACK_ENEMY:
      enemyPokemon = action.enemyPokemon;
      playerPokemon = action.playerPokemon;
      return {
        ...state,
        enemyPokemon,
        enemyClass: 'animate__animated animate__rubberBand',
        playerClass: 'animate__bounce animate__animated',
        playerAttackMsg: '',
        enemyAttackMsg: `Enemy Pokemon ${state.enemyPokemon.name.toUpperCase()} attacked! ${state.enemyPokemon.name.toUpperCase()} used ${action.moveName}!`,
      };

    case actionTypes.RESET_CLASSES:
      return { ...state, enemyClass: '', playerClass: '' };

    default:
      return state;
  }
}
