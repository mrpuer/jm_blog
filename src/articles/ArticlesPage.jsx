import React from 'react';
import { Route } from 'react-router-dom';
import ArticlesList from './components/ArticlesList';
import './styles/index.scss';

const ArticlesPage = () => {
  return <Route path="/" exact component={ArticlesList} />;
};

export default ArticlesPage;
