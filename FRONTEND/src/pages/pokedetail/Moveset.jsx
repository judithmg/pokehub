import React from 'react';
import PropTypes from 'prop-types';

import Move from './Move';

import 'react-svg-radar-chart/build/css/index.css';

export default function MovesetComponent({ moves }) {
  return (
    <table className="table__moveset">
      <thead>
        <tr className="moveset__header">
          <th className="moveset__header-name"> Name</th>
          <th className="moveset__header-type"> Type</th>
          <th className="moveset__header-pp">PP </th>
        </tr>
      </thead>
      <tbody>
        {moves && moves?.map((move) => (
          move[0] && <Move move={move[0]} key={Math.random()} />
        ))}
      </tbody>
    </table>
  );
}

MovesetComponent.propTypes = {
  moves: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    desc: PropTypes.string,
    shortDesc: PropTypes.string,
    pp: PropTypes.number,
    basePower: PropTypes.number,
    type: PropTypes.string,
    accuracy: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
    ])),
  }))).isRequired,

};
