import React, { useState, useEffect } from 'react';
import '../../styles/header.scss';
import { PropTypes } from 'prop-types';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useAuth } from '../../context/AuthContext';
import { getUserInfo } from '../../redux/actions/userActions';
import { loadTeams } from '../../redux/actions/teamManagerActions';
import { websiteImages } from '../../constants/images';
import Menu from '../menu';
import Button from '../shared/ButtonComponent';

export function HeaderComponent({ actions, user, teams }) {
  const [menu, setMenu] = useState(false);
  const currentUser = useAuth();
  const useremail = currentUser?.currentUser?.email;

  useEffect(() => {
    if (!user?.email) {
      actions.getUserInfo(useremail);
    }
  }, [user]);

  useEffect(() => {
    if (!teams?.length) {
      actions?.loadTeams(user._id);
    }
  }, [teams?.length]);

  return (
    <>
      <header>
        <Link to="/">
          <img
            src={websiteImages.header}
            className="header__logo"
            alt="header logo"
          />
        </Link>
        <div className="header--right">
          <Link to="/login"><Button text="Login" classes="header__login" /></Link>
          <Link to="/profile"><Button text="Profile" classes="header__login" /></Link>
          <Link to="/"><Button text="logout" classes="header__login" /></Link>
          <button type="button" className="header__button-menu" onClick={() => setMenu(!menu)}>
            <img
              src={websiteImages.headerPokeball}
              alt="pokeball"
              className="header__pokeball"
            />
          </button>
        </div>
      </header>
      {menu && (<Menu />)}
    </>
  );
}

HeaderComponent.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object).isRequired,
  user: PropTypes.shape({
    profilePicture: PropTypes.string,
    _id: PropTypes.string,
    email: PropTypes.string,
    creationDate: PropTypes.string,
    teams: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  actions: PropTypes.shape({
    getUserInfo: PropTypes.func.isRequired,
    loadTeams: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    teams: state.teamsReducer.teams,
    user: state.userReducer.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      loadTeams,
      getUserInfo,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
