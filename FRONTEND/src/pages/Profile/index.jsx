import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, Button, Alert } from 'react-bootstrap';
import { logoutUser } from '../../redux/actions/userActions';
import { useAuth } from '../../context/AuthContext';

export function ProfileComponent({ actions }) {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError('');

    try {
      await logout()
        .then(() => actions.logoutUser());
      history.push('/');
    } catch (err) {
      setError('Could not logout');
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          <img src={`https://avatars.dicebear.com/api/bottts/${currentUser.email}.svg`} alt="bot" />
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong>
          {' '}
          {currentUser.email}
          <Link to="/profile/update" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
}

ProfileComponent.propTypes = {
  actions: PropTypes.shape({
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
      logoutUser,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);
