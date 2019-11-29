import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RegisterForm from './components/RegisterForm';

const RegisterPage = ({ isLogged }) => {
  return (
    <Route
      path="/register"
      render={() => (isLogged ? <Redirect to={{ pathname: '/user' }} /> : <RegisterForm />)}
    />
  );
};

RegisterPage.propTypes = {
  isLogged: PropTypes.bool,
};

RegisterPage.defaultProps = {
  isLogged: false,
};

const mapStateToProps = ({ user }) => ({
  isLogged: user.isLogged,
});

export default connect(mapStateToProps)(RegisterPage);
