import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import * as auth from '../context/AuthContext';

import configureStore from '../redux/store/configureStore';

import { BattleComponent, mapStateToProps, mapDispatchToProps } from '../pages/Battle';

describe('Given a Header component', () => {
  const teams = [{}, { pokemons: [] }];
  const actions = {
    startNewFight: jest.fn(),
    loadPlayerPokemon: jest.fn(),
    randomEnemyAttack: jest.fn(),
    loadTeams: jest.fn(),
    getUserInfo: jest.fn(),
    handleAttack: jest.fn(),
    loadAttackBox: jest.fn(),
    newEnemyPokemon: jest.fn(),
    newPlayerPokemon: jest.fn(),
  };
  const user = { email: '', _id: '' };
  const moves = [{ name: '' }, {}];
  const playerTeam = [{}, {}];
  let playerPokemon = {
    battleStats: {
      hp: 55,
      maxhp: 100,
      atk: 90,
      def: 80,
      spa: 50,
      spd: 105,
      spe: 96,
    },
    types: [
      'Ghost',
      'Fairy',
    ],
    _id: '604909308168be57082e41cf',
    num: 778,
    name: 'Mimikyu',
    id: 1,
    moveset: [
      {
        _id: '6057b8c6aa531b2e783c54da',
        name: 'Swords Dance',
      },
      {
        _id: '6057b8c6aa531b2e783c54db',
        name: 'Play Rough',
      },
      {
        _id: '6057b8c6aa531b2e783c54dc',
        name: 'Shadow Sneak',
      },
      {
        _id: '6057b8c6aa531b2e783c54dd',
        name: 'Shadow Claw',
      },
    ],
  };
  let playerAttackMsg = '';
  let attackBox = [{}];
  let enemyAttackMsg = '';
  const enemyPokemon = { name: 'Charmander', level: 100 };
  const playerClass = '';
  const enemyClass = '';
  const enemyDiesMsg = '';
  const playerDiesMsg = '';
  const blockClicks = '';
  let container;
  let fn;
  let store;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    jest.spyOn(auth, 'useAuth').mockImplementation(() => ({ currentUser: jest.fn().mockResolvedValueOnce({}) }));
    store = configureStore();
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  describe('When it is invoked', () => {
    test('Then there should be a battle__container that contains the battle', () => {
      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <BattleComponent
                teams={teams}
                actions={actions}
                user={user}
                moves={moves}
                playerTeam={playerTeam}
                playerPokemon={playerPokemon}
                playerAttackMsg={playerAttackMsg}
                attackBox={attackBox}
                enemyAttackMsg={enemyAttackMsg}
                enemyPokemon={enemyPokemon}
                playerClass={playerClass}
                enemyClass={enemyClass}
                enemyDiesMsg={enemyDiesMsg}
                playerDiesMsg={playerDiesMsg}
                blockClicks={blockClicks}
              />
            </BrowserRouter>
          </Provider>, container,
        );
      });
      const battle = document.querySelector('.battle__container');

      expect(battle).toBeTruthy();
    });
    test('Then there should be a div with the Pokemon lvl', () => {
      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <BattleComponent
                teams={teams}
                actions={actions}
                user={user}
                moves={moves}
                playerTeam={playerTeam}
                playerPokemon={playerPokemon}
                playerAttackMsg={playerAttackMsg}
                attackBox={attackBox}
                enemyAttackMsg={enemyAttackMsg}
                enemyPokemon={enemyPokemon}
                playerClass={playerClass}
                enemyClass={enemyClass}
                enemyDiesMsg={enemyDiesMsg}
                playerDiesMsg={playerDiesMsg}
                blockClicks={blockClicks}
              />
            </BrowserRouter>
          </Provider>, container,
        );
      });
      const { innerHTML } = document.querySelector('.enemy__data-lvl');

      expect(innerHTML).toBe('Lv100');
    });
    test('Then there should be a button that performs an attack', () => {
      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <BattleComponent
                teams={teams}
                actions={actions}
                user={user}
                moves={moves}
                playerTeam={playerTeam}
                playerPokemon={playerPokemon}
                playerAttackMsg={playerAttackMsg}
                attackBox={attackBox}
                enemyAttackMsg={enemyAttackMsg}
                enemyPokemon={enemyPokemon}
                playerClass={playerClass}
                enemyClass={enemyClass}
                enemyDiesMsg={enemyDiesMsg}
                playerDiesMsg={playerDiesMsg}
                blockClicks={blockClicks}
              />
            </BrowserRouter>
          </Provider>, container,
        );
      });
      const btn = document.querySelectorAll('.battle__atack')[0];
      fn = jest.spyOn(actions, 'handleAttack');
      act(() => {
        fireEvent.click(btn);
      });
      expect(fn).toHaveBeenCalled();
    });
    test('Then there should be a button that performs an attack', () => {
      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <BattleComponent
                teams={teams}
                actions={actions}
                user={user}
                moves={moves}
                playerTeam={playerTeam}
                playerPokemon={playerPokemon}
                playerAttackMsg={playerAttackMsg}
                attackBox={attackBox}
                enemyAttackMsg={enemyAttackMsg}
                enemyPokemon={enemyPokemon}
                playerClass={playerClass}
                enemyClass={enemyClass}
                enemyDiesMsg={enemyDiesMsg}
                playerDiesMsg={playerDiesMsg}
                blockClicks={blockClicks}
              />
            </BrowserRouter>
          </Provider>, container,
        );
      });
      const btn = document.querySelectorAll('.battle__atack')[1];
      fn = jest.spyOn(actions, 'handleAttack');
      act(() => {
        fireEvent.click(btn);
      });
      expect(fn).toHaveBeenCalled();
    });
    test('Then there should be a button that performs an attack', () => {
      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <BattleComponent
                teams={teams}
                actions={actions}
                user={user}
                moves={moves}
                playerTeam={playerTeam}
                playerPokemon={playerPokemon}
                playerAttackMsg={playerAttackMsg}
                attackBox={attackBox}
                enemyAttackMsg={enemyAttackMsg}
                enemyPokemon={enemyPokemon}
                playerClass={playerClass}
                enemyClass={enemyClass}
                enemyDiesMsg={enemyDiesMsg}
                playerDiesMsg={playerDiesMsg}
                blockClicks={blockClicks}
              />
            </BrowserRouter>
          </Provider>, container,
        );
      });
      const btn = document.querySelectorAll('.battle__atack')[2];
      fn = jest.spyOn(actions, 'handleAttack');
      act(() => {
        fireEvent.click(btn);
      });
      expect(fn).toHaveBeenCalled();
    });
    test('Then there should be a button that performs an attack', () => {
      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <BattleComponent
                teams={teams}
                actions={actions}
                user={user}
                moves={moves}
                playerTeam={playerTeam}
                playerPokemon={playerPokemon}
                playerAttackMsg={playerAttackMsg}
                attackBox={attackBox}
                enemyAttackMsg={enemyAttackMsg}
                enemyPokemon={enemyPokemon}
                playerClass={playerClass}
                enemyClass={enemyClass}
                enemyDiesMsg={enemyDiesMsg}
                playerDiesMsg={playerDiesMsg}
                blockClicks={blockClicks}
              />
            </BrowserRouter>
          </Provider>, container,
        );
      });
      const btn = document.querySelectorAll('.battle__atack')[3];
      fn = jest.spyOn(actions, 'handleAttack');
      act(() => {
        fireEvent.click(btn);
      });
      expect(fn).toHaveBeenCalled();
    });
    test('Then there should be a svg-msg when there is no attack box', () => {
      attackBox = '';
      playerAttackMsg = 'message';
      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <BattleComponent
                teams={teams}
                actions={actions}
                user={user}
                moves={moves}
                playerTeam={playerTeam}
                playerPokemon={playerPokemon}
                playerAttackMsg={playerAttackMsg}
                attackBox={attackBox}
                enemyAttackMsg={enemyAttackMsg}
                enemyPokemon={enemyPokemon}
                playerClass={playerClass}
                enemyClass={enemyClass}
                enemyDiesMsg={enemyDiesMsg}
                playerDiesMsg={playerDiesMsg}
                blockClicks={blockClicks}
              />
            </BrowserRouter>
          </Provider>, container,
        );
      });
      const svg = document.querySelector('.svg-msg-box');

      expect(svg).toBeTruthy();
    });
    test('Then there should be a svg-msg when there is no attack box', () => {
      attackBox = '';
      playerAttackMsg = '';
      enemyAttackMsg = 'message';
      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <BattleComponent
                teams={teams}
                actions={actions}
                user={user}
                moves={moves}
                playerTeam={playerTeam}
                playerPokemon={playerPokemon}
                playerAttackMsg={playerAttackMsg}
                attackBox={attackBox}
                enemyAttackMsg={enemyAttackMsg}
                enemyPokemon={enemyPokemon}
                playerClass={playerClass}
                enemyClass={enemyClass}
                enemyDiesMsg={enemyDiesMsg}
                playerDiesMsg={playerDiesMsg}
                blockClicks={blockClicks}
              />
            </BrowserRouter>
          </Provider>, container,
        );
      });
      const svg = document.querySelectorAll('.svg-msg-box');
      expect(svg.length).toBe(1);
    });
  });
  test('Then there should be a battle selector when there is no playerPokemon on the state', () => {
    playerPokemon = {};
    act(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <BattleComponent
              teams={teams}
              actions={actions}
              user={user}
              moves={moves}
              playerTeam={playerTeam}
              playerPokemon={playerPokemon}
              playerAttackMsg={playerAttackMsg}
              attackBox={attackBox}
              enemyAttackMsg={enemyAttackMsg}
              enemyPokemon={enemyPokemon}
              playerClass={playerClass}
              enemyClass={enemyClass}
              enemyDiesMsg={enemyDiesMsg}
              playerDiesMsg={playerDiesMsg}
              blockClicks={blockClicks}
            />
          </BrowserRouter>
        </Provider>, container,
      );
    });
    const selector = document.querySelector('.battle__selector-container');
    expect(selector).toBeTruthy();
  });
});

