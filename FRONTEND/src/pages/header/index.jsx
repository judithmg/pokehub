import React, { useState, useEffect } from 'react';
import '../../styles/header.scss';
import { PropTypes } from 'prop-types';

import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useAuth } from '../../context/AuthContext';
import { getUserInfo, logoutUser } from '../../redux/actions/userActions';
import { websiteImages } from '../../constants/images';
import Menu from '../menu';
import Button from '../shared/ButtonComponent';

export function HeaderComponent({ actions, user }) {
  const [menu, setMenu] = useState(false);
  const currentUser = useAuth();
  const [setError] = useState('');
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout()
        .then(() => actions.logoutUser());
      history.push('/');
    } catch (err) {
      setError('Could not logout');
    }
  }

  useEffect(() => {
    if (!user?.email) {
      const useremail = currentUser?.currentUser?.email;
      actions.getUserInfo(useremail);
    }
  }, [user]);

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
          {user?.email ? (
            <>
              <Link to="/profile"><Button text="Profile" classes="header__login" /></Link>
              <Link to="/" onClick={() => handleLogout()}><Button text="Logout" classes="header__login" /></Link>
            </>
          ) : (<Link to="/login"><Button text="Login" classes="header__login" /></Link>)}

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
  user: PropTypes.shape({
    profilePicture: PropTypes.string,
    _id: PropTypes.string,
    email: PropTypes.string,
    creationDate: PropTypes.string,
    teams: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  actions: PropTypes.shape({
    getUserInfo: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.userReducer.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      getUserInfo,
      logoutUser,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
