/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import '../../styles/progress.scss';
import '../../styles/battle.scss';
import '../../styles/animate.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadOneTeam } from '../../redux/actions/teamManagerActions';

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

import BattleTextBox from './BattleTextBox';
import BattlePokemonSelect from './BattlePokemonSelector';
import BattleGround from './BattleGround';
import BattleOver from './BattleOver';

export function BattleComponent({
  actions,
  moves,
  learnsets,
  user,
  teams,
  team,
  playerTeam,
  enemyTeam,
  playerPokemon,
  enemyPokemon,
  playerClass,
  enemyClass,
  battleOver,
}) {
  const { teamId } = useParams();
  useEffect(() => {
    if (teams.length && user.email && !team.pokemons) {
      actions.loadOneTeam(teamId, moves, learnsets);
    }
  }, [teamId, moves.length, learnsets.length, teams.length]);

  useEffect(() => {
    if (team.pokemons) {
      actions.startNewFight(team?.pokemons);
    }
  }, [teamId, team]);

  return (
    (playerTeam
    && team?.pokemons) ? (
      <div>
        <div className="battle__teams" />
        {battleOver ? <BattleOver />
          : playerPokemon.num ? (
            <>
              <div className="battle__container">
                <BattleGround
                  playerPokemon={playerPokemon}
                  enemyPokemon={enemyPokemon}
                  playerClass={playerClass}
                  enemyClass={enemyClass}
                  playerTeam={playerTeam}
                  enemyTeam={enemyTeam}
                />

                <BattleTextBox />
              </div>
            </>
          ) : (
            <BattlePokemonSelect />
          )}
      </div>
      ) : <span>GO TO TEAMS AND SELECT A TEAM</span>
  );
}

export function mapStateToProps(state) {
  return {
    teams: state.teamsReducer.teams,
    learnsets: state.pokedexReducer.learnsets,
    team: state.teamsReducer.team,
    user: state.userReducer.user,
    moves: state.pokedexReducer.moves,
    playerTeam: state.battleReducer.playerTeam,
    enemyTeam: state.battleReducer.enemyTeam,
    playerPokemon: state.battleReducer.playerPokemon,
    enemyPokemon: state.battleReducer.enemyPokemon,
    playerClass: state.battleReducer.playerClass,
    enemyClass: state.battleReducer.enemyClass,
    battleOver: state.battleReducer.battleOver,
  };
}
export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        startNewFight,
        loadPlayerPokemon,
        randomEnemyAttack,
        handleAttack,
        loadAttackBox,
        newEnemyPokemon,
        newPlayerPokemon,
        loadOneTeam,
      },
      dispatch,
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BattleComponent);
