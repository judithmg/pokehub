/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pokemonSprites } from '../../constants/images';
import { deleteOneTeam } from '../../redux/actions/teamManagerActions';

export function TeamComponent({ poketeam, actions }) {
  return (
    <div className="teams__team">
      <div className="teams__sprites">
        {
        poketeam
        && poketeam.pokemons.map((pokemon) => (
          <img
            src={`${pokemonSprites.httpSprite}${pokemon.num}.png`}
            alt="pokemon sprite"
          />
        ))
        }
      </div>
      {poketeam && (
      <>
        <span className="teams__id">
          <Link to={`/team-detail/${poketeam.id}`}>
            {`# ${poketeam.id}`}
          </Link>
        </span>
        <button type="button" onClick={() => actions.deleteOneTeam(poketeam.id)}>delete</button>
      </>
      )}
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
      deleteOneTeam,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamComponent);
