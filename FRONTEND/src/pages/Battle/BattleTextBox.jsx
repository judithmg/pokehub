/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import '../../styles/progress.scss';
import '../../styles/battle.scss';
import '../../styles/animate.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadTeams } from '../../redux/actions/teamManagerActions';

import {
  startNewFight,
  loadPlayerPokemon,
  loadAttackBox,
} from '../../redux/actions/battleActions';

import {
  randomEnemyAttack,
  newEnemyPokemon,
} from '../../redux/actions/battleActionsEnemy';

import {
  newPlayerPokemon,
  handleAttack,
} from '../../redux/actions/battleActionsPlayer';

import { Pokeball } from '../Icons';
import { getUserInfo } from '../../redux/actions/userActions';
import BattleTextAttack from './BattleTextAttackBox';

export function BattleComponent({
  actions,
  moves,
  playerPokemon,
  playerAttackMsg,
  attackBox,
  enemyAttackMsg,
  enemyPokemon,
  enemyDiesMsg,
  playerDiesMsg,
  blockClicks,
}) {
  return (

    <div className="battle__text">
      <div className="battle__text--inner">
        {attackBox
          ? <BattleTextAttack /> : playerAttackMsg ? (
            <span
              onClick={() => actions.randomEnemyAttack(
                playerPokemon,
                enemyPokemon,
                moves,
              )}
            >
              {playerAttackMsg}
              <Pokeball className="svg-msg-box animate__flash animate__animated animate__infinite infinite animate__fast" />
            </span>
          ) : enemyAttackMsg ? (
            <span onClick={() => actions.loadAttackBox(playerPokemon)}>
              {enemyAttackMsg}
              <Pokeball className="svg-msg-box animate__flash animate__animated animate__infinite infinite animate__fast" />
            </span>
          ) : enemyDiesMsg ? (
            <span
              className={blockClicks}
              onClick={() => actions.newEnemyPokemon()}
            >
              {enemyDiesMsg}
            </span>
          ) : (
            <span
              className={blockClicks}
              onClick={() => actions.newPlayerPokemon()}
            >
              {playerDiesMsg}
            </span>
          )}
      </div>
    </div>

  );
}

export function mapStateToProps(state) {
  return {
    moves: state.pokedexReducer.moves,
    playerPokemon: state.battleReducer.playerPokemon,
    enemyPokemon: state.battleReducer.enemyPokemon,
    attackBox: state.battleReducer.attackBox,
    playerAttackMsg: state.battleReducer.playerAttackMsg,
    enemyAttackMsg: state.battleReducer.enemyAttackMsg,
    enemyDiesMsg: state.battleReducer.enemyDiesMsg,
    playerDiesMsg: state.battleReducer.playerDiesMsg,
    blockClicks: state.battleReducer.blockClicks,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        startNewFight,
        loadPlayerPokemon,
        randomEnemyAttack,
        loadTeams,
        getUserInfo,
        handleAttack,
        loadAttackBox,
        newEnemyPokemon,
        newPlayerPokemon,
      },
      dispatch,
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BattleComponent);
