import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { fireEvent } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { SignupComponent, mapStateToProps, mapDispatchToProps } from '../pages/SignUp';

import { AuthProvider } from '../context/AuthContext';
import configureStore from '../redux/store/configureStore';

describe('Given a SignupComponent component', () => {
  let container = null;
  let store;
  const actions = {
    getUserInfo: jest.fn(),
  };

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    store = configureStore();
    act(() => {
      render(
        <Provider store={store}>
          <AuthProvider>
            <BrowserRouter>
              <SignupComponent actions={actions} />
            </BrowserRouter>
          </AuthProvider>
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
    test('Then there should be a btn', () => {
      const btn = document.querySelector('.login__btn');
      expect(btn).toBeTruthy();
    });
    test('Then there should be a btn', () => {
      const handleSubmit = jest.fn();
      act(() => {
        const btn = document.querySelector('.login__btn');
        fireEvent.click(btn);
      });
      expect(handleSubmit).toHaveBeenCalled();
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
    expect(result.actions.signupUser).toBeTruthy();
  });
});
