import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import MainComponent from '../pages/main';

describe('Given a Main component', () => {
  describe('When it is invoked', () => {
    test('Then there should be a main section', () => {
      render(
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>,
      );
      const main = screen.findByLabelText('main');
      expect(main).toBeTruthy();
    });
  });
});
