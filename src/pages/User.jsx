import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserHomePage from '../components/UserHomePage';

const User = ({ isLogged }) => {
  return (
    <Route
      path="/user"
      render={() => (isLogged ? <UserHomePage /> : <Redirect to={{ pathname: '/' }} />)}
    />
  );
};

User.propTypes = {
  isLogged: PropTypes.bool,
};

User.defaultProps = {
  isLogged: false,
};

const mapStateToProps = state => ({
  isLogged: state.isLogged,
});

export default connect(mapStateToProps)(User);
