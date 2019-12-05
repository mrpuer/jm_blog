import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SpinnerWrapper from '../../spinner/SpinnerWrapper';
import ArticleForm from '../../forms/components/ArticleForm';
import { addArticleAction } from '../actions';

const AddArticle = props => {
  const initialValues = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  };
  const { isLoading, addArticleHandler } = props;
  return (
    <div>
      <h1>New Article</h1>
      <SpinnerWrapper isActive={isLoading}>
        <ArticleForm initialValues={initialValues} formHandler={addArticleHandler} />
      </SpinnerWrapper>
    </div>
  );
};

AddArticle.propTypes = {
  addArticleHandler: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

AddArticle.defaultProps = {
  isLoading: false,
};

const mapStateToProps = ({ currentArticle: { isLoading } }) => ({
  isLoading,
});

const dispatchActions = {
  addArticleHandler: addArticleAction,
};

export default connect(mapStateToProps, dispatchActions)(AddArticle);
