import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List } from 'antd';
import { getArticlesAction } from '../actions';
import ArticlesListItem from './ArticlesListItem';
import { articleProps } from '../../propTypes';
import SpinnerWrapper from '../../spinner/SpinnerWrapper';

class ArticlesList extends React.Component {
  componentDidMount = () => {
    const { getArticles, queryParams } = this.props;
    getArticles(queryParams);
  };

  render() {
    const { allArticles, isLoading } = this.props;
    return (
      <SpinnerWrapper isActive={isLoading}>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 10,
          }}
          dataSource={Object.keys(allArticles)}
          header={
            <div>
              <h2>All Articles</h2>
            </div>
          }
          renderItem={item => <ArticlesListItem article={allArticles[item]} />}
        />
      </SpinnerWrapper>
    );
  }
}

ArticlesList.propTypes = {
  getArticles: PropTypes.func.isRequired,
  allArticles: PropTypes.objectOf(articleProps),
  isLoading: PropTypes.bool,
  queryParams: PropTypes.objectOf({
    username: PropTypes.string,
  }),
};

ArticlesList.defaultProps = {
  allArticles: {},
  isLoading: false,
  queryParams: {},
};

const mapStateToProps = ({ articles }) => ({
  allArticles: articles.all,
  isLoading: articles.isLoading,
});

const dispatchProps = {
  getArticles: getArticlesAction,
};

export default connect(mapStateToProps, dispatchProps)(ArticlesList);
