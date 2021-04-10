import React from 'react';
import { PropTypes } from 'prop-types';

export default function AbilitiesComponent({ ability }) {
  return (
    <>
      <span className="pokemon__ability-name">
        {ability.name}
      </span>
      <span className="pokemon__ability.description">
        {ability.desc || ability.shortDesc}
      </span>
    </>
  );
}

AbilitiesComponent.propTypes = {
  ability: PropTypes.shape({
    name: PropTypes.string,
    desc: PropTypes.string,
    shortDesc: PropTypes.string,

  }).isRequired,
};
