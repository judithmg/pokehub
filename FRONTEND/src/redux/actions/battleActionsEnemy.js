/* eslint-disable no-param-reassign */
import axios from 'axios';

import calculateTypeModifier from '../../battle/attackTypeMultiplier';
import calculateAttackPower from '../../battle/calculateAttackPower';
import getAttackData from '../../battle/getAttackData';
import dbUrls from '../../constants/dbUrls';
import actionTypes from './actionTypes';

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

function enemyWins(playerPokemon, enemyPokemon, attackData) {
  return {
    type: actionTypes.BATTLE_OVER,
    playerPokemon,
    enemyPokemon,
    attackData,
    battleOver: {
      enemyWins: 'YOU LOST!',
    },
  };
}

function battleOver(playerPokemon, enemyPokemon, attackData) {
  return async (dispatch) => {
    await axios.put(`${dbUrls.baseUrl}${dbUrls.rankingUrl}/add`, { battle: { lost: 1 }, email: 'eloy@eloy.com' });
    dispatch(handleKOEnemy(playerPokemon, enemyPokemon, attackData));
    setTimeout(() => (dispatch(enemyWins(playerPokemon, enemyPokemon, attackData))), 1500);
  };
}

function checkOver(playerPokemon, enemyPokemon, attackData) {
  return (dispatch) => {
    attackData.teamLenght === 1
      ? dispatch(battleOver(playerPokemon, enemyPokemon, attackData))
      : dispatch(handleKOEnemy(playerPokemon, enemyPokemon, attackData));
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
      : dispatch(checkOver(updatedPlayerPokemon, enemyPokemon, attackData));
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

  randomEnemyAttack,
  handleKOEnemy,
  newEnemyPokemon,
  newEnemyPokemonLoad,
  newEnemyPokemonMsg,
  resolveAttackEnemy,
};
