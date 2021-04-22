/* eslint-disable no-param-reassign */
import actionTypes from './actionTypes';
import calculatePokemonStats from '../../battle/calculatePokemonStats';
import enemyTeam from '../../data/enemy';

const pruebas = [{
  baseStats: {
    hp: 79, atk: 83, def: 100, spa: 85, spd: 105, spe: 78,
  },
  types: ['Water'],
  _id: '604909308168be57082e3ece',
  num: 9,
  name: 'Blastoise',
  id: 1,
  moveset: [{ _id: '605b503658135d2c90c7e461', name: 'Zen Headbutt' }, { _id: '605b503658135d2c90c7e462', name: 'Fling' }, { _id: '605b503658135d2c90c7e463', name: 'Dynamic Punch' }, { _id: '605b503658135d2c90c7e464', name: 'Ice Beam' }],
}];

function loadEnemyTeam() {
  const level = 9;
  // const level = Math.floor(Math.random() * (100 - 90 + 1)) + 90;
  const updatedEnemyTeam = enemyTeam.map((enemy) => {
    const stats = calculatePokemonStats(enemy, level);
    enemy = {
      ...enemy,
      battleStats: stats,
      level,
    };
    return enemy;
  });
  const enemyPokemon = updatedEnemyTeam[Math.floor(Math.random()
    * (updatedEnemyTeam.length - 1 - 0 + 1)) + 0];
  return {
    type: actionTypes.LOAD_ENEMY_TEAM,
    updatedEnemyTeam,
    enemyPokemon,
  };
}

function loadBattleTeam(playerTeam) {
  return {
    type: actionTypes.LOAD_BATTLE_TEAM,
    playerTeam,
  };
}

function startNewFight(playerTeam) {
  console.log(playerTeam);
  return (dispatch) => {
    dispatch(loadBattleTeam(pruebas));
    dispatch(loadEnemyTeam());
  };
}

function loadAttackBox(playerPokemon) {
  return {
    type: actionTypes.LOAD_ATTACK_BOX,
    playerPokemon,
  };
}
function loadPlayerPokemonSuccess(playerPokemon, stats, level) {
  return {
    type: actionTypes.LOAD_PLAYER_POKEMON,
    playerPokemon,
    stats,
    level,
  };
}

function loadPlayerPokemon(playerPokemon) {
  const level = 990;
  const stats = calculatePokemonStats(playerPokemon, level);
  return (dispatch) => {
    dispatch(loadAttackBox(playerPokemon));
    dispatch(loadPlayerPokemonSuccess(playerPokemon, stats, level));
  };
}

export {
  startNewFight,
  loadAttackBox,
  loadEnemyTeam,
  loadBattleTeam,
  loadPlayerPokemon,
  loadPlayerPokemonSuccess,
};
