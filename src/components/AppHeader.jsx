import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import MainMenu from './MainMenu';

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header>
      <h1 className="logo">
        <Link to="/jm_blog">Blog</Link>
      </h1>
      <MainMenu />
    </Header>
  );
};

export default AppHeader;
