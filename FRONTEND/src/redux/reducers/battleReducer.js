import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

let attackBox = {
  attackOne: { name: '' },
  attackTwo: { name: '' },
  attackThree: { name: '' },
  attackFour: { name: '' },
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
        blockClicks: '',
        playerClass: '',
        playerDiesMsg: null,
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
        enemyDiesMsg: null,
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
        level: action.level,
      };
      return { ...state, playerPokemon };

    case actionTypes.HANDLE_KO:
      enemyPokemon = { ...state.enemyPokemon };
      enemyPokemon.battleStats.hp = 0;
      return {
        ...state,
        attackData: action.attackData,
        enemyClass: 'animate__animated animate__fadeOutDown',
        enemyPokemon,
        attackBox: null,
        playerAttackMsg: '',
        enemyAttackMsg: '',
        playerDiesMsg: '',
        enemyDiesMsg: `${action.playerPokemon.name.toUpperCase()} used ${action.attackData.moveName}! ${enemyPokemon.name.toUpperCase()} fainted!`,
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
        playerDiesMsg: `Enemy ${action.enemyPokemon.name.toUpperCase()} used ${action.attackData.moveName}! Oh, no! ${playerPokemon.name.toUpperCase()} whited out!`,
      };

    case actionTypes.RESOLVE_ATTACK_PLAYER:
      action.attackData.attackPower > 0
        ? playerAttackMsg = `${action.playerPokemon.name.toUpperCase()} used ${action.attackData.moveName}!`
        : playerAttackMsg = `${action.playerPokemon.name.toUpperCase()} used ${action.attackData.moveName}! But it did nothing...`;

      if (action.attackData.modifier > 1
        && action.attackData.basePower !== 0) playerAttackMsg += ' It was super effective!';
      if (action.attackData.modifier < 1
        && action.attackData.modifier > 0
        && action.attackData.basePower !== 0) playerAttackMsg += " It wasn't very effective...";
      return {
        ...state,
        attackData: action.attackData,
        enemyPokemon: action.enemyPokemon,
        enemyClass: 'animate__animated animate__rubberBand',
        playerClass: 'animate__bounce animate__animated',
        attackBox: null,
        playerAttackMsg,
        enemyAttackMsg: '',
      };

    case actionTypes.RESOLVE_ATTACK_ENEMY:
      action.attackPower > 0
        ? enemyAttackMsg = `Enemy Pokemon ${action.enemyPokemon.name.toUpperCase()} attacked! ${action.enemyPokemon.name.toUpperCase()} used ${action.attackData.moveName}!`
        : enemyAttackMsg = `Enemy Pokemon ${action.enemyPokemon.name.toUpperCase()} attacked! ${action.enemyPokemon.name.toUpperCase()} used ${action.attackData.moveName}! But it did nothing...`;

      if (action.attackData.modifier > 1
        && action.attackData.attackPower !== 0) enemyAttackMsg += ' It was super effective!';
      if (action.attackData.modifier < 1
        && action.attackData.modifier > 0
        && action.attackData.attackPower !== 0) enemyAttackMsg += " It wasn't very effective...";
      return {
        ...state,
        attackData: action.attackData,
        enemyPokemon: action.enemyPokemon,
        playerClass: 'animate__animated animate__rubberBand',
        enemyClass: 'animate__bounce animate__animated',
        playerAttackMsg: '',
        enemyAttackMsg,
      };

    case actionTypes.ENEMY_WINS_BATTLE:
      return {
        ...state,
        blockClicks: 'block-clicks',
        attackData: action.attackData,
        playerClass: 'animate__animated animate__fadeOutDown',
        playerPokemon,
        attackBox: null,
        playerAttackMsg: '',
        enemyAttackMsg: '',
        playerDiesMsg: `Enemy ${action.enemyPokemon.name.toUpperCase()} used ${action.attackData.moveName}! Oh, no! ${playerPokemon.name.toUpperCase()} whited out!`,
      };

    case actionTypes.HANDLE_PLAYER_LOSS:
      return {
        ...state,
        playerAttackMsg: '',
        enemyAttackMsg: '',
        enemyWinsBattle: 'You lost!!!',
      };

    default:
      return state;
  }
}
