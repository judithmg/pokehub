/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import '../../styles/progress.scss';
import '../../styles/battle.scss';
import '../../styles/animate.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  loadAttackBox,
} from '../../redux/actions/battleActions';

import {
  randomEnemyAttack,
  newEnemyPokemon,
} from '../../redux/actions/battleActionsEnemy';

import {
  newPlayerPokemon,
} from '../../redux/actions/battleActionsPlayer';

import { Pokeball } from '../Icons';
import BattleTextAttack from './BattleTextAttackBox';
import BattleOver from './BattleOver';

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
  playerTeam,
  battleOver,
}) {
  return (
    battleOver ? <BattleOver />
      : (
        <div className="battle__text">
          <div className="battle__text--inner">
            {attackBox
              ? <BattleTextAttack /> : playerAttackMsg ? (
                <span
                  onClick={() => actions.randomEnemyAttack(
                    playerPokemon,
                    enemyPokemon,
                    moves,
                    playerTeam.length,
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
              ) : playerDiesMsg ? (
                <span
                  className={blockClicks}
                  onClick={() => actions.newPlayerPokemon()}
                >
                  {playerDiesMsg}
                </span>
              ) : ('')}
          </div>
        </div>
      )

  );
}

export function mapStateToProps(state) {
  return {
    moves: state.pokedexReducer.moves,
    playerPokemon: state.battleReducer.playerPokemon,
    playerTeam: state.battleReducer.playerTeam,
    enemyPokemon: state.battleReducer.enemyPokemon,
    attackBox: state.battleReducer.attackBox,
    playerAttackMsg: state.battleReducer.playerAttackMsg,
    enemyAttackMsg: state.battleReducer.enemyAttackMsg,
    enemyDiesMsg: state.battleReducer.enemyDiesMsg,
    playerDiesMsg: state.battleReducer.playerDiesMsg,
    blockClicks: state.battleReducer.blockClicks,
    battleOver: state.battleReducer.battleOver,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        randomEnemyAttack,
        loadAttackBox,
        newEnemyPokemon,
        newPlayerPokemon,
      },
      dispatch,
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BattleComponent);
