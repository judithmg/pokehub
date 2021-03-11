import React from 'react';

import types from '../../data/types';
import ButtonType from '../shared/ButtonType';
import keyGenerator from '../../assets/keyGenerator';

import '../../styles/menu.scss';

export default function MenuComponent() {
  return (
    <aside>
      {types.map((type) => (
        <ButtonType
          type={type}
          key={keyGenerator(5)}
        />
      ))}
    </aside>
  );
}
