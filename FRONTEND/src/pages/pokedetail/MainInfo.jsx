import PropTypes from 'prop-types';
import React from 'react';

import Pokeball from '../icons/Pokeball';
import { pokemonSprites } from '../../constants/images';

export default function MainInfoComponent({ pokemon }) {
  return (
    <div className="pokemon__abstract-main">
      <div className="abstract__sprite">
        <div className="svg-container"><Pokeball /></div>
        <img src={`${pokemonSprites.httpSprite}${pokemon.num}.png`} alt="pokemon sprite" />
      </div>
      <div className="abstract__data">
        <div className="abstract__name">
          <span className="abstract__name--eng">{pokemon.name}</span>
          <span className="abstract__name--jap">{pokemon['name-jap']}</span>
        </div>
        <div className="abstract__id">
          {`# ${pokemon.id}`}

        </div>
        <div className="abstract__size">
          <div className="abract__weight">
            {`${pokemon.weightkg} kg`}

          </div>
          <div className="abstract__height">
            {`${pokemon.heightm} m`}

          </div>
        </div>
      </div>
    </div>
  );
}

MainInfoComponent.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    'name-jap': PropTypes.string.isRequired,
    num: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    weightkg: PropTypes.number.isRequired,
    heightm: PropTypes.number.isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
