/* eslint-disable consistent-return */
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import {
  Form,
  Button,
  Card,
  Alert,
} from 'react-bootstrap';
import { Link, useHistory, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useAuth } from '../../context/AuthContext';

import { signupUser } from '../../redux/actions/userActions';

export function SignupComponent({ actions }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const nickRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { currentUser } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Your PokePasswords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value)
        .then((result) => {
          actions.signupUser(result.user.email);
          result.user.updateProfile({
            displayName: nickRef.current.value,
          });
        });
      history.push('/');
    } catch {
      setError('There is already a user with this username or email. Try again.');
    }

    setLoading(false);
  }

  return (
    currentUser ? <Redirect to="/profile" /> : (

      <>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="nickname">
                <Form.Label>Nickname</Form.Label>
                <Form.Control type="text" ref={nickRef} required />
              </Form.Group>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" ref={passwordConfirmRef} required />
              </Form.Group>
              <Button disabled={loading} className="w-100" type="submit">
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account?
          {' '}
          <Link to="/login">Log In</Link>
        </div>
      </>
    )
  );
}

SignupComponent.propTypes = {
  actions: PropTypes.shape({
    signupUser: PropTypes.func.isRequired,
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
      signupUser,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupComponent);
