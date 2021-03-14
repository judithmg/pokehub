/* eslint-disable no-unused-expressions */
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Pokeball from '../icons/Pokeball';
import { pokemonSprites } from '../../constants/images';

export default function SpritesComponent({ pokemon }) {
  const [pokemonSprite, setPokemonSprite] = useState(true);
  const [versionSprite, setVersionSprite] = useState('');
  const [pokemonShiny, setPokemonShiny] = useState(false);
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

          <img
            src={`${pokemonSprites.httpVersionsFront}${versionSprite}${pokemonShiny ? '/shiny' : ''}/${pokemon.num}.png`}
            alt="pokemon sprite"
          />
          <button type="button" onClick={() => setPokemonSprite(!pokemonSprite)}>{pokemonSprite ? <span>shiny</span> : <span>default</span> }</button>
          <button type="button" style={{ backgroundColor: 'red' }} onClick={() => setPokemonShiny(!pokemonShiny)}>{pokemonSprite ? <span>shiny</span> : <span>default</span> }</button>
          <select id="sprites" onChange={(e) => setVersionSprite(e.target.value)}>
            <option value="generation-i/red-blue">red-blue</option>
            <option value="generation-i/yellow">yellow</option>
            <option value="generation-ii/crystal">crystal</option>
            <option value="generation-ii/gold">gold</option>
            <option value="generation-ii/silver">silver</option>
            <option value="generation-iii/emerald">emerald</option>
            <option value="generation-iii/firered-leafgreen">firered-leafgreen</option>
            <option value="generation-iii/ruby-sapphire">ruby-sapphire</option>
            <option value="generation-iv/diamond-pearl">diamond-pearl</option>
            <option value="generation-iv/heartgold-soulsilver">heartgold-soulsilver</option>
            <option value="generation-iv/platinum">platinum</option>
            <option value="generation-v/black-white">black-white</option>
            <option value="generation-vi/omegaruby-alphasapphire">omegaruby-alphasapphire</option>
            <option value="generation-vi/x-y">x-y</option>
            <option value="generation-vii/ultra-sun-ultra-moon">ultra-sun-ultra-moon</option>
            <option value="generation-viii/icons">icons</option>
          </select>
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
