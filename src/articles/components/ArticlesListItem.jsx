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
import SpinnerWrapper from '../../spinner/SpinnerWrapper';

const ArticlesListItem = ({ article, favoriteArticle }) => {
  return (
    <SpinnerWrapper isActive={article.isLoading}>
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
                <Link to={`profile/${article.author.username}`}>{article.author.username}</Link>
              </div>
            </div>
          }
          title={<Link to={`articles/${article.slug}`}>{article.title}</Link>}
          description={article.description}
        />
      </List.Item>
    </SpinnerWrapper>
  );
};

ArticlesListItem.propTypes = {
  article: articleProps.isRequired,
  favoriteArticle: PropTypes.func.isRequired,
};

const dispatchProps = {
  favoriteArticle: favoriteArticleAction,
};

export default connect(null, dispatchProps)(ArticlesListItem);
