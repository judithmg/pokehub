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
} from '../../redux/actions/battleActions';

export function BattleTextAttackBox({
  actions,
  moves,
  playerPokemon,
  attackBox,
  enemyPokemon,
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
              moves,
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
            moves,
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
            moves,
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
            moves,
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
