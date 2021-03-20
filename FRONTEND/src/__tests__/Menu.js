import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/store/configureStore';

import MenuComponent from '../pages/menu';
import { ButtonTypeFilterComponent } from '../pages/menu/ButtonTypeFilter';

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
    test('Then there should be an aside', () => {
      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <MenuComponent />
            </BrowserRouter>
          </Provider>, container,

        );
      });

      const aside = document.querySelector('aside');

      expect(aside).toBeTruthy();
    });
  });
});

describe('Given a ButtonTypeFilterComponent', () => {
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
    test('Then loadPokemonFromType should be called if there is a type selected', () => {
      const actions = {
        loadPokemonFromType: jest.fn(),
      };
      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <ButtonTypeFilterComponent
                actions={actions}
                type="fire"
              />
            </BrowserRouter>
          </Provider>, container,

        );
      });
      const btn = container.querySelector('.btn-type');
      fireEvent.click(btn);
      expect(actions.loadPokemonFromType).toHaveBeenCalled();
    });
  });
});
