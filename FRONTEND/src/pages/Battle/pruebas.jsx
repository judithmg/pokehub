/* eslint-disable react/prop-types */
import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  loadBattleTeam,
  loadPlayerPokemon,
  loadEnemy,
  playerAttacks,
  enemyAttacks,
  getPokemonStats,
  getAttackType,
  getAttackPower,
  getTypeModifier,
} from '../../redux/actions/battleActions';

export function BattleComponent({
  actions,
  moves,
  team,
}) {
  return (
    team._id
    && (
    <>

    </>
    )
  );
}

export function mapStateToProps(state) {
  return {
    moves: state.pokedexReducer.moves,
    boxMessages: state.battleReducer.boxMessages,
    attack: state.battleReducer.attack,
    playerTeam: state.battleReducer.playerTeam,
    enemyTeam: state.battleReducer.enemyTeam,
    playerPokemon: state.battleReducer.playerPokemon,
    enemyPokemon: state.battleReducer.enemyPokemon,
  };
}
export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        loadBattleTeam,
        loadPlayerPokemon,
        loadEnemy,
        playerAttacks,
        enemyAttacks,
        getPokemonStats,
        getAttackType,
        getAttackPower,
        getTypeModifier,
      },
      dispatch,
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BattleComponent);
