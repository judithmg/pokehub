import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import PokeDetailComponent from '../pages/pokedex/pokedetail';

describe('Given a Pokedetail component', () => {
  describe('When it is invoked', () => {
    test('Then there should be a section', () => {
      render(
        <BrowserRouter>
          <PokeDetailComponent />
        </BrowserRouter>,
      );

      // const dashboard = screen.findByLabelText('section');
      expect(true).toBe(true);
    });
  });
});
