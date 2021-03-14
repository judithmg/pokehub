import React, { useEffect } from 'react';
// import MoonLoader from 'react-spinners/MoonLoader';
import { useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from './propTypes';
import 'react-svg-radar-chart/build/css/index.css';
import '../../styles/pokedetail.scss';
import '../../styles/_types.scss';

import Moveset from './Moveset';
import PokemonAbilities from './Abilities';
import MainInfo from './MainInfo';
import VisualInfoComponent from './VisualInfo';

import {
  loadPokedex,
  loadMoves,
  loadLearnsets,
  loadAbilities,
} from '../../redux/actions/pokedexActions';

import {
  loadPokemonLearnset,
  loadPokemonDetail,
  loadPokemonAbilities,
} from '../../redux/actions/pokemonActions';

// import {
//   abilitiesLoading, pokedexLoading,
//   movesLoading,
//   learnsetsLoading,
// } from '../../redux/actions/loadingActions';

export function PokeDetailComponent({
  pokemonAbilities,
  pokemonLearnset,
  pokemon,
  actions,
  pokedex,
  moves,
  abilities,
  learnsets,
  // abilitiesLoadingBool,
  // pokedexLoadingBool,
  // movesLoadingBool,
  // learnsetsLoadingBool,
}) {
  const { pokeId } = useParams();

  useEffect(() => {
    if (!pokedex.length) {
      actions.loadPokedex();
    }
  }, [pokedex.length]);

  useEffect(() => {
    if (!abilities.length) {
      actions.loadAbilities();
    }
  }, [abilities.length]);
  useEffect(() => {
    if (!moves.length) {
      actions.loadMoves();
    }
  }, [moves.length]);
  useEffect(() => {
    if (!learnsets.length) {
      actions.loadLearnsets();
    }
  }, [learnsets.length]);

  useEffect(() => {
    actions.loadPokemonDetail(pokeId);
    actions.loadPokemonLearnset(pokeId);
    actions.loadPokemonAbilities(pokeId);
    // actions.abilitiesLoading();
    // actions.pokedexLoading();
    // actions.movesLoading();
    // actions.learnsetsLoading();
  }, [pokeId, pokedex.length, abilities.length, moves.length, learnsets.length]);

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
                  key={Math.random()}
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

PokeDetailComponent.propTypes = PropTypes;

export function mapStateToProps(state) {
  return {
    pokedex: state.pokedexReducer.pokedex,
    moves: state.pokedexReducer.moves,
    abilities: state.pokedexReducer.abilities,
    learnsets: state.pokedexReducer.learnsets,

    pokemon: state.pokedexReducer.pokemon,
    pokemonAbilities: state.pokedexReducer.pokemonAbilities,
    pokemonLearnset: state.pokedexReducer.pokemonLearnset,

    abilitiesLoadingBool: state.pokedexReducer.abilitiesLoadingBool,
    pokedexLoadingBool: state.pokedexReducer.pokedexLoadingBool,
    movesLoadingBool: state.pokedexReducer.movesLoadingBool,
    learnsetsLoadingBool: state.pokedexReducer.learnsetsLoadingBool,
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
      // abilitiesLoading,
      // pokedexLoading,
      // movesLoading,
      // learnsetsLoading,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PokeDetailComponent);
