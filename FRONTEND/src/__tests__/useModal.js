import React from 'react';
import { render } from 'react-dom';

import useModal from '../assets/useModal';

function TestHook({ callback }) {
  callback();
  return null;
}

const testHook = (callback) => {
  render(<TestHook callback={callback} />, document);
};

let isShowing;
beforeEach(() => {
  testHook(() => {
    isShowing = useModal(false);
  });
});

describe('Given a useModal function', () => {
  describe('When it is used', () => {
    test('Then it should have a toggle function', () => {
      expect(isShowing.toggle).toBeInstanceOf(Function);
    });
  });
});
