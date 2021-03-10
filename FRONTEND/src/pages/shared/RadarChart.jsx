/* eslint-disable react/prop-types */
import React from 'react';
import RadarChart from 'react-svg-radar-chart';

export default function RadarChartComponent({ stats }) {
  return (
    <RadarChart
      captions={{
        // columns
        hp: 'HP',
        atk: 'ATK',
        'sp-atk': 'SP ATK',
        def: 'DEF',
        'sp-def': 'SP DEF',
        speed: 'SPEED',
      }}
      data={[
        {
          data: {
            hp: +(stats.hp / 255).toFixed(2),
            atk: +(stats.atk / 255).toFixed(2),
            'sp-atk': +(stats.spa / 255).toFixed(2),
            def: +(stats.def / 255).toFixed(2),
            'sp-def': +(stats.spd / 255).toFixed(2),
            speed: +(stats.spe / 255).toFixed(2),
          },
          meta: { color: '#58FCEC' },
        },
      ]}
      size={150}
    />
  );
}