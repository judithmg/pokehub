/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useParams } from 'react-router-dom';
import { loadOneTeam, loadTeams } from '../../redux/actions/teamManagerActions';

import TeamDetailPokemon from './TeamDetailPokemon';

export function TeamDetailComponent({ team, teams, actions }) {
  const { teamId } = useParams();

  useEffect(() => {
    if (!teams?.length) {
      actions.loadTeams();
    }
  }, [teams?.length]);

  useEffect(() => {
    actions.loadOneTeam(+teamId);
  }, [teamId]);
  return (
    <section className="teamdetail__container">
      {console.log(team)}
      {
      team
        && team[0]?.pokemons?.map((pokemon) => (
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
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      loadTeams,
      loadOneTeam,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamDetailComponent);
