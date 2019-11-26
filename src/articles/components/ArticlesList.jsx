import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List } from 'antd';
import { getArticlesAction } from '../actions';
import ArticlesListItem from './ArticlesListItem';
import { articleProps } from '../propTypes';
import ServerError from '../../errors/ServerError';

class ArticlesList extends React.Component {
  componentDidMount = () => {
    const { getArticles } = this.props;
    getArticles({});
  };

  render() {
    // eslint-disable-next-line no-unused-vars
    const { allArticles } = this.props;
    return (
      <ServerError>
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
      </ServerError>
    );
  }
}

ArticlesList.propTypes = {
  getArticles: PropTypes.func.isRequired,
  allArticles: PropTypes.objectOf(articleProps),
};

ArticlesList.defaultProps = {
  allArticles: {},
};

const mapStateToProps = ({ articles: { all, loading } }) => ({
  allArticles: all,
  loading,
});

const dispatchProps = {
  getArticles: getArticlesAction,
};

export default connect(mapStateToProps, dispatchProps)(ArticlesList);
