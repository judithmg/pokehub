/* eslint-disable no-param-reassign */
import actionTypes from './actionTypes';
import calculateTypeModifier from '../../battle/attackTypeMultiplier';
import getAttackData from '../../battle/getAttackData';
import calculatePokemonStats from '../../battle/calculatePokemonStats';
import calculateAttackPower from '../../battle/calculateAttackPower';
import enemyTeam from '../../data/enemy';

function loadBattleTeam(playerTeam) {
  return {
    type: actionTypes.LOAD_BATTLE_TEAM,
    playerTeam,
  };
}

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

function loadEnemy() {
  return {
    type: actionTypes.LOAD_ENEMY,
  };
}

function newEnemyPokemonLoad() {
  return {
    type: actionTypes.NEW_ENEMY_POKEMON_LOAD,
  };
}

function newEnemyPokemonMsg() {
  return {
    type: actionTypes.NEW_ENEMY_POKEMON_MSG,
  };
}
function newEnemyPokemon() {
  return (dispatch) => {
    dispatch(newEnemyPokemonMsg());
    setTimeout(() => {
      dispatch(newEnemyPokemonLoad());
    }, 2000);
  };
}

function newPlayerPokemonLoad() {
  return {
    type: actionTypes.NEW_PLAYER_POKEMON_LOAD,
  };
}

function newPlayerPokemonMsg() {
  return {
    type: actionTypes.NEW_PLAYER_POKEMON_MSG,
  };
}

function newPlayerPokemon() {
  return (dispatch) => {
    dispatch(newPlayerPokemonMsg());
    setTimeout(() => {
      dispatch(newPlayerPokemonLoad());
    }, 2000);
  };
}

function loadPlayerPokemon(playerPokemon) {
  const stats = calculatePokemonStats(playerPokemon);
  return (dispatch) => {
    dispatch(loadAttackBox(playerPokemon));
    dispatch(loadPlayerPokemonSuccess(playerPokemon, stats));
  };
}

function playerAttacks() {
  return {
    type: actionTypes.PLAYER_ATTACKS,
  };
}

function resolveAttackEnemy(playerPokemon,
  enemyPokemon,
  attackPower,
  moveName,
  attackData) {
  return {
    type: actionTypes.RESOLVE_ATTACK_ENEMY,
    playerPokemon,
    enemyPokemon,
    attackPower,
    moveName,
    attackData,
  };
}
function handleKOEnemy(playerPokemon,
  enemyPokemon,
  attackPower,
  attackData) {
  return {
    type: actionTypes.HANDLE_KO_ENEMY,
    playerPokemon,
    enemyPokemon,
    attackPower,
    attackData,
  };
}

function getUpdatedHPEnemy(playerPokemon, enemyPokemon, attackPower, moveName, attackData) {
  const updatedPlayerPokemon = { ...playerPokemon };
  updatedPlayerPokemon.battleStats.hp -= attackPower;

  return (dispatch) => {
    updatedPlayerPokemon.battleStats.hp > 0
      ? dispatch(
        resolveAttackEnemy(
          updatedPlayerPokemon,
          enemyPokemon,
          attackPower,
          moveName,
          attackData,
        ),
      )
      : dispatch(handleKOEnemy(updatedPlayerPokemon, enemyPokemon, attackPower, attackData));
  };
}

function getAttackPowerEnemy(attackData,
  playerPokemon,
  enemyPokemon,
  modifier,
  moveName) {
  const attackPower = calculateAttackPower(
    attackData,
    enemyPokemon,
    playerPokemon,
    modifier,
  );
  attackData = {
    ...attackData,
    attackPower,
  };
  return (dispatch) => {
    dispatch(getUpdatedHPEnemy(playerPokemon, enemyPokemon, attackPower, moveName, attackData));
  };
}

function getTypeModifierEnemy(attackData, playerPokemon, enemyPokemon, moveName) {
  const modifier = calculateTypeModifier(attackData, playerPokemon);
  attackData = {
    ...attackData,
    modifier,
  };
  return (dispatch) => {
    dispatch(
      getAttackPowerEnemy(
        attackData,
        playerPokemon,
        enemyPokemon,
        modifier,
        moveName,
      ),
    );
  };
}

function getAttackTypeEnemy(playerPokemon, enemyPokemon, moveName, moves) {
  const attackData = getAttackData(moveName, moves);
  return (dispatch) => {
    dispatch(
      getTypeModifierEnemy(attackData, playerPokemon, enemyPokemon, moveName),
    );
  };
}

function randomEnemyAttack(playerPokemon, enemyPokemon, moves) {
  const enemyMove = enemyPokemon.moveset[Math.floor(Math.random() * 3) + 1].name;
  return (dispatch) => {
    dispatch(getAttackTypeEnemy(playerPokemon, enemyPokemon, enemyMove, moves));
  };
}

function resolveAttack(playerPokemon, enemyPokemon, attackPower, moveName) {
  return {
    type: actionTypes.RESOLVE_ATTACK_PLAYER,
    playerPokemon,
    enemyPokemon,
    attackPower,
    moveName,
  };
}
function handleKO(playerPokemon, enemyPokemon, attackPower) {
  return {
    type: actionTypes.HANDLE_KO,
    playerPokemon,
    enemyPokemon,
    attackPower,
  };
}

function getUpdatedHP(playerPokemon, enemyPokemon, attackPower, moveName) {
  const updatedenemyPokemon = { ...enemyPokemon };
  updatedenemyPokemon.battleStats.hp -= attackPower;

  return (dispatch) => {
    updatedenemyPokemon.battleStats.hp > 0
      ? dispatch(
        resolveAttack(
          playerPokemon,
          updatedenemyPokemon,
          attackPower,
          moveName,
        ),
      )
      : dispatch(handleKO(playerPokemon, enemyPokemon, attackPower));
  };
}

function getAttackPower(
  attackData,
  playerPokemon,
  enemyPokemon,
  modifier,
  moveName,
) {
  const attackPower = calculateAttackPower(
    attackData,
    playerPokemon,
    enemyPokemon,
    modifier,
  );

  return (dispatch) => {
    dispatch(getUpdatedHP(playerPokemon, enemyPokemon, attackPower, moveName));
  };
}

function getTypeModifier(attackData, playerPokemon, enemyPokemon, moveName) {
  const modifier = calculateTypeModifier(attackData, enemyPokemon);
  return (dispatch) => {
    dispatch(
      getAttackPower(
        attackData,
        playerPokemon,
        enemyPokemon,
        modifier,
        moveName,
      ),
    );
  };
}

function getAttackType(playerPokemon, enemyPokemon, moveName, moves) {
  const attackData = getAttackData(moveName, moves);
  return (dispatch) => {
    dispatch(
      getTypeModifier(attackData, playerPokemon, enemyPokemon, moveName),
    );
  };
}

function handleAttack(playerPokemon, enemyPokemon, moves, moveName) {
  return (dispatch) => {
    dispatch(getAttackType(playerPokemon, enemyPokemon, moveName, moves));
  };
}

export {
  startNewFight,
  loadBattleTeam,
  loadPlayerPokemon,
  loadEnemy,
  playerAttacks,
  randomEnemyAttack,
  getAttackType,
  getAttackPower,
  getTypeModifier,
  loadAttackBox,
  handleAttack,
  resolveAttack,
  handleKO,
  handleKOEnemy,
  newEnemyPokemon,
  newPlayerPokemon,
  loadPlayerPokemonSuccess,
  newEnemyPokemonLoad,
  newPlayerPokemonLoad,
  newEnemyPokemonMsg,
  newPlayerPokemonMsg,
  resolveAttackEnemy,
};
