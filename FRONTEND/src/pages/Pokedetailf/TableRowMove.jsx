import React, { useState } from 'react';

import PropTypes from 'prop-types';
import 'react-svg-radar-chart/build/css/index.css';

import ButtonType from '../shared/ButtonType';
import ModalAtk from './ModalMoveComponent';

import '../../styles/pokedetail.scss';

export default function TableRowMove({ move }) {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <tr
      className="pokemon__move"
      key={Math.random()}
      onMouseEnter={() => setIsShowing(true)}
      onMouseLeave={() => setIsShowing(false)}
    >
      <td className="pokemon__move-name">{move?.name}</td>
      <td className="pokemon__move-type">
        <ButtonType type={move?.type} key={Math.random()} />

      </td>
      <td className="pokemon__move-pp">{move?.pp}</td>
      {isShowing && <ModalAtk move={move} /> }
    </tr>
  );
}

TableRowMove.propTypes = {
  move: PropTypes.shape({
    name: PropTypes.string,
    pp: PropTypes.number,
    basePower: PropTypes.number,
    type: PropTypes.string,

  }).isRequired,
};