describe('Given a mapStateToProps', () => {
  test('it should return a state', () => {
    const state = {
      battleReducer: {
        boxMessages: {},
        attack: {},
        playerTeam: {},
        enemyTeam: {},
        playerPokemon: {},
        enemyPokemon: {},
        attackBox: {},
        playerClass: {},
        enemyClass: {},
        playerAttackMsg: {},
        enemyAttackMsg: {},
        enemyDiesMsg: {},
        playerDiesMsg: {},
        blockClicks: {},
      },
      userReducer: { user: {} },
      teamsReducer: { teams: {} },
      pokedexReducer: { moves: {} },
    };
    const result = mapStateToProps(state);
    expect(result).toEqual({
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
      enemyClass: state.battleReducer.enemyClass,
      playerAttackMsg: state.battleReducer.playerAttackMsg,
      enemyAttackMsg: state.battleReducer.enemyAttackMsg,
      enemyDiesMsg: state.battleReducer.enemyDiesMsg,
      playerDiesMsg: state.battleReducer.playerDiesMsg,
      blockClicks: state.battleReducer.blockClicks,
    });
  });
});
describe('Given a mapDispatchToProps', () => {
  test('it should return an object', () => {
    const dispatch = jest.fn();
    const result = mapDispatchToProps(dispatch);
    expect(result.actions.getUserInfo).toBeTruthy();
  });
});
