/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React from 'react';
import '../../styles/progress.scss';
import '../../styles/battle.scss';
import '../../styles/animate.css';
import Modal from './ModalPokemon';
import useModal from '../../hooks/useModal';

import { pokemonSprites } from '../../constants/images';

export default function BattleGround({
  playerPokemon,
  enemyPokemon,
  playerClass,
  enemyClass,
}) {
  const { isShowing, toggle } = useModal();

  return (
    <div className="battle__background">
      <div className="battle__enemy">
        <div className="enemy__data">
          <div className="enemy__text">
            <p className="enemy__data-name">
              {enemyPokemon.name.toUpperCase()}
            </p>
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
                style={{
                  width: `${
                    (enemyPokemon?.battleStats?.hp
                                / enemyPokemon?.battleStats?.maxhp)
                              * 100
                  }%`,
                }}
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
            <p className="player__data-name">
              {playerPokemon.name.toUpperCase()}
            </p>
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
                style={{
                  width: `${
                    (playerPokemon?.battleStats?.hp
                                / playerPokemon?.battleStats?.maxhp)
                              * 100
                  }%`,
                }}
              />
            </div>
          </div>
          <p className="player__data-hp">
            {`${playerPokemon.battleStats.hp} / ${playerPokemon.battleStats.maxhp}`}
          </p>
        </div>
      </div>
    </div>

  );
}
