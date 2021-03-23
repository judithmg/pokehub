import React from 'react';
import { PropTypes } from 'prop-types';

import '../../styles/pokemon-button.scss';

export default function PokemonButton({ text }) {
  return (
    <div className="pokebtn-group">
      <div className="pokebtn ball">
        <button type="button" className="pokemonbutton">
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

};
