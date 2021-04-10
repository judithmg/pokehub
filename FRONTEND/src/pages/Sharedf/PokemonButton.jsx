import React from 'react';
import { PropTypes } from 'prop-types';

import '../../styles/pokemon-button.scss';

export default function PokemonButton({
  text, height, width, callback,
}) {
  return (
    <div className="pokebtn-group">
      <div className="pokebtn ball">
        <button onClick={callback} type="button" className="pokemonbutton" style={{ height: `${height}px`, width: `${width}px` }}>
          <div className="pokemon-ball" />
          <p className="button-text">
            {text}
            <span data-letters="GO!" />
            <span data-letters="GO!" />
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
  callback: PropTypes.func.isRequired,

};
