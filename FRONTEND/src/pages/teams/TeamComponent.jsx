import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pokemonSprites } from '../../constants/images';
import { deleteOneTeam } from '../../redux/actions/teamCreatorActions';

export function TeamComponent({ poketeam, actions, user }) {
  return (
    <div className="teams__team">
      <div className="teams__sprites">
        {
        poketeam.pokemons
        && poketeam.pokemons.map((pokemon) => (
          <img
            src={`${pokemonSprites.httpFrontSprite}${pokemon.num}.png`}
            alt="pokemon sprite"
            key={Math.random()}
          />
        ))
        }
      </div>
      {poketeam && (
      <div className="teams__info">
        <span className="teams__id">
          <Link to={`/team-detail/${poketeam.id}`}>
            {`# ${poketeam.id}`}
          </Link>
        </span>
        <button className="teams__delete-btn" type="button" onClick={() => actions.deleteOneTeam(poketeam, user)}>delete</button>
      </div>
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

TeamComponent.propTypes = {
  actions: PropTypes.shape({
    deleteOneTeam: PropTypes.func.isRequired,
  }).isRequired,
  user: PropTypes.string.isRequired,
  poketeam: PropTypes.shape({
    id: PropTypes.string,
    pokemons: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
