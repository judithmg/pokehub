import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { pokemonSprites } from '../../constants/images';

export default function SpritesComponent({ pokemon }) {
  const [versionSprite, setVersionSprite] = useState('');
  const [pokemonShiny, setPokemonShiny] = useState(false);
  return (
    <>
      {pokemon?.num && (

        <div className="abstract__sprite">

          <div className="sprites__container">
            <>
              <img
                src={`${pokemonSprites.httpFrontSprite}${versionSprite}${pokemonShiny ? 'shiny/' : ''}${pokemon.num}.png`}
                alt="pokemon sprite"
              />
              {/* {only show Pokemon back sprite if it is available} */}
              {versionSprite !== 'versions/generation-i/red-blue/transparent/'
          && versionSprite !== 'versions/generation-i/yellow/transparent/'
          && versionSprite !== 'versions/generation-viii/icons/'
          && versionSprite !== 'versions/generation-ii/gold/transparent/'
          && versionSprite !== 'versions/generation-ii/silver/transparent/'
          && versionSprite !== 'versions/generation-vi/omegaruby-alphasapphire/'
          && versionSprite !== 'versions/generation-iii/emerald/'
          && versionSprite !== 'versions/generation-vi/x-y/'
          && versionSprite !== 'versions/generation-vii/ultra-sun-ultra-moon/'
          && (
          <img
            src={`${pokemonSprites.httpFrontSprite}${versionSprite}back/${pokemonShiny ? 'shiny/' : ''}${pokemon.num}.png`}
            alt="pokemon sprite"
          />
          )}
            </>
          </div>
          <div>
            <>
              {
          versionSprite !== 'versions/generation-i/red-blue/transparent/'
          && versionSprite !== 'versions/generation-i/yellow/transparent/'
          && versionSprite !== 'versions/generation-viii/icons/'
          && versionSprite !== 'versions/generation-ii/gold/transparent/'
          && versionSprite !== 'versions/generation-ii/silver/transparent/'
          && (
          <button
            type="button"
            onClick={() => setPokemonShiny(!pokemonShiny)}
          >
            { pokemonShiny
              ? <span>unshiny</span>
              : <span>shiny me</span> }
          </button>
          )
        }

              <select
                id="sprites"
                onChange={(e) => {
                  setVersionSprite(e.target.value);
                  setPokemonShiny(false);
                }}
              >
                <option value="" defaultValue>default sprite</option>
                {pokemon.num <= 151
          && (
          <>
            <option value="versions/generation-i/red-blue/transparent/">red-blue</option>
            <option value="versions/generation-i/yellow/transparent/">yellow</option>
            <option value="versions/generation-iii/firered-leafgreen/">firered-leafgreen</option>

          </>
          )}
                { pokemon.num < 252
          && (
          <>

            <option value="versions/generation-ii/crystal/transparent/">crystal</option>
            <option value="versions/generation-ii/gold/transparent/">gold</option>
            <option value="versions/generation-ii/silver/transparent/">silver</option>
          </>
          )}
                { pokemon.num < 387
          && (
          <>
            <option value="versions/generation-iii/emerald/">emerald</option>
            <option value="versions/generation-iii/ruby-sapphire/">ruby-sapphire</option>
          </>
          )}
                { pokemon.num < 494
          && (
          <>
            <option value="versions/generation-iv/diamond-pearl/">diamond-pearl</option>
            <option value="versions/generation-iv/heartgold-soulsilver/">heartgold-soulsilver</option>
            <option value="versions/generation-iv/platinum/">platinum</option>
          </>
          )}
                { pokemon.num < 650
          && (
          <>
            <option value="versions/generation-v/black-white/">black-white</option>

          </>
          )}
                { pokemon.num < 722
          && (
          <>
            <option value="versions/generation-vi/omegaruby-alphasapphire/">omegaruby-alphasapphire</option>
            <option value="versions/generation-vi/x-y/">x-y</option>
          </>
          )}
                { pokemon.num < 810
          && (<option value="versions/generation-vii/ultra-sun-ultra-moon/">ultra-sun-ultra-moon</option>)}

                <option value="versions/generation-viii/icons/">icons</option>
              </select>
            </>
          </div>

        </div>
      )}
    </>
  );
}

SpritesComponent.propTypes = {
  pokemon: PropTypes.shape({
    num: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
