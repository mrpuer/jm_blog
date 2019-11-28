import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Avatar, List } from 'antd';
import PropTypes from 'prop-types';
import { articleProps } from '../../propTypes';
import IconText from './IconText';
import { favoriteArticleAction } from '../actions';
import ArticleTags from '../../article/components/ArticleTags';
import ArticleLikes from '../../article/components/ArticleLikes';
import ArticleDates from '../../article/components/ArticleDates';

const ArticlesListItem = ({ article, error, favoriteArticle }) => {
  if (error) {
    throw new Error(error);
  }
  return (
    <List.Item
      key={article.slug}
      actions={[
        <ArticleLikes
          handlerFavoriteArticle={() => favoriteArticle(article.slug)}
          favoritesCount={article.favoritesCount}
        />,
        <ArticleTags tags={article.tagList} />,
      ]}
      extra={<ArticleDates createdAt={article.createdAt} updatedAt={article.createdAt} />}
    >
      <List.Item.Meta
        avatar={
          <div className="articles-item--avatar">
            <div>
              <Avatar src={article.author.image} />
            </div>
            <div className="articles-item--username">
              <span>
                <IconText type="star" />
              </span>
              <span>{article.author.username}</span>
            </div>
          </div>
        }
        title={<Link to={`articles/${article.slug}`}>{article.title}</Link>}
        description={article.description}
      />
    </List.Item>
  );
};

ArticlesListItem.propTypes = {
  article: articleProps.isRequired,
  error: PropTypes.string,
  favoriteArticle: PropTypes.func.isRequired,
};

ArticlesListItem.defaultProps = {
  error: null,
};

const dispatchProps = {
  favoriteArticle: favoriteArticleAction,
};

export default connect(null, dispatchProps)(ArticlesListItem);
