/* eslint-disable no-mixed-operators */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'react-svg-radar-chart/build/css/index.css';
import '../../styles/pokedetail.scss';
import '../../styles/_types.scss';

import Moveset from './MovesetComponent';
import ButtonType from '../shared/ButtonType';
import PokemonAbilities from './AbilitiesComponent';
import MainInfo from './MainInfoComponent';
import VisualInfoComponent from './VisualInfoComponent';

import {
  loadPokemonLearnset,
  loadPokemonDetail,
  loadPokemonAbilities,
} from '../../redux/actions/pokemonActions';

import { Pokeball } from '../Icons';

const colors = {
  normal: '#babaae',
  fighting: '#a75543',
  flying: '#7992c9',
  poison: '#a95ca0',
  ground: '#eecc55',
  rock: '#ccbd72',
  bug: '#c2d21e',
  ghost: '#7975d7',
  steel: '#c4c2db',
  fire: '#fa5643',
  water: '#56adff',
  grass: '#8cd750',
  electric: '#fde139',
  psychic: '#fa65b4',
  ice: '#96f1ff',
  dragon: '#8673ff',
  dark: '#8d6855',
  fairy: '#f9aeff',
};

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
    const id = pokeId?.toLowerCase();
    actions.loadPokemonDetail(id);
    actions.loadPokemonLearnset(id);
    actions.loadPokemonAbilities(id);
  }, [pokeId, pokedex.length, abilities.length, moves.length, learnsets.length]);

  return (
    <>
      <section data-aos="fade-in" className="pokedetail__container">

        { pokemon && (
          <>
            <div className="pokemon--desktop">
              <div className="pokemon__abstract" style={{ background: `linear-gradient(to right, ${colors[pokemon?.types && pokemon?.types[0].toLowerCase()]} 50%, ${colors[pokemon?.types && pokemon?.types[1].toLowerCase()] || colors[pokemon?.types && pokemon?.types[0].toLowerCase()]} 50%)` }}>

                <Pokeball />
                <MainInfo pokemon={pokemon} />
                <VisualInfoComponent pokemon={pokemon} pokedex={pokedex} />
              </div>
              <div className="pokemon__details">
                <div className="abstract__type --desktop">
                  {pokemon?.types && pokemon.types
                    .map((type) => (
                      <ButtonType
                        type={type.toLowerCase()}
                        key={Math.random()}
                      />
                    ))}
                </div>
                {pokemon?.genderRatio ? (
                  <div className="pokemon__genderratio">
                    <span>
                      {`${pokemon?.genderRatio?.M * 100}%`}
                      <span className="symbol--male">♂</span>
                    </span>
                    <span>
                      {`${pokemon?.genderRatio?.F * 100}%`}
                      <span className="symbol--female">⧬</span>
                    </span>

                  </div>
                ) : ''}
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
              </div>
            </div>
            <div className="pokemon__moves">
              <span className="pokemon__moves-title --hidden">
                MOVES
              </span>
              {
                  pokemonLearnset
                  && <Moveset moves={pokemonLearnset} />
                }
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
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      loadPokemonDetail,
      loadPokemonAbilities,
      loadPokemonLearnset,

    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PokeDetailComponent);
