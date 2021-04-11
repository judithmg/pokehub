/* eslint-disable react/prop-types */
import React from 'react';
import '../../styles/progress.scss';
import '../../styles/battle.scss';
import '../../styles/animate.css';
import { connect } from 'react-redux';

export function BattleTextAttackBox({
  battleOver,
}) {
  return (
    <div className="battle__text">
      <div className="battle__text--inner">
        {battleOver.playerWins
          ? <span>{battleOver.playerWins}</span>
          : <span>{battleOver.enemyWins}</span>}
      </div>
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    battleOver: state.battleReducer.battleOver,
  };
}
export default connect(mapStateToProps)(BattleTextAttackBox);
