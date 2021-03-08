import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import TeamDetailComponent from '../pages/teams/team-detail';

describe('Given a TeamDetailComponent component', () => {
  describe('When it is invoked', () => {
    test('Then there should be a section', () => {
      render(
        <BrowserRouter>
          <TeamDetailComponent />
        </BrowserRouter>,
      );

      const section = screen.findByLabelText('section');

      expect(section).toBeTruthy();
    });
  });
});
