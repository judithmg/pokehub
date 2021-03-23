import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/store/configureStore';

import MenuComponent from '../pages/Menu';

describe('Given a Menu component', () => {
  describe('When it is invoked', () => {
    let container = null;
    const store = configureStore();
    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });

    afterEach(() => {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    });
    test('Then there should be a menu', () => {
      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <MenuComponent />
            </BrowserRouter>
          </Provider>, container,

        );
      });

      const menu = document.querySelector('.menu__dropdown');

      expect(menu).toBeTruthy();
    });
  });
});
