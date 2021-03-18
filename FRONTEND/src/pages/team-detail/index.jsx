/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useParams } from 'react-router-dom';
import { loadOneTeam, loadTeams, modifyTeam } from '../../redux/actions/teamManagerActions';
import {
  loadMoves,
  loadLearnsets,
} from '../../redux/actions/pokedexActions';

import { getUserInfo } from '../../redux/actions/userActions';
import { useAuth } from '../../context/AuthContext';

import TeamDetailPokemon from './TeamPokemonComponent';

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
    if (!teams?.length) {
      actions.loadTeams(user._id);
    }
  }, [teams?.length]);

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
      actions.loadOneTeam(+teamId, moves, learnsets);
    }
  }, [teamId, moves.length, learnsets.length, teams.length]);

  return (
    moves.length && learnsets.length && (
      <section className="teamdetail__container">
        <button onClick={() => modifyTeam(teamId, team)} type="button">MODIFY TEAM</button>
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

function mapStateToProps(state) {
  return {
    teams: state.teamsReducer.teams,
    team: state.teamsReducer.team,
    moves: state.pokedexReducer.moves,
    learnsets: state.pokedexReducer.learnsets,
    user: state.userReducer.user,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      loadTeams,
      loadOneTeam,
      loadMoves,
      loadLearnsets,
      modifyTeam,
      getUserInfo,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamDetailComponent);
