import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import EvolutionChain, { findPokemonNumber } from '../pages/pokedetail/EvolutionChainComponent';

describe('Given a Dashboard component', () => {
  let container = null;
  const pokedex = [{ name: 'Raichu', num: 26, evos: ['invent'] }, { name: 'Pichu', num: 172, prevo: 'invent' }];
  const pokemon = {
    num: 25,
    name: 'Pikachu',
    types: [
      'Electric',
    ],
    baseStats: {
      hp: 35,
      atk: 55,
      def: 40,
      spa: 50,
      spd: 50,
      spe: 90,
    },
    abilities: {
      0: 'Static',
      H: 'Lightning Rod',
    },
    heightm: 0.4,
    weightkg: 6,
    color: 'Yellow',
    prevo: 'Pichu',
    evoType: 'levelFriendship',
    evos: [
      'Raichu',
    ],
  };
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);

    act(() => {
      render(
        <BrowserRouter>
          <EvolutionChain
            evos={['Raichu']}
            prevo="Pichu"
            pokedex={pokedex}
            pokemon={pokemon}
          />
        </BrowserRouter>, container,
      );
    });
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  describe('When it is invoked', () => {
    test('Then there should be a span with a title', () => {
      const { innerHTML } = container.querySelector('span');

      expect(innerHTML).toBe('EVOLUTION CHAIN');
    });
    test('Then findPokemonNumber of Pichu should return its Pokedex entry', () => {
      expect(findPokemonNumber('Pichu', pokedex)).toEqual({ name: 'Pichu', num: 172, prevo: 'invent' });
    });
  });
});
