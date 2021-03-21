/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import './styles.scss';
import './mine.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  loadBattleTeam,
  loadPlayerPokemon,
  loadEnemy,
  playerAttacks,
  enemyAttacks,
  getAttackType,
  getAttackPower,
  getTypeModifier,
  handleAttack,
  loadTextBox,
} from '../../redux/actions/battleActions';

import { pokemonSprites } from '../../constants/images';

export function BattleComponent({
  teams,
  actions,
  moves,
  playerTeam,
  playerPokemon,
  boxMessages,
  attackBox,
  enemyPokemon,
}) {
  useEffect(() => {
    if (teams?.length) {
      actions.loadBattleTeam(teams[0].pokemons);
    }
  }, [teams?.length]);

  useEffect(() => {
    if (playerTeam?.length) {
      actions.loadTextBox('hello');
    }
  }, [playerTeam?.length]);

  useEffect(() => {
    if (playerTeam?.length) {
      actions.loadTextBox('hello');
    }
  }, [playerTeam?.length]);

  useEffect(() => {
    actions.loadEnemy();
  }, [enemyPokemon?.battleStats]);

  return (
    teams?.length && playerTeam.length
    && moves?.length && teams[0]?.pokemons && (
      <div className="nope">
        {playerTeam && playerTeam.map((poke, index) => (
          poke?.num
                  && (
                  <img
                    alt="pokemon ico"
                    src={`${pokemonSprites.httpIcon}${poke?.num}.png`}
                    key={Math.random()}
                    onClick={() => actions.loadPlayerPokemon(playerTeam[index])}
                  />
                  )
        ))}
        {
          playerPokemon.num && (
            <>
              <div>
                ready to battle with
                {' '}
                {playerPokemon.name}
                !
              </div>
              <div id="battle-container" className="px-2 mx-auto">
                <div>
                  <div id="enemy-container">
                    <div id="enemy-info-box">
                      <div className="d-flex justify-content-between align-items-center">
                        <h2 id="enemy-name">Gengar</h2>
                        <h5 className="mr-1 d-none d-sm-block">Lv43</h5>
                      </div>
                      <div
                        className="d-flex justify-content-between align-items-center ml-3 mr-1"
                      >
                        <h5>HP</h5>
                        <div className="progress ml-1 both-progress">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: `${100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mr-sm-4 avatar-box">
                      <div className="animated zoomIn slow">
                        <img className="avatar mr-3 mt-4" src="./img/enemy.png" alt="" />
                      </div>
                      <div className="oval" />
                    </div>
                  </div>
                </div>
                <div>
                  <div id="hero-container">
                    <div className="avatar-box ml-sm-5">
                      <div className="animated fadeInUp">
                        <img className="avatar mx-2" src="./img/hero.png" alt="" />
                      </div>
                      <div className="oval" />
                    </div>
                    <div id="hero-info-box">
                      <div className="d-flex justify-content-between align-items-center">
                        <h2 id="hero-name">Blastoise</h2>
                        <h5 className="mr-1 d-none d-sm-block">Lv45</h5>
                      </div>
                      <div
                        className="d-flex justify-content-between align-items-center ml-3 mr-1"
                      >
                        <h5>HP</h5>
                        <div className="progress ml-1 both-progress">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: `${100}%` }}
                          />
                        </div>
                      </div>
                      <div id="hero-hp" className="d-flex">
                        <div className="ml-auto mr-3"><h5>200/200</h5></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="text-box">
                  <div id="text-box-content">
                    <div className="attack-container">
                      <div><span className="move-pointer">Bite</span></div>
                    </div>
                    <div className="attack-container">
                      <div><span className="move-pointer">Surf</span></div>
                    </div>
                    <div className="attack-container">
                      <div><span className="move-pointer">Water Gun</span></div>
                    </div>
                    <div className="attack-container">
                      <div><span className="move-pointer">Hydro Pump</span></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="battle__container">

                <div className="battle__enemy">
                  <img
                    alt="pokemon ico"
                    src={`${pokemonSprites.httpFrontSprite}${enemyPokemon?.num}.png`}
                    key={Math.random()}
                  />
                  {`HP: ${enemyPokemon?.battleStats?.hp}`}
                  {console.log(enemyPokemon)}
                  {`HP: ${enemyPokemon.battleStats.hp}`}
                </div>

                <div className="battle__player">
                  <img
                    alt="pokemon ico"
                    src={`${pokemonSprites.httpFrontSprite}/back/${playerPokemon.num}.png`}
                    key={Math.random()}
                  />
                </div>

                <div className="battle__text">
                  {attackBox ? (
                    <>
                      <span
                        onClick={() => {
                          actions.handleAttack(playerPokemon,
                            enemyPokemon,
                            moves,
                            attackBox?.attackOne?.name, moves);
                          actions.loadEnemy();
                        }}
                        className="battle__atack"
                      >
                        {attackBox?.attackOne?.name}
                      </span>

                      <span
                        onClick={() => actions.handleAttack(playerPokemon,
                          enemyPokemon,
                          moves,
                          attackBox?.attackTwo?.name, moves)}
                        className="battle__atack"
                      >
                        {attackBox?.attackTwo?.name}
                      </span>

                      <span
                        onClick={() => actions.handleAttack(playerPokemon,
                          enemyPokemon,
                          moves,
                          attackBox?.attackThree?.name, moves)}
                        className="battle__atack"
                      >
                        {attackBox?.attackThree?.name}
                      </span>

                      <span
                        onClick={() => actions.handleAttack(playerPokemon,
                          enemyPokemon,
                          moves,
                          attackBox?.attackFour?.name, moves)}
                        className="battle__atack"
                      >
                        {attackBox?.attackFour?.name}
                      </span>
                    </>
                  ) : boxMessages}
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
    teams: state.teamsReducer.teams,
    moves: state.pokedexReducer.moves,
    boxMessages: state.battleReducer.boxMessages,
    attack: state.battleReducer.attack,
    playerTeam: state.battleReducer.playerTeam,
    enemyTeam: state.battleReducer.enemyTeam,
    playerPokemon: state.battleReducer.playerPokemon,
    enemyPokemon: state.battleReducer.enemyPokemon,
    attackBox: state.battleReducer.attackBox,
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
        getAttackType,
        getAttackPower,
        getTypeModifier,
        loadTextBox,
        handleAttack,
      },
      dispatch,
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BattleComponent);
