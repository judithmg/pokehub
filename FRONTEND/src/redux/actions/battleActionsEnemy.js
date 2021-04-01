/* eslint-disable no-param-reassign */

import actionTypes from './actionTypes';
import calculateTypeModifier from '../../battle/attackTypeMultiplier';
import getAttackData from '../../battle/getAttackData';
import calculateAttackPower from '../../battle/calculateAttackPower';

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

function resolveAttackEnemy(playerPokemon,
  enemyPokemon,
  attackData) {
  return {
    type: actionTypes.RESOLVE_ATTACK_ENEMY,
    playerPokemon,
    enemyPokemon,
    attackData,
  };
}

function handleKOEnemy(playerPokemon,
  enemyPokemon,
  attackData) {
  return {
    type: actionTypes.HANDLE_KO_ENEMY,
    playerPokemon,
    enemyPokemon,
    attackData,
  };
}

function enemyWinsBattle(playerPokemon, enemyPokemon, attackData) {
  return {
    type: actionTypes.ENEMY_WINS_BATTLE,
    playerPokemon,
    enemyPokemon,
    attackData,
  };
}

function handlePlayerLoss() {
  return {
    type: actionTypes.HANDLE_PLAYER_LOSS,
  };
}

function getUpdatedHPEnemy(playerPokemon, enemyPokemon, attackData) {
  const updatedPlayerPokemon = { ...playerPokemon };
  updatedPlayerPokemon.battleStats.hp -= attackData.attackPower;
  return (dispatch) => {
    updatedPlayerPokemon.battleStats.hp > 0
      ? dispatch(
        resolveAttackEnemy(
          updatedPlayerPokemon,
          enemyPokemon,
          attackData,
        ),
      )
      : attackData.teamLenght === 1
        ? dispatch(handleKOEnemy(updatedPlayerPokemon, enemyPokemon, attackData))
        : dispatch(enemyWinsBattle(updatedPlayerPokemon, enemyPokemon, attackData));
    setTimeout(() => {
      dispatch(handlePlayerLoss());
    }, 2000);
  };
}

function getAttackPowerEnemy(
  attackData,
  playerPokemon,
  enemyPokemon,
) {
  const attackPower = calculateAttackPower(
    attackData,
    enemyPokemon,
    playerPokemon,
  );
  const data = {
    ...attackData,
    attackPower,
  };
  return (dispatch) => {
    dispatch(getUpdatedHPEnemy(playerPokemon, enemyPokemon, data));
  };
}

function getTypeModifierEnemy(attackData, playerPokemon, enemyPokemon) {
  const modifier = calculateTypeModifier(attackData, playerPokemon);
  const data = {
    ...attackData,
    modifier,
  };
  return (dispatch) => {
    dispatch(
      getAttackPowerEnemy(
        data,
        playerPokemon,
        enemyPokemon,

      ),
    );
  };
}

function getAttackTypeEnemy(playerPokemon, enemyPokemon, enemyMove, moves) {
  let attackData = getAttackData(enemyMove.moveName, moves);
  attackData = {
    ...enemyMove,
    ...attackData,
  };
  return (dispatch) => {
    dispatch(
      getTypeModifierEnemy(attackData, playerPokemon, enemyPokemon),
    );
  };
}

function randomEnemyAttack(playerPokemon, enemyPokemon, moves, playerTeam) {
  const moveName = enemyPokemon.moveset[Math.floor(Math.random() * 3) + 1].name;
  const data = {
    teamLenght: playerTeam,
    moveName,
  };
  return (dispatch) => {
    dispatch(getAttackTypeEnemy(playerPokemon, enemyPokemon, data, moves));
  };
}

export {
  loadEnemy,
  randomEnemyAttack,
  handleKOEnemy,
  newEnemyPokemon,
  newEnemyPokemonLoad,
  newEnemyPokemonMsg,
  resolveAttackEnemy,
};
