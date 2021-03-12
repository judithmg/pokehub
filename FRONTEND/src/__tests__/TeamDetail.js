import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import TeamDetailComponent from '../pages/teams/team-detail';

describe('Given a TeamDetailComponent component', () => {
  describe('When it is invoked', () => {
    let container = null;

    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });

    afterEach(() => {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    });
    test('Then there should be a section', () => {
      act(() => {
        render(
          <BrowserRouter>
            <TeamDetailComponent />
          </BrowserRouter>, container,
        );
      });

      const section = document.querySelector('section');

      expect(section).toBeTruthy();
    });
  });
});
