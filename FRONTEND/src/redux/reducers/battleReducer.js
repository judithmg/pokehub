import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

let attackBox = {
  attackOne: { name: '' },
  attackTwo: { name: '' },
  attackThree: { name: '' },
  attackFour: { name: '' },
};
let playerPokemon;
let moveset;
let enemyPokemon;
let playerAttackMsg;
let enemyAttackMsg;
let enemyTeam;
let updatedEnemyTeam;
let playerTeam;
let updatedPlayerTeam;

export default function battleReducer(state = initialState.battleReducer, action = {}) {
  switch (action.type) {
    // HANDLE INIT BATTLE

    case actionTypes.LOAD_BATTLE_TEAM:
      return {
        ...state,
        playerTeam: action.playerTeam,
        battleOver: null,
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

      // HANDLE CHANGE POKEMON

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
        * (updatedEnemyTeam.length)) + 0];
      return {
        ...state,
        blockClicks: '',
        enemyDiesMsg: null,
        enemyClass: '',
        enemyAttackMsg: `Pokemon ${enemyPokemon?.name} wants to fight you!`,
        enemyTeam: updatedEnemyTeam,
        enemyPokemon,
      };

      // HANDLE ATTACKS

    case actionTypes.RESOLVE_ATTACK_PLAYER:
      action.attackData.attackPower > 0
        ? playerAttackMsg = `${action.playerPokemon.name.toUpperCase()} used ${action.attackData.moveName}!`
        : playerAttackMsg = `${action.playerPokemon.name.toUpperCase()} used ${action.attackData.moveName}! But it did nothing...`;

      if (action.attackData.modifier > 1
        && action.attackData.attackPower !== 0) playerAttackMsg += ' It was super effective!';
      if (action.attackData.modifier < 1
        && action.attackData.modifier > 0
        && action.attackData.attackPower !== 0) playerAttackMsg += " It wasn't very effective...";

      if (action.attackData.modifier === 0) playerAttackMsg = `${action.playerPokemon.name.toUpperCase()} used ${action.attackData.moveName}! But it didn't affect ${action.enemyPokemon.name}...`;

      return {
        ...state,
        playerAttack: action.attackData,
        enemyPokemon: action.enemyPokemon,
        enemyClass: 'animate__animated animate__rubberBand',
        playerClass: 'animate__bounce animate__animated',
        attackBox: null,
        playerAttackMsg,
        enemyAttackMsg: '',
      };

    case actionTypes.RESOLVE_ATTACK_ENEMY:
      action.attackData.attackPower > 0
        ? enemyAttackMsg = `Enemy Pokemon ${action.enemyPokemon.name.toUpperCase()} attacked! ${action.enemyPokemon.name.toUpperCase()} used ${action.attackData.moveName}!`
        : enemyAttackMsg = `Enemy Pokemon ${action.enemyPokemon.name.toUpperCase()} attacked! ${action.enemyPokemon.name.toUpperCase()} used ${action.attackData.moveName}! It did nothing!`;

      if (action.attackData.modifier > 1
        && action.attackData.attackPower !== 0) enemyAttackMsg += ' It was super effective!';
      if (action.attackData.modifier < 1
        && action.attackData.modifier > 0
        && action.attackData.attackPower !== 0) enemyAttackMsg += " It wasn't very effective...";

      if (action.attackData.modifier === 0) enemyAttackMsg = `Enemy Pokemon ${action.enemyPokemon.name.toUpperCase()} attacked! ${action.enemyPokemon.name.toUpperCase()} used ${action.attackData.moveName}! It didn't affect ${action.playerPokemon.name}!`;
      return {
        ...state,
        enemyAttack: action.attackData,
        enemyPokemon: action.enemyPokemon,
        playerClass: 'animate__animated animate__rubberBand',
        enemyClass: 'animate__bounce animate__animated',
        playerAttackMsg: '',
        enemyAttackMsg,
      };

      // HANDLE POKEMON KO

    case actionTypes.HANDLE_KO:
      // tengo que buscar una forma de realizar esta acción de tal manera que si el combate
      // está finalizado el mensaje de fin de combate sea uno u otro y que cuando le des
      // clic, no te lance al new_msg
      enemyPokemon = { ...state.enemyPokemon };
      enemyPokemon.battleStats.hp = 0;
      return {
        ...state,
        playerAttack: action.attackData,
        playerClass: 'animate__bounce animate__animated',
        enemyClass: 'animate__animated animate__fadeOutDown',
        enemyPokemon,
        attackBox: null,
        enemyAttackMsg: '',
        playerDiesMsg: '',
        enemyDiesMsg: `${action.playerPokemon.name.toUpperCase()} used ${action.attackData.moveName}! ${enemyPokemon.name.toUpperCase()} fainted!`,
        playerAttackMsg: '',
      };

    case actionTypes.HANDLE_KO_ENEMY:
      playerPokemon = { ...state.playerPokemon };
      playerPokemon.battleStats.hp = 0;
      return {
        ...state,
        enemyAttack: action.attackData,
        playerClass: 'animate__animated animate__fadeOutDown',
        playerPokemon,
        attackBox: null,
        playerAttackMsg: '',
        enemyAttackMsg: '',
        playerDiesMsg: `Oh, no! ${action.enemyPokemon.name.toUpperCase()} used ${action.attackData.moveName} and ${playerPokemon.name.toUpperCase()} whited out!`,
      };

      // HANDLE BATTLE OVER

    case actionTypes.BATTLE_OVER:
      return {
        ...state,
        battleOver: action.battleOver,
      };

    default:
      return state;
  }
}
