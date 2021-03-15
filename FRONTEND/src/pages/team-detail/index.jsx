/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useParams } from 'react-router-dom';
import { loadOneTeam, loadTeams } from '../../redux/actions/teamManagerActions';
import {
  loadMoves,
  loadLearnsets,
} from '../../redux/actions/pokedexActions';

import TeamDetailPokemon from './TeamDetailPokemon';

export function TeamDetailComponent({
  team,
  teams,
  actions,
  moves,
  learnsets,
}) {
  const { teamId } = useParams();

  useEffect(() => {
    if (!teams?.length) {
      actions.loadTeams();
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
    actions.loadOneTeam(+teamId,
      moves,
      learnsets);
  }, [teamId]);
  return (
    <section className="teamdetail__container">
      {console.log(team)}
      {
      team
        && team?.pokemons?.map((pokemon) => (
          <TeamDetailPokemon
            pokemon={pokemon}
            key={Math.random()}
          />
        ))
}

    </section>
  );
}

function mapStateToProps(state) {
  return {
    teams: state.teamsReducer.teams,
    team: state.teamsReducer.team,
    moves: state.pokedexReducer.moves,
    learnsets: state.pokedexReducer.learnsets,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      loadTeams,
      loadOneTeam,
      loadMoves,
      loadLearnsets,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamDetailComponent);
