import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../pages/footer';

describe('Given a Footer component', () => {
  describe('When it is invoked', () => {
    test('Then there should be a footer element', () => {
      render(
        <Footer />,
      );
      const footer = screen.findByLabelText('footer');
      expect(footer).toBeTruthy();
    });
  });
});
