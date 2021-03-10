import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  loadPokelist, loadMoves, loadLearnset, loadAbilities,
} from '../../redux/actions/pokedexActions';
import PokemonList from './PokemonList';

import keyGenerator from '../../assets/keyGenerator';

import '../../styles/pokedex.scss';

export function PokedexComponent({ pokedex, actions }) {
  useEffect(() => {
    actions.loadAbilities();
    actions.loadMoves();
    actions.loadLearnset();
    actions.loadPokelist();
  }, []);
  return (
    <>
      <section className="pokedex__container">
        <table>
          <thead>
            <tr className="pokedex__header">
              <th className="pokedex__pokemon-id pokedex__pokemon-header">
                {' '}
              </th>
              <th className="pokedex__pokemon-sprite pokedex__pokemon-header">{' '}</th>
              <th className="pokedex__pokemon-name pokedex__pokemon-header">
                {' '}
              </th>
              <th className="pokedex__pokemon-type pokedex__pokemon-header">
                {' '}
              </th>
              <th className="pokedex__pokemon-stats pokedex__pokemon-header --desktop">
                <p>ATK</p>
                <p>HP</p>
                <p>DEF</p>
                <p>SP. ATK</p>
                <p>SP.DEF </p>
                <p>SPEED</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {pokedex && pokedex.map((pokemon) => (
              <PokemonList pokemon={pokemon} key={keyGenerator(5)} />
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

PokedexComponent.propTypes = {
  pokedex: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.shape({
    loadPokelist: PropTypes.func.isRequired,
    loadMoves: PropTypes.func.isRequired,
    loadLearnset: PropTypes.func.isRequired,
    loadAbilities: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    pokedex: state.pokedexReducer.pokedex,
    moves: state.pokedexReducer.moves,
    abilities: state.pokedexReducer.abilities,
    learnset: state.pokedexReducer.learnset,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      loadPokelist, loadMoves, loadLearnset, loadAbilities,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PokedexComponent);
