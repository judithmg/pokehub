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
import BattlePokemonSelector from './BattlePokemonSelector';
import BattleGround from './BattleGround';

export function BattleComponent({
  actions,
  teams,
  team,
  user,
  moves,
  playerTeam,
  playerPokemon,
  enemyPokemon,
  playerClass,
  enemyClass,
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
    teams?.length
    && playerTeam.length
    && moves?.length
    && team?.pokemons && (
      <div>
        <div className="battle__teams" />
        {playerPokemon.num ? (
          <>
            <div className="battle__container">
              <BattleGround
                playerPokemon={playerPokemon}
                enemyPokemon={enemyPokemon}
                playerClass={playerClass}
                enemyClass={enemyClass}
              />

              <BattleTextBox />
            </div>
          </>
        ) : (
          <BattlePokemonSelector />
        )}
      </div>
    )
  );
}

export function mapStateToProps(state) {
  return {
    teams: state.teamsReducer.teams,
    team: state.teamsReducer.team,
    user: state.userReducer.user,
    moves: state.pokedexReducer.moves,
    playerTeam: state.battleReducer.playerTeam,
    playerPokemon: state.battleReducer.playerPokemon,
    enemyPokemon: state.battleReducer.enemyPokemon,
    playerClass: state.battleReducer.playerClass,
    enemyClass: state.battleReducer.enemyClass,
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
