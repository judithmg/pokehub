import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import { CreateTeamComponent } from '../pages/team-creator/CreateTeam';

describe('Given a TeamCreatorComponent component', () => {
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
      createTeam: jest.fn(),
      loadTeams: jest.fn(),
      addPokemonToTeam: jest.fn(),
      submitTeam: jest.fn(),
      loadPokedex: jest.fn(),
    };
    const teams = [{}];
    const newTeam = {
      id: 8,
      pokemons: [{}],
    };
    const pokedex = [{}];

    test('Then there should be a div with class team-creator__creator', () => {
      act(() => {
        render(
          <BrowserRouter>
            <CreateTeamComponent
              actions={actions}
              teams={teams}
              newTeam={newTeam}
              pokedex={pokedex}
            />
            ,
          </BrowserRouter>, container,
        );
      });
      const section = container.querySelector('.team-creator__creator');

      expect(section).toBeTruthy();
    });
    test('Then there should be a pokemon icon sprite', () => {
      act(() => {
        render(
          <BrowserRouter>
            <CreateTeamComponent
              actions={actions}
              teams={teams}
              newTeam={newTeam}
              pokedex={pokedex}
            />
            ,
          </BrowserRouter>, container,
        );
      });
      const icon = container.querySelector('.team-creator__pokeico');

      expect(icon).toBeTruthy();
    });
  });
});
