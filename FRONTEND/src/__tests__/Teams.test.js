import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import UserTeamsComponent from '../pages/teams';

describe('Given a UserTeamsComponent component', () => {
  describe('When it is invoked', () => {
    test('Then there should be a section', () => {
      render(
        <BrowserRouter>
          <UserTeamsComponent />
        </BrowserRouter>,
      );

      const section = screen.findByLabelText('section');

      expect(section).toBeTruthy();
    });
  });
});
