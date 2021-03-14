/* eslint-disable react/prop-types */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Team from './Team';

import { loadTeams } from '../../redux/actions/teamManagerActions';

export function TeamManagerComponent({ teams, actions }) {
  useEffect(() => {
    if (!teams?.length) {
      actions.loadTeams();
    }
  }, [teams?.length]);
  return (
    <>
      {
        teams && (
          <section className="teams__container">
            {teams.map((team) => <Team poketeam={team} key={Math.random()} />)}
          </section>
        )
    }

    </>
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
      loadTeams,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamManagerComponent);
