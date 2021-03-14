import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import TeamCreatorComponent from '../pages/team-creator';

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
    test('Then there should be a section element', () => {
      act(() => {
        render(
          <BrowserRouter>
            <TeamCreatorComponent />
            ,
          </BrowserRouter>, container,
        );
      });
      const section = container.querySelector('section');

      expect(section).toBeTruthy();
    });
    test('Then there should be a section with class team-creator__container', () => {
      act(() => {
        render(
          <BrowserRouter>
            <TeamCreatorComponent />
            ,
          </BrowserRouter>, container,
        );
      });
      const section = container.querySelector('.team-creator__container');

      expect(section).toBeTruthy();
    });
    test('Then there should be a pokemon icon sprite', () => {
      act(() => {
        render(
          <BrowserRouter>
            <TeamCreatorComponent />
            ,
          </BrowserRouter>, container,
        );
      });
      const icon = container.querySelector('.team-creator__pokeico');

      expect(icon).toBeTruthy();
    });
  });
});
