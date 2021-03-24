import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  filterByName,
  loadPokemonsShown,
} from '../../redux/actions/pokedexActions';

import { PokedexBall } from '../Icons';
import '../../styles/modal-search.scss';

export function SearchModelComponent({ actions }) {
  const [querySearch, setQuerySearch] = useState('');
  const [isShowing, setIsShowing] = useState(false);

  const handleShowAll = () => {
    setQuerySearch('');
    actions.loadPokemonsShown(0);
  };

  return (
    <>
      <div className="wrapper">
        <PokedexBall className="search__svg" onClick={() => setIsShowing(!isShowing)} />
        {isShowing && (

        <div className="search__modal">
          <input type="text" onChange={(e) => setQuerySearch(e.target.value)} />
          <button className="pokedex__btn" type="button" onClick={() => actions.filterByName(querySearch)}>search</button>
          <button className="pokedex__btn" type="button" onClick={() => handleShowAll()}>show all</button>
        </div>
        )}
      </div>

    </>
  );
}
SearchModelComponent.propTypes = {

  actions: PropTypes.shape({
    filterByName: PropTypes.func.isRequired,
    loadPokemonsShown: PropTypes.func.isRequired,
  }).isRequired,
};

export function mapStateToProps(state) {
  return {
    pokedex: state.pokedexReducer.pokedex,
    pokemonsShown: state.pokedexReducer.pokemonsShown,
    pokemonNameFiltered: state.pokedexReducer.pokemonNameFiltered,

    moves: state.pokedexReducer.moves,
    abilities: state.pokedexReducer.abilities,
    learnsets: state.pokedexReducer.learnsets,
    page: state.pokedexReducer.page,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      filterByName,
      loadPokemonsShown,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchModelComponent);
