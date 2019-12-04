import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children, isLogged, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
  isLogged: PropTypes.bool,
};

PrivateRoute.defaultProps = {
  isLogged: false,
};

const mapStateToProps = ({ user: { isLogged } }) => ({
  isLogged,
});

export default connect(mapStateToProps)(PrivateRoute);
