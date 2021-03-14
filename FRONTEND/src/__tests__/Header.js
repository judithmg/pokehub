import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/store/configureStore';

import HeaderComponent from '../pages/header';

describe('Given a Header component', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
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
          <BrowserRouter>
            <HeaderComponent />
          </BrowserRouter>, container,
        );
      });

      const header = container.querySelector('header');

      expect(header).toBeTruthy();
    });
    test('Then there should be a button with text "Login"', () => {
      act(() => {
        render(
          <BrowserRouter>
            <HeaderComponent />
          </BrowserRouter>, container,
        );
      });

      const { innerHTML } = container.querySelector('button');

      expect(innerHTML).toBe('Login');
    });
  });
  describe('When the menu button is clicked', () => {
    test('An aside should render', () => {
      const store = configureStore();

      act(() => {
        render(
          <Provider store={store}>

            <BrowserRouter>
              <HeaderComponent />
            </BrowserRouter>
          </Provider>, container,

        );
      });
      const img = container.querySelector('.header__pokeball');
      fireEvent.click(img);
      const aside = container.querySelector('aside');
      expect(aside).toBeTruthy();
    });
    test('A button with a type should be rendered', () => {
      const store = configureStore();

      act(() => {
        render(
          <Provider store={store}>

            <BrowserRouter>
              <HeaderComponent />
            </BrowserRouter>
          </Provider>, container,

        );
      });
      const img = container.querySelector('.header__pokeball');
      fireEvent.click(img);
      const btn = container.querySelector('.btn-type--filter');
      expect(btn).toBeTruthy();
    });
  });
});