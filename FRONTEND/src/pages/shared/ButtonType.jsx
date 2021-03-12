import React from 'react';
import '../../styles/button.scss';

import PropTypes from 'prop-types';

export default function ButtonType({ type }) {
  return (
    <button type="button" className={`btn-type ${type?.toLowerCase()}`}>{type?.toUpperCase()}</button>
  );
}

ButtonType.propTypes = {
  type: PropTypes.string.isRequired,
};
