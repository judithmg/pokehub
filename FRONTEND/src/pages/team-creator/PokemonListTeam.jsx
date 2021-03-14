/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPokemonToTeam } from '../../redux/actions/teamCreatorActions';
import { pokemonSprites } from '../../constants/images';

export function PokemonListTeamComponent({ actions }) {
  return (
    <div className="team-creator__pokelist">
      {[...Array(893)].map((x, i) => (
        <img
          alt="pokemon icon"
          className="team-creator__pokeico"
          src={`${pokemonSprites.httpIcon}${i + 1}.png`}
          onClick={() => actions.addPokemonToTeam()}
        />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    teams: state.teamsReducer.teams,
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
