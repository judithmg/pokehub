import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import MainComponent from '../pages/Main';

describe('Given a Main component', () => {
  describe('Given a Header component', () => {
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
    describe('When it is invoked', () => {
      test('Then there should be a logo img', () => {
        act(() => {
          render(
            <BrowserRouter>
              <MainComponent />
            </BrowserRouter>, container,
          );
        });
        const main = container.querySelector('.main__logo');
        expect(main).toBeTruthy();
      });
    });
  });
});
