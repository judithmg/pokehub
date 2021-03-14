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
    test('Then there should be a button element', () => {
      act(() => {
        render(
          <BrowserRouter>
            <TeamManagerComponent />
            ,
          </BrowserRouter>, container,
        );
      });
      const button = container.querySelector('button');

      expect(button).toBeTruthy();
    });
  });
});
