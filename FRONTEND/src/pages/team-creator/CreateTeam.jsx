/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createTeam } from '../../redux/actions/teamCreatorActions';
import { loadTeams } from '../../redux/actions/teamManagerActions';

export function CreateTeamComponent({ actions, teams }) {
  useEffect(() => {
    if (!teams?.length) {
      actions.loadTeams();
    }
  }, [teams?.length]);
  return (
    <>
      {teams
          && (
          <div className="team-creator__creator">
            <button type="button" onClick={() => actions.createTeam()}>create team</button>
            sss
            {teams.map((team) => (team.id))}
          </div>
          )}
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
      createTeam,
      loadTeams,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeamComponent);
