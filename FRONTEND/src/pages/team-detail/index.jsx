/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useParams, Link } from 'react-router-dom';

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
          <Link to="/battle"><PokemonButton text="BATTLE!" /></Link>
        </div>

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
