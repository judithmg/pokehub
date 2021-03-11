import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import VisualInfoComponent from '../pages/pokedetail/VisualInfo';

describe('Given a VisualInfo component', () => {
  describe('When it is invoked', () => {
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
    const pokemon = {
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
    };
    test('Then there should be a radar chart (svg) showing its stats ', () => {
      act(() => {
        render(
          <BrowserRouter>
            <VisualInfoComponent pokemon={pokemon} />
          </BrowserRouter>, container,
        );
      });

      const svg = document.querySelector('svg');

      expect(svg).toBeTruthy();
    });
  });
});
