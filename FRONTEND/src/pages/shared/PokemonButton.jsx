import React from 'react';
import { PropTypes } from 'prop-types';

import '../../styles/pokemon-button.scss';

export default function PokemonButton({ text, height, width }) {
  return (
    <div className="pokebtn-group">
      <div className="pokebtn ball">
        <button type="button" className="pokemonbutton" style={{ height: `${height}px`, width: `${width}px` }}>
          <div className="pokemon-ball" />
          <p className="button-text">
            {text}
            <span data-letters="Go!" />
            <span data-letters="Go!" />
          </p>
        </button>
      </div>
    </div>
  );
}

PokemonButton.propTypes = {
  text: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,

};
