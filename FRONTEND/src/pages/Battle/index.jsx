/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
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

import { getUserInfo } from '../../redux/actions/userActions';
import { useAuth } from '../../context/AuthContext';

import BattleTextBox from './BattleTextBox';
import BattlePokemonSelect from './BattlePokemonSelector';
import BattleGround from './BattleGround';
import BattleOver from './BattleOver';

export function BattleComponent({
  actions,
  teams,
  team,
  user,
  moves,
  playerTeam,
  enemyTeam,
  playerPokemon,
  enemyPokemon,
  playerClass,
  enemyClass,
  battleOver,
}) {
  // load teams if not already on the state
  const { currentUser } = useAuth();
  const useremail = currentUser.email;

  useEffect(() => {
    if (!user.email) {
      actions.getUserInfo(useremail);
    }
  }, [user?.length]);

  useEffect(() => {
    actions.loadTeams(user?._id);
  }, [teams?.length, user?.length, user.email]);
  // on page load, load userteam and show all pokemons from that team

  useEffect(() => {
    if (teams?.length) {
      actions.startNewFight(team?.pokemons);
    }
  }, [teams?.length]);

  return (
    (teams
    && playerTeam
    && moves
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
