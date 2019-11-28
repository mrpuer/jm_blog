import React from 'react';
import { Avatar, Col, Row } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { articleProps } from '../../propTypes';
import ArticleDates from './ArticleDates';
import ArticleLikes from './ArticleLikes';
import ArticleTags from './ArticleTags';
import { favoriteArticleAction } from '../../articles/actions';

const ArticleFooter = ({ article, favoriteArticle }) => {
  return (
    <Row gutter={[0, 8]}>
      <Col span={2}>
        <Avatar src={article.author.image} shape="square" size={64} />
      </Col>
      <Col span={2}>
        <b>{article.author.username}</b>
      </Col>
      <Col span={1} offset={11} className="article--likes">
        <ArticleLikes
          handlerFavoriteArticle={() => favoriteArticle(article.slug)}
          favoritesCount={article.favoritesCount}
        />
      </Col>
      <Col span={4}>
        <ArticleTags tags={article.tagList} />
      </Col>
      <Col span={4}>
        <ArticleDates createdAt={article.createdAt} updatedAt={article.updatedAt} />
      </Col>
    </Row>
  );
};

ArticleFooter.propTypes = {
  article: articleProps,
  favoriteArticle: PropTypes.func.isRequired,
};

ArticleFooter.defaultProps = {
  article: {},
};

const mapStateToProps = ({ currentArticle: { data } }) => ({
  article: data,
});

const dispatchProps = {
  favoriteArticle: favoriteArticleAction,
};

export default connect(mapStateToProps, dispatchProps)(ArticleFooter);
