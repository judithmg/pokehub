import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/dashboard.scss';

export default function DashboardButton({ text }) {
  return (
    <button type="button">{text}</button>
  );
}

DashboardButton.propTypes = {
  text: PropTypes.string.isRequired,
};
