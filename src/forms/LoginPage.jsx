import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from './components/LoginForm';

const LoginPage = ({ isLogged }) => {
  return (
    <Route
      path="/login"
      exact
      render={() => (isLogged ? <Redirect to={{ pathname: '/user' }} /> : <LoginForm />)}
    />
  );
};

LoginPage.propTypes = {
  isLogged: PropTypes.bool,
};

LoginPage.defaultProps = {
  isLogged: false,
};

const mapStateToProps = ({ user }) => ({
  isLogged: user.isLogged,
});

export default connect(mapStateToProps)(LoginPage);
