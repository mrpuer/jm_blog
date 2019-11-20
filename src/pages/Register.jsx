import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RegisterForm from '../components/RegisterForm';

const Register = ({ isLogged }) => {
  return (
    <Route
      path="/register"
      render={() => (isLogged ? <Redirect to={{ pathname: '/user' }} /> : <RegisterForm />)}
    />
  );
};

Register.propTypes = {
  isLogged: PropTypes.bool,
};

Register.defaultProps = {
  isLogged: false,
};

const mapStateToProps = state => ({
  isLogged: state.isLogged,
});

export default connect(mapStateToProps)(Register);
