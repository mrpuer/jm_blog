import React from 'react';
import EditArticle from '../article/components/EditArticle';
import PrivateRoute from './PrivateRoute';

const EditArticlePage = () => (
  <PrivateRoute path="/articles/:slug/edit" exact>
    <EditArticle />
  </PrivateRoute>
);

export default EditArticlePage;
