import React, { useState, useEffect } from 'react';
import '../../styles/button.scss';

import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadPokemonFromType } from '../../redux/actions/pokedexActions';

export function ButtonTypeComponent({ actions, text, type }) {
  const [pokeType, setPokeType] = useState('');

  useEffect(() => {
    actions.loadPokemonFromType(pokeType);
    setPokeType('hello');
  }, [pokeType]);
  return (
    <button type="button" value={type.toLowerCase()} onClick={(event) => console.log(event.target.value)} className={`btn-type ${type.toLowerCase()}`}>{text.toUpperCase()}</button>
  );
}

ButtonTypeComponent.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  actions: PropTypes.shape({
    loadPokemonFromType: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    pokemonsShown: state.pokedexReducer.pokemonsShown,
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
