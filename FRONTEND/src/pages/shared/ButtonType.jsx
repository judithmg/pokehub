import React, { useState, useEffect } from 'react';
import '../../styles/button.scss';

import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadPokemonFromType } from '../../redux/actions/pokedexActions';

export function ButtonTypeComponent({ actions, type }) {
  const [pokeType, setPokeType] = useState('');

  useEffect(() => {
    // eslint-disable-next-line no-debugger
    debugger;
    if (pokeType.length) {
      console.log(pokeType);
      actions.loadPokemonFromType(pokeType);
    }
  }, [pokeType]);
  return (
    <button
      type="button"
      value={type}
      onClick={(event) => setPokeType(event.target.value)}
      className={`btn-type ${type.toLowerCase()}`}
    >
      {type.toUpperCase()}
    </button>
  );
}

ButtonTypeComponent.propTypes = {
  type: PropTypes.string.isRequired,
  actions: PropTypes.shape({
    loadPokemonFromType: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    pokemonTypeFiltered: state.pokedexReducer.pokemonTypeFiltered,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      loadPokemonFromType,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonTypeComponent);
