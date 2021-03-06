import React from 'react';
import { render, screen } from '@testing-library/react';

import HeaderComponent from '../pages/shared/header';

describe('Given a Footer component', () => {
  describe('When it is invoked', () => {
    test('Then there should be a footer', () => {
      render(
        <HeaderComponent />,
      );

      const header = screen.findByLabelText('header');

      expect(header).toBeTruthy();
    });
  });
});
