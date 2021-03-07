import React from 'react';
import '../../styles/button.scss';

import PropTypes from 'prop-types';

export default function ButtonType({ text }) {
  return (
    <button type="button" className="btn-type">{text}</button>
  );
}

ButtonType.propTypes = {
  text: PropTypes.string.isRequired,
};
