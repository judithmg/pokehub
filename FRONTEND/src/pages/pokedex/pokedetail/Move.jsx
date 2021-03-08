import React from 'react';

import PropTypes from 'prop-types';
import 'react-svg-radar-chart/build/css/index.css';

import '../../../styles/pokedetail.scss';

export default function Move({ move }) {
  return (
    <tr className="pokemon__move" key={move.name}>
      <td className="pokemon__move-lvl">1</td>
      <td className="pokemon__move-name">{move.name}</td>
      <td className="pokemon__move-type">{move.type}</td>
      <td className="pokemon__move-pp">{move.pp}</td>
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
