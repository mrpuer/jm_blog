import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';

const Login = ({ isLogged }) => {
  return (
    <Route
      path="/jm_blog/"
      exact
      render={() => (isLogged ? <Redirect to={{ pathname: '/jm_blog/user' }} /> : <LoginForm />)}
    />
  );
};

Login.propTypes = {
  isLogged: PropTypes.bool,
};

Login.defaultProps = {
  isLogged: false,
};

const mapStateToProps = state => ({
  isLogged: state.isLogged,
});

export default connect(mapStateToProps)(Login);
