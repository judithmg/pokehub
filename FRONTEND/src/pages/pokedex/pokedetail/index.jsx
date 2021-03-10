import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PropTypes from 'prop-types';
import 'react-svg-radar-chart/build/css/index.css';

// import pokemons from '../../../data/pokemon.json';

import '../../../styles/pokedetail.scss';
import '../../../styles/_types.scss';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Moveset from './Moveset';
import MainInfo from './MainInfo';
import VisualInfoComponent from './VisualInfo';
import { loadPokemonDetail, loadPokelist } from '../../../redux/actions/pokedexActions';

export function PokeDetailComponent({ pokedex, pokemon, actions }) {
  // eslint-disable-next-line no-debugger
  debugger;
  const { pokeId } = useParams();

  // setPokemon(pokemons.find((poke) => poke.name.toLowerCase() === pokeId));

  useEffect(() => {
    if (!pokedex.length) {
      actions.loadPokelist();
    }
    actions.loadPokemonDetail(pokeId);
  }, []);

  return (
    <>
      <section>
        { pokemon && (
        <>
          <div className={`pokemon__abstract ${pokemon.types && pokemon.types[0].toLowerCase()}`}>
            <MainInfo pokemon={pokemon} />
            <VisualInfoComponent pokemon={pokemon} />
          </div>
          <div className="pokemon__details">
            <div className="pokemon__ability">
              <span className="pokemon__ability-title">ABILITY</span>
              <span className="pokemon__ability-name">
                {pokemon.abilities && pokemon.abilities[0]}
                {' '}
                {pokemon.abilities && pokemon.abilities[0]}
              </span>
              <span className="pokemon__ability.description">kdjksf dskfjsd fskdjf fklsdj dlkj</span>
            </div>
            <div className="pokemon__moves">
              <div className="pokemon__moves-lvl">
                <span className="pokemon__moves-title">
                  MOVES
                </span>
                <Moveset moves={pokemon.name} />
              </div>
              <div className="pokemon__moves-egg" />
            </div>
          </div>
        </>
        )}
      </section>
    </>
  );
}

PokeDetailComponent.propTypes = {
  pokedex: PropTypes.arrayOf(PropTypes.object).isRequired,
  pokemon: PropTypes.objectOf(PropTypes.string).isRequired,
  actions: PropTypes.shape({
    loadPokemonDetail: PropTypes.func.isRequired,
    loadPokelist: PropTypes.func.isRequired,

  }).isRequired,
};

function mapStateToProps(state) {
  return {
    pokemon: state.pokedexReducer.pokemon,
    pokedex: state.pokedexReducer.pokedex,

  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ loadPokemonDetail, loadPokelist }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PokeDetailComponent);
