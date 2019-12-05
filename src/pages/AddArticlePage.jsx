import React from 'react';
import AddArticle from '../article/components/AddArticle';
import PrivateRoute from './PrivateRoute';

const AddArticlePage = () => (
  <PrivateRoute path="/add">
    <AddArticle />
  </PrivateRoute>
);

export default AddArticlePage;
