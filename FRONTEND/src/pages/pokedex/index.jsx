import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactPaginate from 'react-paginate';

import {
  loadPokedex, loadMoves, loadLearnset, loadAbilities, loadPokemonShown,
} from '../../redux/actions/pokedexActions';
import PokemonList from './PokemonList';

import keyGenerator from '../../assets/keyGenerator';

import '../../styles/pokedex.scss';

export function PokedexComponent({
  page = 0, pokemonShown, pokedex, actions,
}) {
  const [pagination, setPagination] = useState(1);
  useEffect(() => {
    if (!pokedex.length) {
      actions.loadAbilities();
      actions.loadMoves();
      actions.loadLearnset();
      actions.loadPokedex();
    }
    actions.loadPokemonShown(page);
  }, [pokedex.length, page]);

  useEffect(() => {
    actions.loadPokemonShown(pagination);
  }, [pagination]);
  return (
    <>
      <section className="pokedex__container" id="jump">
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
            {pokemonShown && pokemonShown.map((pokemon) => (
              <PokemonList pokemon={pokemon} key={keyGenerator(5)} />
            ))}
          </tbody>
          <ReactPaginate
            pageCount={45}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            previousLabel="previous"
            nextLabel="next"
            breakLabel="..."
            containerClassName="pokedex__pagination"
            pageClassName="pokedex__pagination-page"
            activeClassName="pokedex__pagination-active"
            nextLinkClassName="pokedex__pagination-next"
            previosLinkClassName="pokedex__pagination-previous"
            onPageChange={({ selected }) => setPagination(selected)}
          />
        </table>
      </section>
    </>
  );
}

PokedexComponent.propTypes = {
  pokemonShown: PropTypes.arrayOf(PropTypes.object).isRequired,
  pokedex: PropTypes.arrayOf(PropTypes.object).isRequired,
  page: PropTypes.number.isRequired,
  actions: PropTypes.shape({
    loadPokedex: PropTypes.func.isRequired,
    loadMoves: PropTypes.func.isRequired,
    loadLearnset: PropTypes.func.isRequired,
    loadAbilities: PropTypes.func.isRequired,
    loadPokemonShown: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    pokedex: state.pokedexReducer.pokedex,
    page: state.pokedexReducer.page,
    pokemonShown: state.pokedexReducer.pokemonShown,
    moves: state.pokedexReducer.moves,
    abilities: state.pokedexReducer.abilities,
    learnset: state.pokedexReducer.learnset,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      loadPokedex, loadMoves, loadLearnset, loadAbilities, loadPokemonShown,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PokedexComponent);
