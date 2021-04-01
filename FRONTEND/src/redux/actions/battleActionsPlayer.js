/* eslint-disable no-param-reassign */

import actionTypes from './actionTypes';
import calculateTypeModifier from '../../battle/attackTypeMultiplier';
import getAttackData from '../../battle/getAttackData';
import calculateAttackPower from '../../battle/calculateAttackPower';

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

function playerAttacks() {
  return {
    type: actionTypes.PLAYER_ATTACKS,
  };
}
function resolveAttack(playerPokemon, enemyPokemon, attackData) {
  return {
    type: actionTypes.RESOLVE_ATTACK_PLAYER,
    playerPokemon,
    enemyPokemon,
    attackData,
  };
}
function handleKO(playerPokemon, enemyPokemon, attackData) {
  return {
    type: actionTypes.HANDLE_KO,
    playerPokemon,
    enemyPokemon,
    attackData,
  };
}

function getUpdatedHP(playerPokemon, enemyPokemon, attackData) {
  const updatedenemyPokemon = { ...enemyPokemon };
  updatedenemyPokemon.battleStats.hp -= attackData.attackPower;

  return (dispatch) => {
    updatedenemyPokemon.battleStats.hp > 0
      ? dispatch(
        resolveAttack(
          playerPokemon,
          updatedenemyPokemon,
          attackData,
        ),
      )
      : dispatch(handleKO(playerPokemon, enemyPokemon, attackData));
  };
}

function getAttackPower(
  attackData,
  playerPokemon,
  enemyPokemon,
) {
  const attackPower = calculateAttackPower(
    attackData,
    playerPokemon,
    enemyPokemon,
  );
  const data = {
    ...attackData,
    attackPower,
  };

  return (dispatch) => {
    dispatch(getUpdatedHP(playerPokemon, enemyPokemon, data));
  };
}

function getTypeModifier(attackData, playerPokemon, enemyPokemon) {
  const modifier = calculateTypeModifier(attackData, enemyPokemon);
  const data = {
    ...attackData,
    modifier,
  };
  return (dispatch) => {
    dispatch(
      getAttackPower(
        data,
        playerPokemon,
        enemyPokemon,
      ),
    );
  };
}

function getAttackType(playerPokemon, enemyPokemon, data, moves) {
  let attackData = getAttackData(data.moveName, moves);
  attackData = {
    ...data,
    ...attackData,
  };
  return (dispatch) => {
    dispatch(
      getTypeModifier(attackData, playerPokemon, enemyPokemon),
    );
  };
}

function handleAttack(playerPokemon, enemyPokemon, moves, moveName, playerTeam) {
  const data = {
    teamLenght: playerTeam,
    moveName,
  };
  return (dispatch) => {
    dispatch(getAttackType(playerPokemon, enemyPokemon, data, moves));
  };
}

export {
  newPlayerPokemonLoad,
  newPlayerPokemonMsg,
  newPlayerPokemon,
  playerAttacks,
  resolveAttack,
  handleKO,
  getUpdatedHP,
  getAttackPower,
  getTypeModifier,
  getAttackType,
  handleAttack,
};
