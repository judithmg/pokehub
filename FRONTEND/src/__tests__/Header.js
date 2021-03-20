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
  const user = {
    email: 'jajas@gmail.com',
  };
  const actions = {
    logoutUser: jest.fn(),
    getUserInfo: jest.fn(),
  };

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    const store = configureStore();
    jest.spyOn(auth, 'useAuth').mockImplementation(() => ({ logout: jest.fn().mockResolvedValueOnce({}) }));

    // jest.spyOn(auth, 'useAuth').mockImplementation(() => ({ logout: jest.fn().mockRejectedValueOnce({}) }));

    act(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <HeaderComponent actions={actions} user={user} />
          </BrowserRouter>
        </Provider>, container,
      );
    });
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  describe('When it is invoked', () => {
    test('Then there should be a header section', () => {
      const header = container.querySelector('header');

      expect(header).toBeTruthy();
    });
  });
  describe('When the menu button is clicked', () => {
    test('An aside should render', () => {
      const img = container.querySelector('.header__pokeball');
      fireEvent.click(img);
      const aside = container.querySelector('aside');
      expect(aside).toBeTruthy();
    });
    test('A button with a poketype should be rendered', () => {
      const img = container.querySelector('.header__pokeball');
      fireEvent.click(img);
      const btn = container.querySelector('.btn-type--filter');
      expect(btn).toBeTruthy();
    });
    test('Logout fn should be called', () => {
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
