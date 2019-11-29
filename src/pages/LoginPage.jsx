import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from '../forms/components/LoginForm';

const LoginPage = ({ isLogged, username }) => {
  return (
    <Route
      path="/login"
      exact
      render={() =>
        isLogged ? <Redirect to={{ pathname: `/profile/${username}` }} /> : <LoginForm />
      }
    />
  );
};

LoginPage.propTypes = {
  isLogged: PropTypes.bool,
  username: PropTypes.string,
};

LoginPage.defaultProps = {
  isLogged: false,
  username: '',
};

const mapStateToProps = ({ user }) => ({
  isLogged: user.isLogged,
  username: user.username,
});

export default connect(mapStateToProps)(LoginPage);
