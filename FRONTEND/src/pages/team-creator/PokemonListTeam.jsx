/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPokemonToTeam } from '../../redux/actions/teamCreatorActions';
import { pokemonSprites } from '../../constants/images';

export function PokemonListTeamComponent({ actions, pokedex }) {
  return (
    <div className="team-creator__pokelist" data-aos="fade-in">
      {[...Array(893)].map((x, i) => (
        <img
          alt="pokemon icon"
          className="team-creator__pokeico"
          id={i + 1}
          key={Math.random()}
          src={`${pokemonSprites.httpIcon}${i + 1}.png`}
          onClick={(e) => actions.addPokemonToTeam(e.currentTarget.id,
            pokedex)}
        />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    teams: state.teamsReducer.teams,
    newTeam: state.teamsReducer.newTeam,
    pokedex: state.pokedexReducer.pokedex,

  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      addPokemonToTeam,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonListTeamComponent);
