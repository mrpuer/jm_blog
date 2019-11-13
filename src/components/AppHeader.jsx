import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header>
      <h1 className="logo">
        <Link to="/">Blog</Link>
      </h1>
      <Menu className="menu" theme="dark" mode="horizontal" defaultSelectedKeys={['3']}>
        <Menu.Item key="1">
          <Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/register">Register</Link>
        </Menu.Item>
        <Menu.Item key="3">Logout</Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;
