import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Divider } from 'antd';
import { articleProps } from '../../propTypes';
import ArticleFooter from './ArticleFooter';
import '../styles/style.scss';
import { getArticleAction } from '../actions';
import SpinnerWrapper from '../../spinner/SpinnerWrapper';

class Article extends React.Component {
  componentDidMount = () => {
    const { getArticle, match } = this.props;
    getArticle(match.params.slug);
  };

  render() {
    const { data, isLoading } = this.props;
    return (
      <SpinnerWrapper isActive={isLoading}>
        <article className="article">
          <h3 className="article--title">{data.title}</h3>
          <p className="article--body">{data.body}</p>
          <Divider dashed />
          <ArticleFooter article={data} />
        </article>
      </SpinnerWrapper>
    );
  }
}

Article.propTypes = {
  getArticle: PropTypes.func.isRequired,
  data: articleProps,
  isLoading: PropTypes.bool,
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }).isRequired,
};

Article.defaultProps = {
  data: {},
  isLoading: false,
};

const mapDispatchToProps = ({ currentArticle: { data, isLoading, error } }) => ({
  data,
  isLoading,
  error,
});

const dispatchActions = {
  getArticle: getArticleAction,
};

export default connect(mapDispatchToProps, dispatchActions)(Article);
