import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import EditArticle from '../article/components/EditArticle';
import AccessDenied from '../errors/components/AccessDenied';

const EditArticlePage = ({ isLogged }) => (
  <Route path="/articles/:slug/edit" exact component={isLogged ? EditArticle : AccessDenied} />
);

EditArticlePage.propTypes = {
  isLogged: PropTypes.bool,
};

EditArticlePage.defaultProps = {
  isLogged: false,
};

const mapStateToProps = ({ user: { isLogged } }) => ({
  isLogged,
});

export default connect(mapStateToProps)(EditArticlePage);
