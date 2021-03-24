import React from 'react';
import ReactDOM from 'react-dom';
import '../../styles/modal-pokemon.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  loadPokemonDetail,
  loadPokemonAbilities,
  loadPokemonLearnset,
} from '../../redux/actions/pokemonActions';
import SpritesComponent from '../Pokedetail/SpritesComponent';
import colors from '../../constants/colors';

const Modal = ({
  isShowing, hide,
  pokemonBattle,
  pokemonPlayer,
}) => (isShowing ? ReactDOM.createPortal(
  <>
    <div className="modal-overlay" />
    <div className="modal-wrapper">
      <div className="modal-pokemon">
        <div className="pokemon__abstract" style={{ background: `linear-gradient(to right, ${colors[pokemonBattle?.types && pokemonBattle?.types[0].toLowerCase()]} 50%, ${colors[pokemonBattle?.types && pokemonBattle?.types[1]?.toLowerCase()] || colors[pokemonBattle?.types && pokemonBattle?.types[0].toLowerCase()]} 50%)` }}>
          <button type="button" className="modal-close nes-btn is-error" onClick={hide}>X</button>

          <div className="pokemon__abstract-main">
            <SpritesComponent pokemon={pokemonBattle} />
            <div className="abstract__data">
              <div className="abstract__name">
                <span className="abstract__name--eng">{pokemonBattle?.name}</span>
              </div>

              <div className="abstract__id">
                {`# ${pokemonBattle?.num}`}
              </div>
            </div>
          </div>
        </div>

        <div className="pokemon__abstract" style={{ background: `linear-gradient(to right, ${colors[pokemonPlayer?.types && pokemonPlayer?.types[0].toLowerCase()]} 50%, ${colors[pokemonPlayer?.types && pokemonPlayer?.types[1]?.toLowerCase()] || colors[pokemonPlayer?.types && pokemonPlayer?.types[0].toLowerCase()]} 50%)` }}>

          <div className="pokemon__abstract-main">
            <SpritesComponent pokemon={pokemonPlayer} />
            <div className="abstract__data">
              <div className="abstract__name">
                <span className="abstract__name--eng">{pokemonPlayer?.name}</span>
              </div>

              <div className="abstract__id">
                {`# ${pokemonPlayer?.num}`}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </>, document.body,
) : null);

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

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
