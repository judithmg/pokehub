/* eslint-disable react/prop-types */
import React from 'react';

import Pokeball from '../../assets/icons/Pokeball';

export default function MainInfoComponent({ pokemon }) {
  return (
    <div className="pokemon__abstract-main">
      <div className="abstract__sprite">
        <div className="svg-container"><Pokeball /></div>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.num}.png`} alt="pokemon sprite" />
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
