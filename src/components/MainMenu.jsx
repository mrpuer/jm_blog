import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLogout } from '../actions/actionsCreator';

const MainMenu = ({ isLogged, handleLogout }) =>
  isLogged ? (
    <Menu className="menu" theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1" onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  ) : (
    <Menu className="menu" theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">
        <Link to="/">Login</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/register">Register</Link>
      </Menu.Item>
    </Menu>
  );

MainMenu.propTypes = {
  isLogged: PropTypes.bool,
  handleLogout: PropTypes.func.isRequired,
};

MainMenu.defaultProps = {
  isLogged: false,
};

const mapStateToProps = state => ({
  isLogged: state.isLogged,
});

const mapDispatch = {
  handleLogout: userLogout,
};

export default connect(mapStateToProps, mapDispatch)(MainMenu);
