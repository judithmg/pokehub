import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import Button from '../pages/shared/ButtonComponent';

describe('Given a Button component', () => {
  describe('When it is invoked', () => {
    let container = null;

    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
      act(() => {
        render(
          <BrowserRouter>
            <Button text="text" classes="classes" />
            ,
          </BrowserRouter>, container,
        );
      });
    });

    afterEach(() => {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    });
    test('Then there should be a button element', () => {
      const button = container.querySelector('button');

      expect(button).toBeTruthy();
    });
    test('Then its innerHTML should be the props passed as text', () => {
      const { innerHTML } = container.querySelector('button');

      expect(innerHTML).toBe('text');
    });
  });
});
