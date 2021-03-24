/* eslint-disable */
import React, { useEffect } from 'react';
import '../../styles/progress.scss';
import '../../styles/battle.scss';
import '../../styles/animate.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import useModal from '../../hooks/useModal';
import Modal from './ModalPokemon';

import {
  startNewFight,
  loadPlayerPokemon,
  randomEnemyAttack,
  handleAttack,
  loadAttackBox,
  newPlayerPokemon,
  newEnemyPokemon,
} from '../../redux/actions/battleActions';
import { Pokeball } from '../Icons';

import { loadTeams } from '../../redux/actions/teamManagerActions';
import { getUserInfo } from '../../redux/actions/userActions';
import { useAuth } from '../../context/AuthContext';

import { pokemonSprites } from '../../constants/images';

export function BattleComponent({
  teams,
  team,
  actions,
  user,
  moves,
  playerTeam,
  playerPokemon,
  playerAttackMsg,
  attackBox,
  enemyAttackMsg,
  enemyPokemon,
  playerClass,
  enemyClass,
  enemyDiesMsg,
  playerDiesMsg,
  blockClicks,
}) {
// load teams if not already on the state
  const { currentUser } = useAuth();
  const useremail = currentUser.email;
  const { isShowing, toggle } = useModal();

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
    teams?.length && playerTeam.length
    && moves?.length && team?.pokemons && (
      <div>
        <div className="battle__teams" />
        {
          playerPokemon.num ? (
            <>
              <div
                className="battle__container"
              >
                <div className="battle__background">

                  <div className="battle__enemy">
                    <div className="enemy__data">
                      <div className="enemy__text">
                        <p className="enemy__data-name">{enemyPokemon.name.toUpperCase()}</p>
                        <p className="enemy__data-lvl">
                          Lv
                          {enemyPokemon.level}
                        </p>
                      </div>
                      <div className="enemy__data-stat">
                        <p className="enemy__data-hp">HP</p>
                        <div className="progress ml-1 both-progress">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: `${enemyPokemon?.battleStats?.hp / enemyPokemon?.battleStats?.maxhp * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="enemy__avatar">
                      <div className="enemy__avatar">
                        <img
                          alt="pokemon ico"
                          src={`${pokemonSprites.httpFrontSprite}${enemyPokemon?.num}.png`}
                          key={Math.random()}
                          className={enemyClass}
                          onClick={toggle}
                        />
                        <Modal
                          pokemonBattle={enemyPokemon}
                          isShowing={isShowing}
                          hide={toggle}
                          pokemonPlayer={playerPokemon}

                        />
                      </div>
                    </div>

                  </div>

                  <div className="battle__player">
                    <div className="player__avatar">
                      <img
                        alt="pokemon ico"
                        src={`${pokemonSprites.httpFrontSprite}/back/${playerPokemon.num}.png`}
                        key={Math.random()}
                        className={playerClass}
                        onClick={toggle}
                      />
                      <Modal
                        pokemonBattle={enemyPokemon}
                        isShowing={isShowing}
                        hide={toggle}
                        pokemonPlayer={playerPokemon}
                      />
                    </div>

                    <div className="player__data">
                      <div className="player__text">

                        <p className="player__data-name">{playerPokemon.name.toUpperCase()}</p>
                        <p className="player__data-lvl">
                          Lv
                          {playerPokemon.level}
                        </p>
                      </div>
                      <div className="player__data-stat">
                        HP
                        <div className="progress ml-1 both-progress">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: `${playerPokemon?.battleStats?.hp / playerPokemon?.battleStats?.maxhp * 100}%` }}
                          />
                        </div>
                      </div>
                      <p className="player__data-hp">
                        {`${playerPokemon.battleStats.hp} / ${playerPokemon.battleStats.maxhp}`}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="battle__text">
                  <div className="battle__text--inner">
                    {attackBox ? (
                      <>
                        <div>
                          <button
                            type="button"
                            onClick={() => {
                              actions.handleAttack(playerPokemon,
                                enemyPokemon,
                                moves,
                                attackBox?.attackOne?.name, moves);
                            }}
                            className="battle__atack"
                          >
                            {attackBox?.attackOne?.name}
                          </button>
                          <button
                            type="button"
                            onClick={() => actions.handleAttack(playerPokemon,
                              enemyPokemon,
                              moves,
                              attackBox?.attackTwo?.name, moves)}
                            className="battle__atack"
                          >
                            {attackBox?.attackTwo?.name}
                          </button>
                        </div>
                        <div>
                          <button
                            type="button"
                            onClick={() => actions.handleAttack(playerPokemon,
                              enemyPokemon,
                              moves,
                              attackBox?.attackThree?.name, moves)}
                            className="battle__atack"
                          >
                            {attackBox?.attackThree?.name}
                          </button>
                          <button
                            type="button"
                            onClick={() => actions.handleAttack(playerPokemon,
                              enemyPokemon,
                              moves,
                              attackBox?.attackFour?.name, moves)}
                            className="battle__atack"
                          >
                            {attackBox?.attackFour?.name}
                          </button>
                        </div>
                      </>
                    ) : playerAttackMsg ? (
                      <span
                        onClick={() => actions.randomEnemyAttack(playerPokemon,
                          enemyPokemon,
                          moves)}
                      >
                        {playerAttackMsg}
                        <Pokeball className="svg-msg-box animate__flash animate__animated animate__infinite infinite animate__fast" />
                      </span>
                    ) : enemyAttackMsg ? ((
                      <span
                        onClick={() => actions.loadAttackBox(playerPokemon)}
                      >
                        {enemyAttackMsg}
                        <Pokeball className="svg-msg-box animate__flash animate__animated animate__infinite infinite animate__fast" />
                      </span>
                    )) : enemyDiesMsg ? (
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
              </div>
            </>
          ) : (
            <div className="battle__selector-container">
              <div className="battle__selector">
                { playerTeam.length ? playerTeam.map((poke, index) => (
                  poke?.num
          && (
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
          )
                )) : (<span>Battle is over!!</span>)}
              </div>
              <div className="battle__selector-text">
                <div className="battle__selector-text--inner">
                  <span>Select a Pokemon</span>
                </div>
              </div>
            </div>
          )
        }
      </div>
    )

  );
}

export function mapStateToProps(state) {
  return {
    user: state.userReducer.user,
    teams: state.teamsReducer.teams,
    team: state.teamsReducer.team,
    moves: state.pokedexReducer.moves,
    boxMessages: state.battleReducer.boxMessages,
    attack: state.battleReducer.attack,
    playerTeam: state.battleReducer.playerTeam,
    enemyTeam: state.battleReducer.enemyTeam,
    playerPokemon: state.battleReducer.playerPokemon,
    enemyPokemon: state.battleReducer.enemyPokemon,
    attackBox: state.battleReducer.attackBox,
    playerClass: state.battleReducer.playerClass,
    enemyClass: state.battleReducer.enemyClass,
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
