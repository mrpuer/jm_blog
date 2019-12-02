import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddArticle from '../article/components/AddArticle';

const AddArticlePage = ({ isLogged }) => (
  <Route path="/add" render={() => (!isLogged ? <AddArticle /> : <span>Access Denied!</span>)} />
);

AddArticlePage.propTypes = {
  isLogged: PropTypes.bool,
};

AddArticlePage.defaultProps = {
  isLogged: false,
};

const mapStateToProps = ({ user: { isLogged } }) => ({
  isLogged,
});

export default connect(mapStateToProps)(AddArticlePage);
