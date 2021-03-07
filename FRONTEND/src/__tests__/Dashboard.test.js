import React from 'react';
import { render, screen } from '@testing-library/react';

import DashboardElement from '../pages/dashboard';

describe('Given a Dashboard component', () => {
  describe('When it is invoked', () => {
    test('Then there should be a section', () => {
      render(
        <DashboardElement />,
      );

      const dashboard = screen.findByLabelText('section');

      expect(dashboard).toBeTruthy();
    });
  });
});
