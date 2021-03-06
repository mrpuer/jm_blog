import React from 'react';
import { Route } from 'react-router-dom';
import Article from '../article/components/Article';

const ArticlePage = () => {
  return <Route path="/articles/:slug" exact component={Article} />;
};

export default ArticlePage;
