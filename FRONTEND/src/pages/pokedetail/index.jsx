import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from './propTypes';
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

import Pokeball from '../icons/Pokeball';

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
              <div className={`pokemon__abstract ${pokemon?.types && pokemon?.types[0].toLowerCase()}`}>
                <Pokeball />
                <MainInfo pokemon={pokemon} />
                <VisualInfoComponent pokemon={pokemon} pokedex={pokedex} />
              </div>
              <div className="pokemon__details">
                <div className="abstract__type">
                  {pokemon?.types && pokemon.types
                    .map((type) => <ButtonType type={type.toLowerCase()} />)}
                </div>
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
