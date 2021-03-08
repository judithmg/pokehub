/* eslint-disable react/prop-types */
import React from 'react';

import Move from './Move';

import 'react-svg-radar-chart/build/css/index.css';

export default function Moveset({ moves }) {
  return (
    <table className="table__moveset">
      <thead>
        <tr className="moveset__header">
          <th className="moveset__header-lvl">Lvl </th>
          <th className="moveset__header-name"> Name</th>
          <th className="moveset__header-type"> Type</th>
          <th className="moveset__header-pp">PP </th>
        </tr>
      </thead>
      <tbody>
        {moves.map((move) => (
          <Move move={move} key={move.name} />
        ))}
      </tbody>
    </table>
  );
}
