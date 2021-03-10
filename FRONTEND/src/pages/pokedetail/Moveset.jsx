/* eslint-disable react/prop-types */
import React from 'react';

import Move from './Move';

import 'react-svg-radar-chart/build/css/index.css';
import keyGenerator from '../../assets/keyGenerator';

export default function MovesetComponent({ moves }) {
  const fakeMoves = [
    {
      num: 446,
      accuracy: true,
      basePower: 0,
      category: 'Status',
      desc: "Sets up a hazard on the foe's side of the field, damaging each foe that switches in. Can be used only once before failing. Foes lose 1/32, 1/16, 1/8, 1/4, or 1/2 of their maximum HP, rounded down, based on their weakness to the Rock type; 0.25x, 0.5x, neutral, 2x, or 4x, respectively. Can be removed from the foe's side if any foe uses Rapid Spin or Defog, or is hit by Defog.",
      shortDesc: 'Hurts foes on switch-in. Factors Rock weakness.',
      id: 'stealthrock',
      isViable: true,
      name: 'Stealth Rock',
      pp: 20,
      priority: 0,
      flags: { reflectable: 1 },
      sideCondition: 'stealthrock',

      secondary: false,
      target: 'foeSide',
      type: 'Rock',
      zMoveBoost: { def: 1 },
      contestType: 'Cool',
    }, {
      num: 446,
      accuracy: true,
      basePower: 0,
      category: 'Status',
      desc: "Sets up a hazard on the foe's side of the field, damaging each foe that switches in. Can be used only once before failing. Foes lose 1/32, 1/16, 1/8, 1/4, or 1/2 of their maximum HP, rounded down, based on their weakness to the Rock type; 0.25x, 0.5x, neutral, 2x, or 4x, respectively. Can be removed from the foe's side if any foe uses Rapid Spin or Defog, or is hit by Defog.",
      shortDesc: 'Hurts foes on switch-in. Factors Rock weakness.',
      id: 'stealthrock',
      isViable: true,
      name: 'Stealth Rock',
      pp: 20,
      priority: 0,
      flags: { reflectable: 1 },
      sideCondition: 'stealthrock',

      secondary: false,
      target: 'foeSide',
      type: 'Rock',
      zMoveBoost: { def: 1 },
      contestType: 'Cool',
    }, {
      num: 446,
      accuracy: true,
      basePower: 0,
      category: 'Status',
      desc: "Sets up a hazard on the foe's side of the field, damaging each foe that switches in. Can be used only once before failing. Foes lose 1/32, 1/16, 1/8, 1/4, or 1/2 of their maximum HP, rounded down, based on their weakness to the Rock type; 0.25x, 0.5x, neutral, 2x, or 4x, respectively. Can be removed from the foe's side if any foe uses Rapid Spin or Defog, or is hit by Defog.",
      shortDesc: 'Hurts foes on switch-in. Factors Rock weakness.',
      id: 'stealthrock',
      isViable: true,
      name: 'Stealth Rock',
      pp: 20,
      priority: 0,
      flags: { reflectable: 1 },
      sideCondition: 'stealthrock',

      secondary: false,
      target: 'foeSide',
      type: 'Rock',
      zMoveBoost: { def: 1 },
      contestType: 'Cool',
    }, {
      num: 446,
      accuracy: true,
      basePower: 0,
      category: 'Status',
      desc: "Sets up a hazard on the foe's side of the field, damaging each foe that switches in. Can be used only once before failing. Foes lose 1/32, 1/16, 1/8, 1/4, or 1/2 of their maximum HP, rounded down, based on their weakness to the Rock type; 0.25x, 0.5x, neutral, 2x, or 4x, respectively. Can be removed from the foe's side if any foe uses Rapid Spin or Defog, or is hit by Defog.",
      shortDesc: 'Hurts foes on switch-in. Factors Rock weakness.',
      id: 'stealthrock',
      isViable: true,
      name: 'Stealth Rock',
      pp: 20,
      priority: 0,
      flags: { reflectable: 1 },
      sideCondition: 'stealthrock',
      secondary: false,
      target: 'foeSide',
      type: 'Rock',
      zMoveBoost: { def: 1 },
      contestType: 'Cool',
    }, {
      num: 446,
      accuracy: true,
      basePower: 0,
      category: 'Status',
      desc: "Sets up a hazard on the foe's side of the field, damaging each foe that switches in. Can be used only once before failing. Foes lose 1/32, 1/16, 1/8, 1/4, or 1/2 of their maximum HP, rounded down, based on their weakness to the Rock type; 0.25x, 0.5x, neutral, 2x, or 4x, respectively. Can be removed from the foe's side if any foe uses Rapid Spin or Defog, or is hit by Defog.",
      shortDesc: 'Hurts foes on switch-in. Factors Rock weakness.',
      id: 'stealthrock',
      isViable: true,
      name: 'Stealth Rock',
      pp: 20,
      priority: 0,
      flags: { reflectable: 1 },
      sideCondition: 'stealthrock',

      secondary: false,
      target: 'foeSide',
      type: 'Rock',
      zMoveBoost: { def: 1 },
      contestType: 'Cool',
    },
  ];
  return (
    <table className="table__moveset">
      {console.log(moves)}
      <thead>
        <tr className="moveset__header">
          <th className="moveset__header-lvl">Lvl </th>
          <th className="moveset__header-name"> Name</th>
          <th className="moveset__header-type"> Type</th>
          <th className="moveset__header-pp">PP </th>
        </tr>
      </thead>
      <tbody>
        {fakeMoves?.map((move) => (
          <Move move={move} key={keyGenerator(5)} />
        ))}
      </tbody>
    </table>
  );
}
