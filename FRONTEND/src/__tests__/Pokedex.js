import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import { PokedexComponent } from '../pages/pokedex';

describe('Given a Pokedex component', () => {
  const pokedex = [{
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
  const page = 0;
  const pokemonsShown = [{
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
    test('Then there should be a section with a class of pokedex__container', () => {
      act(() => {
        render(
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
          </BrowserRouter>, container,
        );
      });

      const pokedexElement = document.querySelector('.pokedex__container');

      expect(pokedexElement).toBeTruthy();
    });
  });
  test('Then there should be a header with a class of pokedex__header', () => {
    act(() => {
      render(
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
        </BrowserRouter>, container,
      );
    });

    const pokedexHeader = document.querySelector('.pokedex__header');

    expect(pokedexHeader).toBeTruthy();
  });
});
