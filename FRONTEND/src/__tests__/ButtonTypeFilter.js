import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/store/configureStore';

import { ButtonTypeFilterComponent, mapStateToProps, mapDispatchToProps } from '../pages/Pokedex/ButtonTypeFilter';

describe('Given a ButtonTypeFilterComponent', () => {
  describe('When it is invoked', () => {
    let container = null;
    const store = configureStore();
    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
      window.scrollTo = jest.fn();
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

describe('Given a mapStateToProps', () => {
  test('it should return a state', () => {
    const state = { pokedexReducer: { pokemonTypeFiltered: '' } };
    const result = mapStateToProps(state);
    expect(result).toEqual({ pokemonTypeFiltered: state.pokedexReducer.pokemonTypeFiltered });
  });
});
describe('Given a mapDispatchToProps', () => {
  test('it should return an object', () => {
    const dispatch = jest.fn();
    const result = mapDispatchToProps(dispatch);
    expect(result.actions.loadPokemonFromType).toBeTruthy();
  });
});
