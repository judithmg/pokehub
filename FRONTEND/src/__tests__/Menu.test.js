import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import MenuComponent from '../pages/menu';

describe('Given a Menu component', () => {
  describe('When it is invoked', () => {
    test('Then there should be an aside', () => {
      render(
        <BrowserRouter>
          <MenuComponent />
        </BrowserRouter>,
      );

      const aside = screen.findByLabelText('aside');

      expect(aside).toBeTruthy();
    });
  });
});
