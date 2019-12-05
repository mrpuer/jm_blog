import React from 'react';
import { Avatar, Button, Col, Row } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { articleProps } from '../../propTypes';
import ArticleDates from './ArticleDates';
import ArticleLikes from './ArticleLikes';
import ArticleTags from './ArticleTags';
import { favoriteArticleAction, deleteArticleAction } from '../actions';
import '../styles/style.scss';

const ArticleFooter = ({ article, favoriteArticle, deleteArticle, username }) => {
  const history = useHistory();
  const deleteArticleHandler = () => {
    deleteArticle(article.slug).then(() => history.push(`/?author=${username}`));
  };

  return (
    <Row gutter={[0, 8]}>
      <Col span={2}>
        <Avatar src={article.author.image} shape="square" size={64} />
      </Col>
      <Col span={2}>
        <Link to={`/profile/${article.author.username}`}>{article.author.username}</Link>
      </Col>
      <Col span={2} offset={5}>
        <ArticleLikes
          handlerFavoriteArticle={() => favoriteArticle(article.slug, article.favorited)}
          favoritesCount={article.favoritesCount}
          isActive={article.favorited}
        />
      </Col>
      <Col span={4}>
        <ArticleTags tags={article.tagList} />
      </Col>
      <Col span={5}>
        <ArticleDates createdAt={article.createdAt} updatedAt={article.updatedAt} />
      </Col>
      {article.author.username === username && (
        <Col span={4}>
          <Link to={`/articles/${article.slug}/edit`}>
            <Button type="primary">Edit</Button>
          </Link>
          <Button type="danger" onClick={deleteArticleHandler}>
            Delete
          </Button>
        </Col>
      )}
    </Row>
  );
};

ArticleFooter.propTypes = {
  article: articleProps,
  username: PropTypes.string,
  favoriteArticle: PropTypes.func.isRequired,
  deleteArticle: PropTypes.func.isRequired,
};

ArticleFooter.defaultProps = {
  article: {},
  username: '',
};

const mapStateToProps = ({ currentArticle: { data }, user: { username } }) => ({
  article: data,
  username,
});

const dispatchProps = {
  favoriteArticle: favoriteArticleAction,
  deleteArticle: deleteArticleAction,
};

export default connect(mapStateToProps, dispatchProps)(ArticleFooter);
