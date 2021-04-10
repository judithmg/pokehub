import PropTypes from 'prop-types';

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Team from './TeamComponent';

import { loadTeams } from '../../redux/actions/teamManagerActions';
import { getUserInfo } from '../../redux/actions/userActions';
import { useAuth } from '../../context/AuthContext';

export function TeamManagerComponent({ teams, actions, user }) {
  const { currentUser } = useAuth();
  const useremail = currentUser.email;

  useEffect(() => {
    if (!user.email) {
      actions.getUserInfo(useremail);
    }
  }, [user]);

  useEffect(() => {
    actions.loadTeams(user?._id);
  }, [teams?.length, user, user.email]);

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
export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      loadTeams,
      getUserInfo,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamManagerComponent);

TeamManagerComponent.propTypes = {

  actions: PropTypes.shape({
    loadTeams: PropTypes.func.isRequired,
    getUserInfo: PropTypes.func.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    _id: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  teams: PropTypes.arrayOf(PropTypes.object).isRequired,

};
