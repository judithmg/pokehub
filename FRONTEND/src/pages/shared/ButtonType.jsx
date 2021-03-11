import React from 'react';
import '../../styles/button.scss';

import PropTypes from 'prop-types';

export default function ButtonType({ text, type }) {
  return (
    <button type="button" className={`btn-type ${type.toLowerCase()}`}>{text.toUpperCase()}</button>
  );
}

ButtonType.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
