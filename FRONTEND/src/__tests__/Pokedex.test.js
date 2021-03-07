import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import PokedexComponent from '../pages/pokedex';

describe('Given a Pokedex component', () => {
  describe('When it is invoked', () => {
    test('Then there should be a table', () => {
      render(
        <BrowserRouter>
          <PokedexComponent />
        </BrowserRouter>,
      );

      const table = screen.findByLabelText('table');

      expect(table).toBeTruthy();
    });
  });
});
