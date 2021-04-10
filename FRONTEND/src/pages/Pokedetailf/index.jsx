import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  loadPokemonLearnset,
  loadPokemonDetail,
  loadPokemonAbilities,
} from '../../redux/actions/pokemonActions';

import 'react-svg-radar-chart/build/css/index.css';
import '../../styles/pokedetail.scss';
import '../../styles/_types.scss';
import colors from '../../constants/colors';

import Moveset from './MovesetComponent';
import ButtonType from '../shared/ButtonType';
import PokemonAbilities from './AbilitiesComponent';
import MainInfo from './MainInfoComponent';
import VisualInfoComponent from './VisualInfoComponent';
import { Pokeball } from '../Icons';

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
              <div className="pokemon__abstract" style={{ background: `linear-gradient(to right, ${colors[pokemon?.types && pokemon?.types[0].toLowerCase()]} 50%, ${colors[pokemon?.types && pokemon?.types[1]?.toLowerCase()] || colors[pokemon?.types && pokemon?.types[0].toLowerCase()]} 50%)` }}>

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

PokeDetailComponent.propTypes = {
  pokedex: PropTypes.arrayOf(PropTypes.object).isRequired,
  abilities: PropTypes.arrayOf(PropTypes.object).isRequired,
  moves: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    desc: PropTypes.string,
    shortDesc: PropTypes.string,
    pp: PropTypes.number,
    basePower: PropTypes.number,
    type: PropTypes.string,
    accuracy: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
    ])),
  })).isRequired,
  learnsets: PropTypes.arrayOf(PropTypes.object).isRequired,

  pokemonLearnset: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string,
    desc: PropTypes.string,
    shortDesc: PropTypes.string,
    pp: PropTypes.number,
    basePower: PropTypes.number,
    type: PropTypes.string,
    accuracy: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
    ])),
  }))),
  pokemonAbilities: PropTypes.arrayOf(PropTypes.object).isRequired,
  pokemon: PropTypes.shape({
    genderRatio: PropTypes.shape({
      M: PropTypes.number,
      F: PropTypes.number,
    }),
    name: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.string),
  }),

  actions: PropTypes.shape({

    loadPokemonLearnset: PropTypes.func.isRequired,
    loadPokemonDetail: PropTypes.func.isRequired,
    loadPokemonAbilities: PropTypes.func.isRequired,

  }).isRequired,
};

PokeDetailComponent.defaultProps = {
  pokemon: undefined,
  pokemonLearnset: undefined,
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
