import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import HeaderComponent from '../pages/header';

describe('Given a Header component', () => {
  describe('When it is invoked', () => {
    test('Then there should be a header section', () => {
      render(
        <BrowserRouter>
          <HeaderComponent />
        </BrowserRouter>,
      );

      const header = screen.findByLabelText('header');

      expect(header).toBeTruthy();
    });
  });
});
