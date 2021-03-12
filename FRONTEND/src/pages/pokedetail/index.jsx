import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import 'react-svg-radar-chart/build/css/index.css';
import '../../styles/pokedetail.scss';
import '../../styles/_types.scss';

import keyGenerator from '../../assets/keyGenerator';
import Moveset from './Moveset';
import PokemonAbilities from './Abilities';
import MainInfo from './MainInfo';
import VisualInfoComponent from './VisualInfo';

import {
  loadPokedex,
  loadMoves,
  loadLearnsets,
  loadAbilities,

  loadPokemonLearnset,
  loadPokemonDetail,
  loadPokemonAbilities,
} from '../../redux/actions/pokedexActions';

export function PokeDetailComponent({
  pokemonAbilities,
  pokemonLearnset,
  pokemon,
  actions,
  pokedex,
  moves,
  abilities,
  learnsets,
}) {
  const { pokeId } = useParams();

  useEffect(() => {
    if (!pokedex.length || !abilities.length || !moves.length || !learnsets.length) {
      actions.loadLearnsets();
      actions.loadAbilities();
      actions.loadMoves();
      actions.loadPokedex();
    }
    actions.loadPokemonDetail(pokeId);
    actions.loadPokemonLearnset(pokeId);
    actions.loadPokemonAbilities(pokeId);
  }, [learnsets.length, pokedex.length, moves.length]);

  useEffect(() => {
    actions.loadPokemonDetail(pokeId);
    actions.loadPokemonLearnset(pokeId);
    actions.loadPokemonAbilities(pokeId);
  }, [pokeId]);

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
              {
              pokemonAbilities
              && pokemonAbilities.map((ability) => (
                <PokemonAbilities
                  ability={ability}
                  key={keyGenerator(5)}
                />
              ))
              }
            </div>

            <div className="pokemon__moves">
              <span className="pokemon__moves-title">
                MOVES
              </span>
              {
                  pokemonLearnset
                  && <Moveset moves={pokemonLearnset} />
                }
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
  abilities: PropTypes.arrayOf(PropTypes.object).isRequired,
  moves: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    desc: PropTypes.string,
    shortDesc: PropTypes.string,
    pp: PropTypes.number,
    basePower: PropTypes.number,
    type: PropTypes.string,
    accuracy: PropTypes.arrayOf(PropTypes.number),
  }))).isRequired,
  learnsets: PropTypes.arrayOf(PropTypes.object).isRequired,

  pokemonAbilities: PropTypes.arrayOf(PropTypes.object).isRequired,
  pokemonLearnset: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    desc: PropTypes.string,
    shortDesc: PropTypes.string,
    pp: PropTypes.number,
    basePower: PropTypes.number,
    type: PropTypes.string,
    accuracy: PropTypes.arrayOf(PropTypes.number),
  }))).isRequired,
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,

  actions: PropTypes.shape({
    loadPokedex: PropTypes.func.isRequired,
    loadMoves: PropTypes.func.isRequired,
    loadLearnsets: PropTypes.func.isRequired,
    loadAbilities: PropTypes.func.isRequired,

    loadPokemonLearnset: PropTypes.func.isRequired,
    loadPokemonDetail: PropTypes.func.isRequired,
    loadPokemonAbilities: PropTypes.func.isRequired,
  }).isRequired,
};

export function mapStateToProps(state) {
  return {
    pokedex: state.pokedexReducer.pokedex,
    moves: state.pokedexReducer.moves,
    abilities: state.pokedexReducer.abilities,
    learnsets: state.pokedexReducer.learnsets,

    pokemon: state.pokedexReducer.pokemon,
    pokemonAbilities: state.pokedexReducer.pokemonAbilities,
    pokemonLearnset: state.pokedexReducer.pokemonLearnset,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      loadPokemonDetail,
      loadPokedex,
      loadPokemonAbilities,
      loadMoves,
      loadLearnsets,
      loadAbilities,
      loadPokemonLearnset,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PokeDetailComponent);
