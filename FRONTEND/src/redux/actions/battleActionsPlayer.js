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
/**
 * With all data the attack is resolved
 * This only takes place if the attack didn't end in a KO
 * @param  {object} playerPokemon Pokemon from the player inbattle
 * @param  {object} enemyPokemon Enemy Pokemon inbattle
 * @param  {object} attackData contains all data from the attack
 * @param  {number} attackData.attackPower calculated
 * @param  {number} attackData.basePower taken from move description
 * @param  {string} attackData.category physical/special
 * @param  {number} attackData.modifier takes into account attacker and defendant types
 * @param  {string} attackData.moveName
 * @param  {string} attackData.name
 * @param  {number} attackData.pp
 * @param  {string} attackData.shortDesc
 * @param  {string} attackData.type
 * @param  {number} attackData.teamLenght
 */
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
/**
 * Initiates all actions that get data from the attack performed by the player
 * @param  {object} playerPokemon Pokemon from the player inbattle
 * @param  {object} enemyPokemon Enemy Pokemon inbattle
 * @param  {object} moves Array with info from all moves
 * @param  {string} moveName Name of move used by the player
 * @param  {number} enemyTeam How many members has the enemy team currently?
 * Used later to decide wether battle is over or not
 */
function handleAttack(playerPokemon, enemyPokemon, moves, moveName, enemyTeam) {
  const data = {
    teamLenght: enemyTeam,
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
