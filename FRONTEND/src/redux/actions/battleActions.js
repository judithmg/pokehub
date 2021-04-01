/* eslint-disable no-param-reassign */
import actionTypes from './actionTypes';
import calculatePokemonStats from '../../battle/calculatePokemonStats';
import enemyTeam from '../../data/enemy';

function loadEnemyTeam() {
  const updatedEnemyTeam = enemyTeam.map((enemy) => {
    const stats = calculatePokemonStats(enemy);
    enemy = {
      ...enemy,
      battleStats: stats,
      level: Math.floor(Math.random() * (100 - 90 + 1)) + 90,
    };
    return enemy;
  });
  const enemyPokemon = updatedEnemyTeam[Math.floor(Math.random() * (5 - 0 + 1)) + 0];
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
function loadPlayerPokemonSuccess(playerPokemon, stats) {
  return {
    type: actionTypes.LOAD_PLAYER_POKEMON,
    playerPokemon,
    stats,
  };
}

function loadPlayerPokemon(playerPokemon) {
  const stats = calculatePokemonStats(playerPokemon);
  return (dispatch) => {
    dispatch(loadAttackBox(playerPokemon));
    dispatch(loadPlayerPokemonSuccess(playerPokemon, stats));
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
