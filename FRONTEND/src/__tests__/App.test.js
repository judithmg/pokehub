import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../pages/App';

describe('Given an App component', () => {
  describe('When it is invoked', () => {
    test('Then there should be a main section', () => {
      render(<App />);

      const main = screen.findByLabelText('main');
      expect(main).toBeTruthy();
    });
  });
});
