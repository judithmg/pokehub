import React from 'react';
import { render, screen } from '@testing-library/react';

import MainComponent from '../pages/main';

describe('Given a Main component', () => {
  describe('When it is invoked', () => {
    test('Then there should be a main section', () => {
      render(
        <MainComponent />,
      );
      const main = screen.findByLabelText('main');
      expect(main).toBeTruthy();
    });
  });
});
