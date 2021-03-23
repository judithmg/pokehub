import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/store/configureStore';
import { PokedexComponent, mapStateToProps, mapDispatchToProps } from '../pages/Pokedex';

describe('Given a Pokedex component', () => {
  let pokedex = [{
    name: 'Bulbasaur',
    types: ['pokemon', 'ability'],
    baseStats: {
      hp: 1,
      spa: 1,
      atk: 1,
      spe: 1,
      def: 1,
      spd: 1,
    },
  }];
  const moves = [{}];
  const abilities = [{}];
  const learnsets = [{}];
  const actions = {
    loadPokedex: jest.fn(),
    loadMoves: jest.fn(),
    loadLearnsets: jest.fn(),
    loadAbilities: jest.fn(),
    loadPokemonsShown: jest.fn(),
  };
  const page = 1;
  let pokemonsShown = [{
    name: 'Bulbasaur',
    types: ['pokemon', 'ability'],
    baseStats: {
      hp: 1,
      spa: 1,
      atk: 1,
      spe: 1,
      def: 1,
      spd: 1,
    },
  },
  ];

  let container;
  let store;

  beforeEach(() => {
    window.scrollTo = jest.fn();

    store = configureStore();
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  describe('When it is invoked', () => {
    test('Then there should be a section with a class of pokedex__container', () => {
      act(() => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <PokedexComponent
                actions={actions}
                pokedex={pokedex}
                moves={moves}
                abilities={abilities}
                learnsets={learnsets}
                page={page}
                pokemonsShown={pokemonsShown}
              />
            </BrowserRouter>
          </Provider>, container,
        );
      });
      const pokedexElement = document.querySelector('.pokedex__container');
      expect(pokedexElement).toBeTruthy();
    });
  });
  test('Then there should be a header with a class of pokedex__header', () => {
    act(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <PokedexComponent
              actions={actions}
              pokedex={pokedex}
              moves={moves}
              abilities={abilities}
              learnsets={learnsets}
              page={page}
              pokemonsShown={pokemonsShown}
            />
          </BrowserRouter>
        </Provider>, container,
      );
    });
    const pokedexHeader = document.querySelector('.pokedex__header');
    expect(pokedexHeader).toBeTruthy();
  });
  test('Then an action is called if pokedex isn not found on the state', () => {
    pokedex = [];
    pokemonsShown = [];
    act(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <PokedexComponent
              actions={actions}
              pokedex={pokedex}
              moves={moves}
              abilities={abilities}
              learnsets={learnsets}
              page={page}
              pokemonsShown={pokemonsShown}
            />
          </BrowserRouter>
        </Provider>, container,
      );
    });
    expect(actions.loadPokedex).toHaveBeenCalled();
  });
});

describe('Given a mapStateToProps', () => {
  test('it should return a state', () => {
    const state = {
      pokedexReducer: {
        pokedex: {}, learnsets: {}, abilities: {}, page: 0,
      },
    };
    const result = mapStateToProps(state);
    expect(result).toEqual({
      moves: state.pokedexReducer.moves,
      abilities: state.pokedexReducer.abilities,
      learnsets: state.pokedexReducer.learnsets,
      page: state.pokedexReducer.page,
      pokedex: state.pokedexReducer.pokedex,
      pokemonsShown: state.pokedexReducer.pokemonsShown,
    });
  });
});
describe('Given a mapDispatchToProps', () => {
  test('it should return an object', () => {
    const dispatch = jest.fn();
    const result = mapDispatchToProps(dispatch);
    expect(result.actions.loadPokemonsShown).toBeTruthy();
  });
});
