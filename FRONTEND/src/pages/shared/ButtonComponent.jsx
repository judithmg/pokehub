import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/button.scss';

export default function ButtonComponent({ text, classes }) {
  return (
    <button type="button" className={`${classes} btn`}>{text}</button>
  );
}

ButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
};
