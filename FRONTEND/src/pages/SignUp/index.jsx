/* eslint-disable consistent-return */
import '../../styles/auth.scss';

import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
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
      <section className="auth__container">
        <h2>Sign Up</h2>
        {error && <span>{error}</span>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">
              Email
              <input id="email" type="email" ref={emailRef} required />
            </label>
          </div>
          <div id="password">
            <label htmlFor="password">
              Password
              <input id="password" type="password" ref={passwordRef} required />
            </label>
          </div>
          <div id="password-confirm">
            <label htmlFor="password-confirm">
              Password
              <input id="password-confirm" type="password" ref={passwordConfirmRef} required />
            </label>
          </div>
          <button className="login__btn" disabled={loading} type="submit">
            Log In
          </button>
        </form>
        <div>
          <Link to="/login/">Already have an account?</Link>
        </div>
      </section>
    )
  );
}

SignupComponent.propTypes = {
  actions: PropTypes.shape({
    signupUser: PropTypes.func.isRequired,
  }).isRequired,
};

export function mapStateToProps(state) {
  return {
    user: state.userReducer.user,

  };
}
export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      signupUser,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupComponent);
