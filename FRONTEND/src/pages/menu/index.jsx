import React from 'react';

import types from '../../data/types';
import ButtonTypeComponent from '../shared/ButtonType';
import keyGenerator from '../../assets/keyGenerator';

import '../../styles/menu.scss';

export default function MenuComponent() {
  return (
    <aside>
      {types.map((type) => (
        <ButtonTypeComponent
          text={type}
          type={type}
          key={keyGenerator(5)}
        />
      ))}
    </aside>
  );
}
