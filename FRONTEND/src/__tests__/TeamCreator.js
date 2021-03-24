import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as auth from '../context/AuthContext';

import configureStore from '../redux/store/configureStore';

import {
  TeamCreatorComponent,
  mapStateToProps,
  mapDispatchToProps,
} from '../pages/TeamCreator';

describe('Given a TeamCreatorComponent component', () => {
  describe('When it is invoked', () => {
    let container = null;
    const actions = {
      createTeam: jest.fn(),
      submitTeam: jest.fn(),
      getUserInfo: jest.fn(),
    };
    const teams = [{ id: 8 }];
    const newTeam = {
      id: 8,
      pokemons: [{ num: 8 }],
    };
    let user = { email: 'aks@gmail.com' };
    let store;

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

    test('Then there should be a div with class team-creator__container', () => {
      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <TeamCreatorComponent
                actions={actions}
                teams={teams}
                newTeam={newTeam}
                user={user}
              />
            </BrowserRouter>
          </Provider>, container,
        );
      });
      const section = document.querySelector('.team-creator__container');
      expect(section).toBeTruthy();
    });
    test('Then there should be a pokemon icon sprite', () => {
      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <TeamCreatorComponent
                actions={actions}
                teams={teams}
                newTeam={newTeam}
                user={user}
              />
            </BrowserRouter>
          </Provider>, container,
        );
      });
      const icon = document.querySelector('.team-creator__pokeico');

      expect(icon).toBeTruthy();
    });
    test('Then if no user an action is called', () => {
      user = {};
      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <TeamCreatorComponent
                actions={actions}
                teams={teams}
                newTeam={newTeam}
                user={user}
              />
            </BrowserRouter>
          </Provider>, container,
        );
      });

      expect(actions.getUserInfo).toHaveBeenCalled();
    });
  });
});

describe('Given a mapStateToProps', () => {
  test('it should return a state', () => {
    const state = {
      userReducer: { user: { email: '' }, newTeam: {} },
      teamsReducer: { teams: [{}] },
    };
    const result = mapStateToProps(state);
    expect(result).toEqual({
      user: state.userReducer.user,
      teams: state.teamsReducer.teams,
      newTeam: state.teamsReducer.newTeam,
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
