import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import PokeDetailComponent from '../pages/pokedex/pokedetail';

xdescribe('Given a Pokedetail component', () => {
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
  describe('When it is invoked', () => {
    test('Then there should be a section', () => {
      act(() => {
        render(
          <BrowserRouter>
            <PokeDetailComponent />
          </BrowserRouter>, container,
        );
      });

      // const dashboard = sdocument.querySelector('section');
      expect(dashboard).toBe(true);
    });
  });
});
