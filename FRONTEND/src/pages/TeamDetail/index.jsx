import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useParams } from 'react-router-dom';

import { loadOneTeam } from '../../redux/actions/teamManagerActions';

import PokemonButton from '../Shared/PokemonButton';
import '../../styles/team-detail.scss';

import TeamDetailPokemon from './TeamDetailPokemon';
import useModal from '../../hooks/useModal';
import Modal from './Modal';

export function TeamDetailComponent({
  team,
  teams,
  actions,
  moves,
  learnsets,
  user,
}) {
  const { teamId } = useParams();
  const { isShowing, toggle } = useModal();

  useEffect(() => {
    if (teams.length && user.email) {
      actions.loadOneTeam(teamId, moves, learnsets);
    }
  }, [teamId, moves.length, learnsets.length, teams.length]);

  return (
    moves && learnsets && team && (
      <section data-aos="fade-in" className="teamdetail__container">
        <div className="teamdetail__pokeball">
          <PokemonButton callback={toggle} text="BATTLE!" height="100" width="300" />
        </div>
        <Modal
          isShowing={isShowing}
          hide={toggle}
          teamId={teamId}
        />

        {
      team
        && team?.pokemons?.map((pokemon) => (
          pokemon.learnset && (
          <TeamDetailPokemon
            pokemon={pokemon}
            key={Math.random()}
          />
          )
        ))
      }
      </section>
    )
  );
}

export function mapStateToProps(state) {
  return {
    teams: state.teamsReducer.teams,
    team: state.teamsReducer.team,
    moves: state.pokedexReducer.moves,
    learnsets: state.pokedexReducer.learnsets,
    user: state.userReducer.user,
  };
}
export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      loadOneTeam,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamDetailComponent);

TeamDetailComponent.propTypes = {
  team: PropTypes.shape({
    id: PropTypes.string,
    pokemons: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  moves: PropTypes.arrayOf(PropTypes.object).isRequired,
  learnsets: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.shape({
    loadOneTeam: PropTypes.func.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  teams: PropTypes.arrayOf(PropTypes.object).isRequired,

};
