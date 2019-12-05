import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { articleProps } from '../../propTypes';
import { editArticleAction, getArticleAction } from '../actions';
import SpinnerWrapper from '../../spinner/SpinnerWrapper';
import ArticleForm from '../../forms/components/ArticleForm';

class EditArticle extends React.Component {
  componentDidMount() {
    const { getArticle, match } = this.props;
    getArticle(match.params.slug);
  }

  render() {
    const { article, isLoading, editArticleHandler } = this.props;
    const initialValues = {
      title: article.title,
      description: article.description,
      body: article.body,
      tagList: article.tagList,
    };
    return (
      <div>
        <h1>Edit Article</h1>
        <SpinnerWrapper isActive={isLoading}>
          <ArticleForm
            initialValues={initialValues}
            formHandler={editArticleHandler}
            slug={article.slug}
          />
        </SpinnerWrapper>
      </div>
    );
  }
}

EditArticle.propTypes = {
  getArticle: PropTypes.func.isRequired,
  editArticleHandler: PropTypes.func.isRequired,
  article: articleProps,
  isLoading: PropTypes.bool,
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }).isRequired,
};

EditArticle.defaultProps = {
  article: {},
  isLoading: false,
};

const mapDispatchToProps = ({ currentArticle: { data, isLoading } }) => ({
  article: data,
  isLoading,
});

const dispatchActions = {
  getArticle: getArticleAction,
  editArticleHandler: editArticleAction,
};

export default connect(mapDispatchToProps, dispatchActions)(withRouter(EditArticle));
