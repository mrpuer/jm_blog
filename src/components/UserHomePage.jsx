import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const UserHomePage = ({ user }) => {
  return (
    <>
      <h2>Welcome {user.username}!</h2>
      <div>Your email - {user.email}</div>
    </>
  );
};

UserHomePage.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    username: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(UserHomePage);
