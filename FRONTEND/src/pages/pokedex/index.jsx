import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactPaginate from 'react-paginate';

import {
  loadPokedex,
  loadPokemonsShown,
} from '../../redux/actions/pokedexActions';
import PokemonList from './PokemonList';

import '../../styles/pokedex.scss';

export function PokedexComponent({
  page = 0,
  pokemonsShown,
  actions,
  pokedex,
}) {
  const [pagination, setPagination] = useState(1);
  useEffect(() => {
    if (!pokedex?.length) {
      actions.loadPokedex();
      actions.loadPokemonsShown(page);
    }
  }, [pokedex?.length]);

  useEffect(() => {
    actions.loadPokemonsShown(pagination);
  }, [pagination, pokedex.length]);
  return (
    <>
      <section data-aos="fade-in" className="pokedex__container">
        <table>
          <thead>
            <tr data-aos="fade-in" className="pokedex__header">
              <th className="pokedex__pokemon-id --hidden">-</th>
              <th className="pokedex__pokemon-sprite --hidden">-</th>
              <th className="pokedex__pokemon-name --hidden">-</th>
              <th className="pokedex__pokemon-type --hidden">-</th>
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
            {pokemonsShown && pokemonsShown.map((pokemon) => (
              <PokemonList pokemon={pokemon} key={Math.random()} />
            ))}
          </tbody>
        </table>
        { pokemonsShown.length < 21 && (
        <ReactPaginate
          pageCount={45}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          initialPage={0}
          previousLabel="previous"
          nextLabel="next"
          breakLabel="..."
          containerClassName="pokedex__pagination"
          pageClassName="pokedex__pagination-page"
          activeClassName="pokedex__pagination-active"
          nextLinkClassName="pokedex__pagination-next"
          previosLinkClassName="pokedex__pagination-previous"
          onPageChange={({ selected }) => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setPagination(selected);
          }}
        />
        )}

      </section>
    </>
  );
}

PokedexComponent.propTypes = {
  pokedex: PropTypes.arrayOf(PropTypes.object).isRequired,
  pokemonsShown: PropTypes.arrayOf(PropTypes.object).isRequired,

  page: PropTypes.number.isRequired,
  actions: PropTypes.shape({
    loadPokedex: PropTypes.func.isRequired,
    loadMoves: PropTypes.func.isRequired,
    loadLearnsets: PropTypes.func.isRequired,
    loadAbilities: PropTypes.func.isRequired,

    loadPokemonsShown: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    pokedex: state.pokedexReducer.pokedex,
    pokemonsShown: state.pokedexReducer.pokemonsShown,

    moves: state.pokedexReducer.moves,
    abilities: state.pokedexReducer.abilities,
    learnsets: state.pokedexReducer.learnsets,
    page: state.pokedexReducer.page,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      loadPokedex,
      loadPokemonsShown,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PokedexComponent);
