import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import VisualInfoComponent from '../pages/pokedetail/VisualInfoComponent';

describe('Given a VisualInfo component', () => {
  describe('When it is invoked', () => {
    const pokedex = [{
      num: 2,
      name: 'Ivysaur',
      types: ['Grass', 'Poison'],
      genderRatio: { M: 0.875, F: 0.125 },
      baseStats: {
        hp: 60, atk: 62, def: 63, spa: 80, spd: 80, spe: 60,
      },
      abilities: { 0: 'Overgrow', H: 'Chlorophyll' },
      heightm: 1,
      weightkg: 13,
      color: 'Green',
      prevo: 'Bulbasaur',
      evoLevel: 16,
      evos: ['Venusaur'],
      eggGroups: ['Monster', 'Grass'],
    }];
    const pokemon = pokedex[0];

    let container = null;

    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
      act(() => {
        render(
          <BrowserRouter>
            <VisualInfoComponent pokemon={pokemon} pokedex={pokedex} />
          </BrowserRouter>, container,
        );
      });
    });

    afterEach(() => {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    });

    test('Then there should be a div with a radar chart', () => {
      const div = document.querySelector('.abstract__stats');

      expect(div).toBeTruthy();
    });
  });
});
