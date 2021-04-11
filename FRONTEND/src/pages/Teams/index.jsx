import PropTypes from 'prop-types';

import React from 'react';
import { connect } from 'react-redux';
import Team from './TeamComponent';

export function TeamManagerComponent({ teams, user }) {
  teams?.sort((a, b) => a.id - b.id);

  return (
    <>
      {
        teams && (
          <section data-aos="fade-in" className="teams__container">
            {teams.map((team) => <Team poketeam={team} user={user.email} key={Math.random()} />)}
          </section>
        )
    }

    </>
  );
}

export function mapStateToProps(state) {
  return {
    teams: state.teamsReducer.teams,
    user: state.userReducer.user,
  };
}

export default connect(mapStateToProps)(TeamManagerComponent);

TeamManagerComponent.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  teams: PropTypes.arrayOf(PropTypes.object).isRequired,
};
