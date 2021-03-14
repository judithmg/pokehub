import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import { TeamManagerComponent } from '../pages/teams';

describe('Given a UserTeamsComponent component', () => {
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
    const actions = {
      loadTeams: jest.fn(),
    };
    const teams = [{}];
    test('Then there should be a button element', () => {
      act(() => {
        render(
          <BrowserRouter>
            <TeamManagerComponent actions={actions} teams={teams} />
            ,
          </BrowserRouter>, container,
        );
      });
      const button = container.querySelector('button');

      expect(button).toBeTruthy();
    });
  });
});
