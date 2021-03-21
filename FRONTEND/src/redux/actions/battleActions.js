import actionTypes from './actionTypes';
import calculateTypeModifier from '../../battle/attackTypeMultiplier';
import getAttackData from '../../battle/getAttackData';
import calculatePokemonStats from '../../battle/calculatePokemonStats';
import calculateAttackPower from '../../battle/calculateAttackPower';

function loadBattleTeam(playerTeam) {
  return {
    type: actionTypes.LOAD_BATTLE_TEAM,
    playerTeam,
  };
}

function loadTextBox(message) {
  return {
    type: actionTypes.LOAD_TEXT_BOX,
    message,
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

function loadPlayerPokemon(playerPokemon) {
  const stats = calculatePokemonStats(playerPokemon);
  return (dispatch) => {
    dispatch(loadAttackBox(playerPokemon));
    dispatch(loadPlayerPokemonSuccess(playerPokemon, stats));
    dispatch(loadEnemy());
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
  moveName) {
  return {
    type: actionTypes.RESOLVE_ATTACK_ENEMY,
    playerPokemon,
    enemyPokemon,
    attackPower,
    moveName,
  };
}
function handleKOEnemy(playerPokemon,
  enemyPokemon,
  attackPower) {
  return {
    type: actionTypes.HANDLE_KO_ENEMY,
    playerPokemon,
    enemyPokemon,
    attackPower,
  };
}

function getUpdatedHPEnemy(playerPokemon, enemyPokemon, attackPower, moveName) {
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
        ),
      )
      : dispatch(handleKOEnemy(updatedPlayerPokemon, enemyPokemon, attackPower));
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

  return (dispatch) => {
    dispatch(getUpdatedHPEnemy(playerPokemon, enemyPokemon, attackPower, moveName));
  };
}

function getTypeModifierEnemy(attackData, playerPokemon, enemyPokemon, moveName) {
  const modifier = calculateTypeModifier(attackData, playerPokemon);
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

function resetClasses() {
  return {
    type: actionTypes.RESET_CLASSES,
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
  loadBattleTeam,
  loadPlayerPokemon,
  loadEnemy,
  playerAttacks,
  randomEnemyAttack,
  getAttackType,
  getAttackPower,
  getTypeModifier,
  loadTextBox,
  loadAttackBox,
  handleAttack,
  resolveAttack,
  handleKO,
  resetClasses,
};
