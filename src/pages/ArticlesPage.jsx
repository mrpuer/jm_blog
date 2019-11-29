import React from 'react';
import { Route } from 'react-router-dom';
import ArticlesList from '../articles/components/ArticlesList';
import '../articles/styles/index.scss';

const ArticlesPage = () => {
  return <Route path="/" exact component={ArticlesList} />;
};

export default ArticlesPage;
