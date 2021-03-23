import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { fireEvent } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import * as auth from '../context/AuthContext';

import configureStore from '../redux/store/configureStore';
import {
  TeamManagerComponent,
  mapStateToProps,
  mapDispatchToProps,
} from '../pages/Teams';
import { TeamComponent } from '../pages/Teams/TeamComponent';

describe('Given a TeamManagerComponent component', () => {
  let container = null;
  let store;
  let user = {
    email: 'jajas@gmail.com',
  };
  const actions = {
    loadTeams: jest.fn(),
    getUserInfo: jest.fn(),
    deleteOneTeam: jest.fn(),
  };
  const teams = [{ id: 8, pokemons: [{ num: 1, name: 'pichu' }] }, { id: 18 }];

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
    test('Then there should be a teams__container section', () => {
      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <TeamManagerComponent actions={actions} user={user} teams={teams} />
            </BrowserRouter>
          </Provider>, container,
        );
      });
      const header = container.querySelector('.teams__container');

      expect(header).toBeTruthy();
    });
  });
  describe('When there is no email', () => {
    test('Then getUserInfo is called', () => {
      user = {};
      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <TeamManagerComponent actions={actions} user={user} teams={teams} />
            </BrowserRouter>
          </Provider>, container,
        );
      });
      expect(actions.getUserInfo).toHaveBeenCalled();
    });
  });
  describe('When a Pokemon is deleted', () => {
    test('Then getUserInfo is called', () => {
      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <TeamComponent actions={actions} user={user} poketeam={teams[0]} />
            </BrowserRouter>
          </Provider>, container,
        );
      });
      const btn = document.querySelector('.teams__delete-btn');
      fireEvent.click(btn);
      expect(actions.deleteOneTeam).toHaveBeenCalled();
    });
  });
});

describe('Given a mapStateToProps', () => {
  test('it should return a state', () => {
    const state = {
      userReducer: { user: { email: '' } },
      teamsReducer: { teams: [{}] },
    };
    const result = mapStateToProps(state);
    expect(result).toEqual({
      user: state.userReducer.user,
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
