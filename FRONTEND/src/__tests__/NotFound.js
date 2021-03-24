import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import configureStore from '../redux/store/configureStore';

import NotFound from '../pages/NotFound';

describe('Given a NotFound component', () => {
  let container = null;

  let store;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    store = configureStore();
    act(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <NotFound />
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
    test('Then there should be a container section', () => {
      const section = container.querySelector('section');

      expect(section).toBeTruthy();
    });
    test('Then there should be a button with a go back text', () => {
      const { innerHTML } = container.querySelector('button');

      expect(innerHTML).toBe('Go to safety!');
    });
  });
});
