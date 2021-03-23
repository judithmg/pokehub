import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import * as auth from '../context/AuthContext';

import configureStore from '../redux/store/configureStore';

import {
  TeamDetailComponent,
  mapStateToProps,
  mapDispatchToProps,
} from '../pages/TeamDetail/index';

describe('Given a TeamManagerComponent component', () => {
  let container = null;
  let store;
  const teams = [{}];
  const team = {
    pokemons: [{
      num: 25,
      learnset: [[{ 0: 'water' }]],
      name: 'Pikachu',
      types: [
        'Electric',
      ],
      moveset: [{ name: 'water' }, { name: 'water' }, { name: 'water' }, { name: 'water' }],
      baseStats: {
        hp: 35,
        atk: 55,
        def: 40,
        spa: 50,
        spd: 50,
        spe: 90,
      },
      abilities: ['Static'],
      heightm: 0.4,
      weightkg: 6,
      color: 'Yellow',
      prevo: 'Pichu',
      evoType: 'levelFriendship',
      evos: [
        'Raichu',
      ],
    }],
  };
  let moves = [{}];
  let user = { email: '@' };
  let learnsets = [{}];
  const actions = {
    loadOneTeam: jest.fn(),
    loadMoves: jest.fn(),
    loadLearnsets: jest.fn(),
    modifyTeam: jest.fn(),
    getUserInfo: jest.fn(),
  };

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);

    store = configureStore();
    jest.spyOn(auth, 'useAuth').mockImplementation(() => ({ currentUser: jest.fn().mockResolvedValueOnce({}) }));
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  describe('When it is invoked', () => {
    test('Then there should be a section', () => {
      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <TeamDetailComponent
                team={team}
                teams={teams}
                actions={actions}
                moves={moves}
                learnsets={learnsets}
                user={user}
              />
            </BrowserRouter>

          </Provider>, container,
        );
      });
      const section = document.querySelector('section');
      expect(section).toBeTruthy();
    });
    test('Then an action is called if there is no email', () => {
      user = {};
      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <TeamDetailComponent
                team={team}
                teams={teams}
                actions={actions}
                moves={moves}
                learnsets={learnsets}
                user={user}
              />
            </BrowserRouter>

          </Provider>, container,
        );
      });
      expect(actions.getUserInfo).toHaveBeenCalled();
    });
    test('Then an action loadMoves is called if there is no movelist', () => {
      moves = [];
      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <TeamDetailComponent
                team={team}
                teams={teams}
                actions={actions}
                moves={moves}
                learnsets={learnsets}
                user={user}
              />
            </BrowserRouter>

          </Provider>, container,
        );
      });
      expect(actions.loadMoves).toHaveBeenCalled();
    });
    test('Then an action loadLearnsets is called if there is no learnsets', () => {
      learnsets = [];
      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <TeamDetailComponent
                team={team}
                teams={teams}
                actions={actions}
                moves={moves}
                learnsets={learnsets}
                user={user}
              />
            </BrowserRouter>

          </Provider>, container,
        );
      });
      expect(actions.loadLearnsets).toHaveBeenCalled();
    });
  });
});

describe('Given a mapStateToProps', () => {
  test('it should return a state', () => {
    const state = {
      userReducer:
      { user: { email: '' } },
      pokedexReducer: {
        moves: [],
        learnsets: [],
      },
      teamsReducer: { teams: [] },
    };
    const result = mapStateToProps(state);
    expect(result).toEqual({
      user: state.userReducer.user,
      moves: state.pokedexReducer.moves,
      learnsets: state.pokedexReducer.learnsets,
      teams: state.teamsReducer.teams,
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
