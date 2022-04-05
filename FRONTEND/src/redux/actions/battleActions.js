/* eslint-disable no-param-reassign */
import calculatePokemonStats from '../../battle/calculatePokemonStats';
import enemyTeam from '../../data/enemy';
import actionTypes from './actionTypes';

function loadEnemyTeam() {
  const level = Math.floor(Math.random() * (100 - 90 + 1)) + 90;
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
  return (dispatch) => {
    dispatch(loadBattleTeam(playerTeam));
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
  const level = 99;
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
