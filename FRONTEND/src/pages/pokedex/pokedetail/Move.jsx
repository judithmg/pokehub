import React, { useState } from 'react';

import PropTypes from 'prop-types';
import 'react-svg-radar-chart/build/css/index.css';

import ButtonType from '../../shared/ButtonType';
import ModalAtk from './ModalAtk';

import '../../../styles/pokedetail.scss';

export default function Move({ move }) {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <tr
      className="pokemon__move"
      key={move.name}
      onMouseEnter={() => setIsShowing(true)}
      onMouseLeave={() => setIsShowing(false)}
    >
      <td className="pokemon__move-lvl">1</td>
      <td className="pokemon__move-name">{move.name}</td>
      <td className="pokemon__move-type">
        <ButtonType text={move.type} type={move.type.toLowerCase()} key={`${move.type[0]}`} />

      </td>
      <td className="pokemon__move-pp">{move.pp}</td>
      {isShowing && <ModalAtk /> }
    </tr>
  );
}

Move.propTypes = {
  move: PropTypes.shape({
    name: PropTypes.string,
    lvl: PropTypes.number,
    pp: PropTypes.number,
    type: PropTypes.string,

  }).isRequired,
};
