import React from 'react';
import PropTypes from 'prop-types';
import IconText from '../../articles/components/IconText';
import '../styles/style.scss';

const ArticleLikes = ({ favoritesCount, handlerFavoriteArticle, isActive }) => {
  return (
    <span className={isActive ? 'article--likes__active' : 'article--likes'}>
      <IconText
        type="like-o"
        text={favoritesCount}
        key="list-vertical-like-o"
        handler={handlerFavoriteArticle}
      />
    </span>
  );
};

ArticleLikes.propTypes = {
  favoritesCount: PropTypes.number,
  handlerFavoriteArticle: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};

ArticleLikes.defaultProps = {
  favoritesCount: 0,
  isActive: false,
};

export default ArticleLikes;
