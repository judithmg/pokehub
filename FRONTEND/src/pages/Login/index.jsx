import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Form, Button, Card, Alert,
} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useAuth } from '../../context/AuthContext';
import { loginUser } from '../../redux/actions/userActions';

export function LoginComponent({ actions }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value)
        .then((user) => actions.loginUser(user.user.email));
      history.push('/');
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account?
        {' '}
        <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}

LoginComponent.propTypes = {
  actions: PropTypes.shape({
    loginUser: PropTypes.func.isRequired,
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
      loginUser,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
