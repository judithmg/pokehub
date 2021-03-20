import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { Link, useHistory, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useAuth } from '../../context/AuthContext';
import { getUserInfo } from '../../redux/actions/userActions';

export function LoginComponent({ actions }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { currentUser } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value)
        .then((data) => actions.getUserInfo(data.user.email));
      history.push('/');
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  }

  return (
    currentUser ? <Redirect to="/profile" /> : (
      <>
        <div>
          <div>
            <h2>Log In</h2>
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
              <button className="login__btn" disabled={loading} type="submit">
                Log In
              </button>
            </form>
            <div>
              <Link to="/login/forgot-password">Forgot Password?</Link>
            </div>
          </div>
        </div>
        <div>
          Need an account?
          {' '}
          <Link to="/signup">Sign Up</Link>
        </div>
      </>

    )

  );
}

LoginComponent.propTypes = {
  actions: PropTypes.shape({
    getUserInfo: PropTypes.func.isRequired,
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
      getUserInfo,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
