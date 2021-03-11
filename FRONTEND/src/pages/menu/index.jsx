import React from 'react';

import types from '../../constants/types';
import ButtonType from './ButtonTypeFilter';
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
