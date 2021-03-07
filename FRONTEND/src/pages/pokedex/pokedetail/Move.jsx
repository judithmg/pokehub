import React from 'react';

import PropTypes from 'prop-types';
import 'react-svg-radar-chart/build/css/index.css';

export default function Move({ move }) {
  return (
    <tr className="pokemon__move" key={move.name}>
      <th className="pokemon__move-lvl">{move.name}</th>
      <tr className="pokemon__move-name">{move.name}</tr>
      <tr className="pokemon__move-type">{move.name}</tr>
      <tr className="pokemon__move-power">{move.name}</tr>
      <tr className="pokemon__move-accuracy">{move.name}</tr>
    </tr>
  );
}

Move.propTypes = {
  move: PropTypes.shape({
    name: PropTypes.string,
    lvl: PropTypes.number,

  }).isRequired,
};
