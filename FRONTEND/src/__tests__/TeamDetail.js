import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { TeamDetailComponent } from '../pages/team-detail/index';

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
    const actions = {
      loadTeams: jest.fn(),
      loadOneTeam: jest.fn(),
    };
    const teams = [{}];
    const team = [{ pokemons: [] }];
    const moves = [{}];
    const abilities = [{}];
    const learnsets = [{}];
    test('Then there should be a section', () => {
      act(() => {
        render(
          <BrowserRouter>
            <TeamDetailComponent
              actions={actions}
              teams={teams}
              team={team}
              moves={moves}
              abilities={abilities}
              learnsets={learnsets}
            />
          </BrowserRouter>, container,
        );
      });

      const section = document.querySelector('section');

      expect(section).toBeTruthy();
    });
  });
});
