import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/dashboard.scss';

export default function DashboardButton({ text }) {
  return (
    <div className="dashboard__button">
      <div className="svg-container">aa</div>
      <span>
        {text}
      </span>
    </div>
  );
}

DashboardButton.propTypes = {
  text: PropTypes.string.isRequired,
};
