import React from 'react';
import { connect } from 'react-redux';
import { Avatar, List } from 'antd';
import { formatDistanceToNow } from 'date-fns';
import { articleProps } from '../propTypes';
import IconText from './IconText';
import { favoriteArticleAction } from '../actions';

const ArticlesListItem = ({ article, favoriteArticle }) => {
  return (
    <List.Item
      key={article.slug}
      actions={[
        <IconText
          type="like-o"
          text={article.favoritesCount}
          key="list-vertical-like-o"
          onClick={() => favoriteArticle(article.slug)}
        />,
        <IconText type="tags" text={article.tagList.join(', ')} key="list-vertical-tags" />,
      ]}
      extra={
        <IconText
          type="calendar"
          text={`Created ${formatDistanceToNow(new Date(article.createdAt), {
            addSuffix: true,
          })}`}
        />
      }
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
        title={<a href={article.slug}>{article.title}</a>}
        description={article.description}
      />
    </List.Item>
  );
};

ArticlesListItem.propTypes = articleProps.isRequired;

const dispatchProps = {
  favoriteArticle: favoriteArticleAction,
};

export default connect(null, dispatchProps)(ArticlesListItem);
