import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { onLogout } from '../forms/actions';

const MainMenu = ({ isLogged, username, handleLogout }) =>
  isLogged ? (
    <Menu className="menu" theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">
        <Link to={`/profile/${username}`}>My Profile</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/add">Add Article</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to={`/?author=${username}`}>My Articles</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/" onClick={handleLogout}>
          Logout
        </Link>
      </Menu.Item>
    </Menu>
  ) : (
    <Menu className="menu" theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">
        <Link to="/login">Login</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/register">Register</Link>
      </Menu.Item>
    </Menu>
  );

MainMenu.propTypes = {
  username: PropTypes.string,
  isLogged: PropTypes.bool,
  handleLogout: PropTypes.func.isRequired,
};

MainMenu.defaultProps = {
  username: '',
  isLogged: false,
};

const mapStateToProps = ({ user }) => ({
  isLogged: user.isLogged,
  username: user.username,
});

const mapDispatch = {
  handleLogout: onLogout,
};

export default connect(mapStateToProps, mapDispatch)(MainMenu);
