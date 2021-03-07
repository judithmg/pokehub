/* eslint-disable react/prop-types */
import React from 'react';

import Move from './Move';

import 'react-svg-radar-chart/build/css/index.css';

export default function Moveset({ moves }) {
  return (
    <table>
      <thead>
        <tr className="moveset__header">
          <th className="moveset__header-lvl">Lvl </th>
          <tr className="moveset__header-name"> Name</tr>
          <tr className="moveset__header-type"> Type</tr>
          <tr className="moveset__header-power">Power </tr>
          <tr className="moveset__header-accuracy"> Acc</tr>
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
