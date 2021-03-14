/* eslint-disable no-unused-expressions */
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Pokeball from '../icons/Pokeball';
import { pokemonSprites } from '../../constants/images';

export default function SpritesComponent({ pokemon }) {
  const [pokemonSprite, setPokemonSprite] = useState(true);
  return (
    <>
      {pokemon && (

        <div className="abstract__sprite">
          <div className="svg-container"><Pokeball /></div>
          <img
            src={`${pokemonSprite
              ? pokemonSprites.httpSprite : pokemonSprites.httpShinySprite}${pokemon.num}.png`}
            alt="pokemon sprite"
          />
          <img
            src={`${pokemonSprite
              ? pokemonSprites.httpBackSprite : pokemonSprites.httpBackShinySprite}${pokemon.num}.png`}
            alt="pokemon sprite"
          />
          <button type="button" onClick={() => setPokemonSprite(!pokemonSprite)}>{pokemonSprite ? <span>shiny</span> : <span>default</span> }</button>
        </div>
      )}
    </>
  );
}

SpritesComponent.propTypes = {
  pokemon: PropTypes.shape({
    num: PropTypes.number.isRequired,
  }).isRequired,
};
