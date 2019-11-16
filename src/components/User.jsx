import React from 'react';
import { connect } from 'react-redux';

// eslint-disable-next-line react/prop-types
const User = ({ user }) => {
  // eslint-disable-next-line react/prop-types
  return <div>{user.name}</div>;
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(User);
