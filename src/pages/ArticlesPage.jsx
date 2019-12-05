import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import ArticlesList from '../articles/components/ArticlesList';
import '../articles/styles/index.scss';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ArticlesPage = () => {
  const query = useQuery();
  return (
    <Route
      path="/"
      exact
      render={({ location }) => (
        <ArticlesList
          queryParams={{
            tag: query.get('tag'),
            author: query.get('author'),
            favorited: query.get('favorited'),
            limit: query.get('limit'),
            offset: query.get('offset'),
          }}
          location={location}
        />
      )}
    />
  );
};

export default ArticlesPage;
