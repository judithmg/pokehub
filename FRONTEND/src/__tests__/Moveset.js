import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import MovesetComponent from '../pages/pokedetail/MovesetComponent';

describe('Given a Move component', () => {
  let container = null;
  const move = [[{
    num: 446,
    accuracy: [true],
    basePower: 0,
    category: 'Status',
    desc: "Sets up a hazard on the foe's side of the field, damaging each foe that switches in. Can be used only once before failing. Foes lose 1/32, 1/16, 1/8, 1/4, or 1/2 of their maximum HP, rounded down, based on their weakness to the Rock type; 0.25x, 0.5x, neutral, 2x, or 4x, respectively. Can be removed from the foe's side if any foe uses Rapid Spin or Defog, or is hit by Defog.",
    shortDesc: 'Hurts foes on switch-in. Factors Rock weakness.',
    id: 'stealthrock',
    isViable: true,
    name: 'Stealth Rock',
    pp: 20,
    priority: 0,
    flags: { reflectable: 1 },
    sideCondition: 'stealthrock',

    secondary: false,
    target: 'foeSide',
    type: 'Rock',
    zMoveBoost: { def: 1 },
    contestType: 'Cool',
  }]];
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
      render(
        <BrowserRouter>
          <MovesetComponent moves={move} />
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
    test('Then there should be a table with a header', () => {
      const table = container.querySelector('thead');

      expect(table).toBeTruthy();
    });
    test('Then there should be a table with a text Stealth Rock', () => {
      const { innerHTML } = container.querySelector('.pokemon__move-name');

      expect(innerHTML).toBe('Stealth Rock');
    });
    test('Then there should be a table with a header Name', () => {
      const { innerHTML } = container.querySelector('.moveset__header-name');

      expect(innerHTML).toBe('Name');
    });
  });
});
