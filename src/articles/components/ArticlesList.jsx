import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List } from 'antd';
import { getArticlesAction } from '../actions';
import ArticlesListItem from './ArticlesListItem';
import { articleProps } from '../../propTypes';
import SpinnerWrapper from '../../spinner/SpinnerWrapper';

const POSTS_PER_PAGE = 10;

class ArticlesList extends React.Component {
  componentDidMount = () => {
    this.getData(1);
  };

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (prevProps.location !== location) {
      this.getData(1);
    }
  }

  getData = pageNumber => {
    const { getArticles, queryParams } = this.props;
    queryParams.limit = POSTS_PER_PAGE;
    queryParams.offset = (pageNumber - 1) * POSTS_PER_PAGE;
    getArticles(queryParams);
  };

  render() {
    const { articles } = this.props;
    return (
      <SpinnerWrapper isActive={articles.isLoading}>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              this.getData(page);
            },
            pageSize: 10,
            total: articles.articlesCount,
          }}
          dataSource={Object.keys(articles.all)}
          header={
            <div>
              <h2>All Articles</h2>
            </div>
          }
          renderItem={item => <ArticlesListItem article={articles.all[item]} />}
        />
      </SpinnerWrapper>
    );
  }
}

ArticlesList.propTypes = {
  articles: PropTypes.shape({
    all: PropTypes.objectOf(articleProps),
    isLoading: PropTypes.bool,
    articlesCount: PropTypes.number,
  }),
  getArticles: PropTypes.func.isRequired,
  queryParams: PropTypes.shape({
    tag: PropTypes.string,
    author: PropTypes.string,
    favorited: PropTypes.string,
    limit: PropTypes.number,
    offset: PropTypes.number,
  }),
  location: PropTypes.shape({
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    state: PropTypes.shape(PropTypes.bool),
  }).isRequired,
};

ArticlesList.defaultProps = {
  articles: {
    all: {},
    isLoading: false,
    articlesCount: 0,
  },
  queryParams: {},
};

const mapStateToProps = ({ articles }) => ({
  articles,
});

const dispatchProps = {
  getArticles: getArticlesAction,
};

export default connect(mapStateToProps, dispatchProps)(ArticlesList);
