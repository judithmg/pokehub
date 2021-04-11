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
  loadPlayerPokemon,
} from '../../redux/actions/battleActions';

import { pokemonSprites } from '../../constants/images';

export function BattlePokemonSelector({
  actions,
  playerTeam,
  enemyTeam,
}) {
  return (
    (
      <div className="battle__selector-container">
        <div className="battle__selector">
          {playerTeam.length && enemyTeam.length ? (
            playerTeam.map(
              (poke, index) => poke?.num && (
              <div
                className="battle__selector-pokes"
                key={Math.random()}
                onClick={() => actions.loadPlayerPokemon(playerTeam[index])}
              >
                {/* on click, choose that pokemon and get it ready to battle
              This initiates the battle!! */}
                <img
                  alt="pokemon ico"
                  src={`${pokemonSprites.httpIcon}${poke?.num}.png`}
                />
              </div>
              ),
            )
          ) : (
            <span>Battle is over!!</span>
          )}
        </div>
        <div className="battle__selector-text">
          <div className="battle__selector-text--inner">
            {playerTeam.length && enemyTeam.length
              ? <span>Select a Pokemon</span>
              : <span>Good job!</span>}

          </div>
        </div>
      </div>
    )
  );
}

export function mapStateToProps(state) {
  return {
    playerTeam: state.battleReducer.playerTeam,
    enemyTeam: state.battleReducer.enemyTeam,
    user: state.userReducer.user,
    teams: state.teamsReducer.teams,
    team: state.teamsReducer.team,
  };
}
export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        loadPlayerPokemon,
      },
      dispatch,
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BattlePokemonSelector);
