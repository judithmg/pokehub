import React from 'react';
import '../../styles/menu.scss';

import types from '../../data/types';
import ButtonType from '../shared/ButtonType';

export default function MenuComponent() {
  return (
    <aside>
      {types.map((type) => <ButtonType text={type} type={type} key={type} />)}
    </aside>
  );
}
