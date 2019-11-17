import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const UserHomePage = ({ user }) => {
  return (
    <>
      <div>{user.email}</div>
      <div>{user.password}</div>
    </>
  );
};

UserHomePage.propTypes = {
  user: PropTypes.objectOf({
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(UserHomePage);
