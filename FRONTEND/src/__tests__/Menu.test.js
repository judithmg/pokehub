import React from 'react';
import { render, screen } from '@testing-library/react';

import MenuComponent from '../pages/shared/menu';

describe('Given a Footer component', () => {
  describe('When it is invoked', () => {
    test('Then there should be a footer', () => {
      render(
        <MenuComponent />,
      );

      const aside = screen.findByLabelText('aside');

      expect(aside).toBeTruthy();
    });
  });
});
