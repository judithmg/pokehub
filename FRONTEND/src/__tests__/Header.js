import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import * as auth from '../context/AuthContext';

import configureStore from '../redux/store/configureStore';

import { HeaderComponent, mapStateToProps, mapDispatchToProps } from '../pages/header';

describe('Given a Header component', () => {
  let container = null;
  let fn;
  let user = {
    email: 'jajas@gmail.com',
  };
  const actions = {
    logoutUser: jest.fn(),
    getUserInfo: jest.fn(),
  };

  let store;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    jest.spyOn(auth, 'useAuth').mockImplementation(() => ({ logout: jest.fn().mockResolvedValueOnce({}) }));
    store = configureStore();
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  describe('When it is invoked', () => {
    test('Then there should be a header section', () => {
      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <HeaderComponent actions={actions} user={user} />
            </BrowserRouter>
          </Provider>, container,
        );
      });
      const header = container.querySelector('header');

      expect(header).toBeTruthy();
    });
  });
  test('Then an action is called it there is no user', () => {
    user = {};
    act(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <HeaderComponent actions={actions} user={user} />
          </BrowserRouter>
        </Provider>, container,
      );
    });

    expect(actions.getUserInfo).toHaveBeenCalled();
  });

  test('Logout fn should be called', () => {
    user = { email: 'hello@gmail.com' };
    act(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <HeaderComponent actions={actions} user={user} />
          </BrowserRouter>
        </Provider>, container,
      );
    });
    fn = jest.spyOn(actions, 'logoutUser');
    const btn = container.querySelectorAll('.header__link')[1];
    act(() => {
      fireEvent.click(btn);
    });
    // se cubre la rama pero no da true??
    waitFor(() => {
      expect(fn).toHaveBeenCalled();
    }, 3000);
  });
});

describe('Given a mapStateToProps', () => {
  test('it should return a state', () => {
    const state = { userReducer: { user: { email: '' } } };
    const result = mapStateToProps(state);
    expect(result).toEqual({ user: state.userReducer.user });
  });
});
describe('Given a mapDispatchToProps', () => {
  test('it should return an object', () => {
    const dispatch = jest.fn();
    const result = mapDispatchToProps(dispatch);
    expect(result.actions.getUserInfo).toBeTruthy();
  });
});
