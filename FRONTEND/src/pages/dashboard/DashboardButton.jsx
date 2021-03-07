import React from 'react';
import PropTypes from 'prop-types';

import PokedexBall from '../../assets/icons/PokedexBall';

import '../../styles/dashboard.scss';

export default function DashboardButton({ text }) {
  return (
    <div className="dashboard__button">
      <span>
        {text}
      </span>
      <div className="svg-container"><PokedexBall fill="#458cdd" /></div>
    </div>
  );
}

DashboardButton.propTypes = {
  text: PropTypes.string.isRequired,
};
