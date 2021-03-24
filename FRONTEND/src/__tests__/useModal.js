import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import useModal from '../hooks/useModal';

function TestHook({ callback }) {
  callback();
  return null;
}

const testHook = (callback) => {
  render(<TestHook callback={callback} />, document);
};

let isShowing;

describe('Given a useModal function', () => {
  describe('When it is used', () => {
    test('Then it should have a toggle function', () => {
      testHook(() => {
        isShowing = useModal(false);
      });
      expect(isShowing.toggle).toBeInstanceOf(Function);
    });
  });
});
describe('Given a useModal function', () => {
  describe('When it is used', () => {
    test('Then it should have a toggle function', () => {
      act(() => {
        isShowing.toggle();
      });
      expect(isShowing.isShowing).toBe(true);
    });
  });
});

// testearlo como una función, no como un hook
// llamar a toggle
