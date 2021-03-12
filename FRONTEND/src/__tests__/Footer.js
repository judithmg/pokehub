import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../pages/footer';

describe('Given a Footer component', () => {
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
    test('Then there should be a footer element', () => {
      act(() => {
        render(
          <BrowserRouter>
            <Footer />
            ,
          </BrowserRouter>, container,
        );
      });
      const footer = container.querySelector('footer');
      expect(footer).toBeTruthy();
    });
    test('Then there should be an anchor tag with innerHTML "Judith Martinez"', () => {
      act(() => {
        render(
          <BrowserRouter>
            <Footer />
            ,
          </BrowserRouter>, container,
        );
      });
      const { innerHTML } = container.querySelector('a');
      expect(innerHTML).toBe(' Judith Martínez');
    });
  });
});
