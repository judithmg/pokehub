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
  handleAttack,
} from '../../redux/actions/battleActionsPlayer';

export function BattleTextAttackBox({
  actions,
  moves,
  playerPokemon,
  attackBox,
  enemyPokemon,
  enemyTeam,
}) {
  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => {
            actions.handleAttack(
              playerPokemon,
              enemyPokemon,
              moves,
              attackBox?.attackOne?.name,
              enemyTeam.length,
            );
          }}
          className="battle__atack"
        >
          {attackBox?.attackOne?.name}
        </button>
        <button
          type="button"
          onClick={() => actions.handleAttack(
            playerPokemon,
            enemyPokemon,
            moves,
            attackBox?.attackTwo?.name,
            enemyTeam.length,
          )}
          className="battle__atack"
        >
          {attackBox?.attackTwo?.name}
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={() => actions.handleAttack(
            playerPokemon,
            enemyPokemon,
            moves,
            attackBox?.attackThree?.name,
            enemyTeam.length,
          )}
          className="battle__atack"
        >
          {attackBox?.attackThree?.name}
        </button>
        <button
          type="button"
          onClick={() => actions.handleAttack(
            playerPokemon,
            enemyPokemon,
            moves,
            attackBox?.attackFour?.name,
            enemyTeam.length,
          )}
          className="battle__atack"
        >
          {attackBox?.attackFour?.name}
        </button>
      </div>
    </>
  );
}

export function mapStateToProps(state) {
  return {
    moves: state.pokedexReducer.moves,
    playerPokemon: state.battleReducer.playerPokemon,
    enemyPokemon: state.battleReducer.enemyPokemon,
    attackBox: state.battleReducer.attackBox,
    enemyTeam: state.battleReducer.enemyTeam,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        handleAttack,
      },
      dispatch,
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BattleTextAttackBox);
