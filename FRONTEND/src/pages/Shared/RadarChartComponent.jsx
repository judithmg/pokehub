import PropTypes from 'prop-types';

import React from 'react';
import RadarChart from 'react-svg-radar-chart';
import radarChartData from '../../constants/radarChartData';

export default function RadarChartComponent({ stats, size }) {
  return (
    <RadarChart
      captions={radarChartData}
      data={[
        {
          data: {
            hp: +(stats?.hp / 255).toFixed(2),
            atk: +(stats?.atk / 180).toFixed(2),
            'sp-atk': +(stats?.spa / 180).toFixed(2),
            def: +(stats?.def / 230).toFixed(2),
            'sp-def': +(stats?.spd / 230).toFixed(2),
            speed: +(stats?.spe / 180).toFixed(2),
          },
          meta: { color: '#fdaa10' },
        },
      ]}
      size={size}
    />
  );
}

RadarChartComponent.propTypes = {
  size: PropTypes.number.isRequired,
  stats: PropTypes.shape(
    {
      hp: PropTypes.number,
      spa: PropTypes.number,
      atk: PropTypes.number,
      spe: PropTypes.number,
      def: PropTypes.number,
      spd: PropTypes.number,
    },
  ),
};
RadarChartComponent.defaultProps = {
  stats: undefined,
};
