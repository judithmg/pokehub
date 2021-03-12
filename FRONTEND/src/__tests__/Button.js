import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from '../pages/shared/ButtonComponent';

describe('Given a Button component', () => {
  describe('When it is invoked', () => {
    test('Then there should be a button element', () => {
      render(
        <Button text="text" classes="classes" />,
      );

      const button = screen.findByLabelText('button');

      expect(button).toBeTruthy();
    });
  });
});
