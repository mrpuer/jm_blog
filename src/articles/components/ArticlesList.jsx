import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List } from 'antd';
import { getArticlesAction } from '../actions';
import ArticlesListItem from './ArticlesListItem';
import { articleProps } from '../propTypes';

class ArticlesList extends React.Component {
  componentDidMount = () => {
    const { getArticles } = this.props;
    getArticles({});
  };

  render() {
    const { articles } = this.props;
    return (
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 10,
        }}
        dataSource={Object.keys(articles)}
        header={
          <div>
            <h2>All Articles</h2>
          </div>
        }
        renderItem={item => <ArticlesListItem article={articles[item]} />}
      />
    );
  }
}

ArticlesList.propTypes = {
  getArticles: PropTypes.func.isRequired,
  articles: PropTypes.objectOf(articleProps),
};

ArticlesList.defaultProps = {
  articles: {},
};

const mapStateToProps = state => ({
  articles: state.articles,
});

const dispatchProps = {
  getArticles: getArticlesAction,
};

export default connect(mapStateToProps, dispatchProps)(ArticlesList);
