import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PropTypes from 'prop-types';
import 'react-svg-radar-chart/build/css/index.css';

import '../../styles/pokedetail.scss';
import '../../styles/_types.scss';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Moveset from './Moveset';
import MainInfo from './MainInfo';
import VisualInfoComponent from './VisualInfo';
import { loadPokemonDetail, loadPokedex, loadPokemonAbilities } from '../../redux/actions/pokedexActions';

export function PokeDetailComponent({
  pokedex, pokemon, pokemonAbilities, actions,
}) {
  const { pokeId } = useParams();

  // setPokemon(pokemons.find((poke) => poke.name.toLowerCase() === pokeId));

  useEffect(() => {
    if (!pokedex.length) {
      actions.loadPokedex();
    }
    actions.loadPokemonDetail(pokeId);
    actions.loadPokemonAbilities(pokeId);
  }, [pokedex.length]);

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
                {console.log(pokemonAbilities)}
                {pokemonAbilities && pokemonAbilities[1]?.name}
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
  pokemonAbilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  pokemon: PropTypes.objectOf(PropTypes.string).isRequired,
  actions: PropTypes.shape({
    loadPokemonDetail: PropTypes.func.isRequired,
    loadPokedex: PropTypes.func.isRequired,
    loadPokemonAbilities: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    pokemon: state.pokedexReducer.pokemon,
    pokedex: state.pokedexReducer.pokedex,
    pokemonAbilities: state.pokedexReducer.pokemonAbilities,

  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      loadPokemonDetail,
      loadPokedex,
      loadPokemonAbilities,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PokeDetailComponent);
