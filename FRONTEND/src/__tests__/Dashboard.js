import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import DashboardElement from '../pages/dashboard';

describe('Given a Dashboard component', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
      render(
        <BrowserRouter>
          <DashboardElement />
        </BrowserRouter>, container,
      );
    });
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  describe('When it is invoked', () => {
    test('Then there should be a section', () => {
      const dashboard = container.querySelector('section');

      expect(dashboard).toBeTruthy();
    });
    test('Then there should be a button with text POKEDEX', () => {
      const button = document.querySelectorAll('span');

      expect(button[0].innerHTML).toBe('POKEDEX');
    });
  });
});
