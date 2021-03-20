import React, { useState, useEffect } from 'react';
import '../../styles/button.scss';

import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadPokemonFromType } from '../../redux/actions/pokedexActions';

export function ButtonTypeFilterComponent({ actions, type }) {
  const [pokeType, setPokeType] = useState('');

  useEffect(() => {
    if (pokeType.length) {
      actions.loadPokemonFromType(pokeType);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pokeType]);
  return (
    <button
      type="button"
      value={type}
      onClick={(event) => setPokeType(event.target.value)}
      className={`btn-type btn-type--filter ${type.toLowerCase()}`}
    >
      {type.toUpperCase()}
    </button>
  );
}

ButtonTypeFilterComponent.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ButtonTypeFilterComponent);
