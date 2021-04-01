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

export {
  loadEnemy,
  randomEnemyAttack,
  handleKOEnemy,
  newEnemyPokemon,
  newEnemyPokemonLoad,
  newEnemyPokemonMsg,
  resolveAttackEnemy,
};
