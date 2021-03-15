import PropTypes from 'prop-types';
import React from 'react';

import SpritesComponent from './Sprites';

export default function MainInfoComponent({ pokemon }) {
  return (
    <>
      {pokemon && (
      <div className="pokemon__abstract-main">
        <SpritesComponent pokemon={pokemon} />
        <div className="abstract__data">
          <div className="abstract__name">
            <span className="abstract__name--eng">{pokemon?.name}</span>
            <span className="abstract__name--jap">{pokemon['name-jap']}</span>
          </div>
          <div className="abstract__id">
            {`# ${pokemon?.num}`}

          </div>
          <div className="abstract__size">
            <div className="abract__weight">
              {`${pokemon?.weightkg} kg`}

            </div>
            <div className="abstract__height">
              {`${pokemon?.heightm} m`}

            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
}

MainInfoComponent.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    'name-jap': PropTypes.string.isRequired,
    num: PropTypes.number.isRequired,
    weightkg: PropTypes.number.isRequired,
    heightm: PropTypes.number.isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
