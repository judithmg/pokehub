import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useParams } from 'react-router-dom';

import { loadOneTeam } from '../../redux/actions/teamManagerActions';
import {
  loadMoves,
  loadLearnsets,
} from '../../redux/actions/pokedexActions';

import PokemonButton from '../shared/PokemonButton';
import '../../styles/team-detail.scss';

import { getUserInfo } from '../../redux/actions/userActions';
import { useAuth } from '../../context/AuthContext';
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
  const { currentUser } = useAuth();
  const useremail = currentUser.email;
  const { isShowing, toggle } = useModal();

  useEffect(() => {
    if (!user.email) {
      actions.getUserInfo(useremail);
    }
  }, [user]);

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
    if (teams.length && user.email) {
      actions.loadOneTeam(teamId, moves, learnsets);
    }
  }, [teamId, moves.length, learnsets.length, teams.length]);

  return (
    moves.length && learnsets.length && (
      <section data-aos="fade-in" className="teamdetail__container">
        <div className="teamdetail__pokeball">
          <PokemonButton callback={toggle} text="BATTLE!" height="100" width="300" />
        </div>
        <Modal
          isShowing={isShowing}
          hide={toggle}
        />

        {
      team
        && team?.pokemons?.map((pokemon) => (
          pokemon.learnset && (
            <>
              <TeamDetailPokemon
                pokemon={pokemon}
                key={Math.random()}
              />
            </>
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
      loadMoves,
      loadLearnsets,
      getUserInfo,
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
    loadMoves: PropTypes.func.isRequired,
    loadLearnsets: PropTypes.func.isRequired,
    getUserInfo: PropTypes.func.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  teams: PropTypes.arrayOf(PropTypes.object).isRequired,

};
