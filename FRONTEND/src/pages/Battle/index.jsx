/* eslint-disable no-nested-ternary */
/* eslint-disable no-mixed-operators */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import './styles.scss';
import './mine.scss';
import '../../styles/animate.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  loadBattleTeam,
  loadPlayerPokemon,
  randomEnemyAttack,
  loadTextBox,
  handleAttack,
  loadAttackBox,

} from '../../redux/actions/battleActions';

import { loadTeams } from '../../redux/actions/teamManagerActions';
import { getUserInfo } from '../../redux/actions/userActions';
import { useAuth } from '../../context/AuthContext';

import { pokemonSprites } from '../../constants/images';

export function BattleComponent({
  teams,
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
      actions.loadBattleTeam(teams[1].pokemons);
    }
  }, [teams?.length]);

  useEffect(() => {
    if (playerTeam?.length) {
      actions.loadTextBox('ENEMY ATTACKS');
    }
  }, [playerTeam?.length]);

  return (
    teams?.length && playerTeam.length
    && moves?.length && teams[1]?.pokemons && (
      <div className="nope">
        <div className="battle__teams">

          {playerTeam && playerTeam.map((poke, index) => (
            poke?.num
          && (
            <div className="battle__selector" key={Math.random()} onClick={() => actions.loadPlayerPokemon(playerTeam[index])}>
              {/* on click, choose that pokemon and get it ready to battle
              this initiates the battle */}
              <img
                alt="pokemon ico"
                src={`${pokemonSprites.httpIcon}${poke?.num}.png`}
              />
            </div>
          )
          ))}
        </div>
        {
          playerPokemon.num && (
            <>
              <div>
                ready to battle with
                {' '}
                {playerPokemon.name}
                !
              </div>

              <div className="battle__container">
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
                      <span onClick={() => actions.randomEnemyAttack(playerPokemon,
                        enemyPokemon,
                        moves)}
                      >
                        {playerAttackMsg}
                      </span>
                    ) : ((
                      <span onClick={() => actions.loadAttackBox(playerPokemon)}>
                        {enemyAttackMsg}
                      </span>
                    ))}

                  </div>

                </div>
              </div>
            </>
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
    moves: state.pokedexReducer.moves,
    boxMessages: state.battleReducer.boxMessages,
    attack: state.battleReducer.attack,
    playerTeam: state.battleReducer.playerTeam,
    enemyTeam: state.battleReducer.enemyTeam,
    playerPokemon: state.battleReducer.playerPokemon,
    enemyPokemon: state.battleReducer.enemyPokemon,
    attackBox: state.battleReducer.attackBox,
    playerClass: state.battleReducer.playerClass,
    playerAttackMsg: state.battleReducer.playerAttackMsg,
    enemyAttackMsg: state.battleReducer.enemyAttackMsg,
  };
}
export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        loadBattleTeam,
        loadPlayerPokemon,
        loadTextBox,
        randomEnemyAttack,
        loadTeams,
        getUserInfo,
        handleAttack,
        loadAttackBox,
      },
      dispatch,
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BattleComponent);
