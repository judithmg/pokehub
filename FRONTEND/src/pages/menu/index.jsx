import React from 'react';

import types from '../../constants/types';
import ButtonType from './ButtonTypeFilter';

import '../../styles/menu.scss';

export default function MenuComponent() {
  return (
    <aside>
      {types.map((type) => (
        <ButtonType
          type={type}
          key={Math.random()}
        />
      ))}
    </aside>
  );
}
