import React from 'react';
import PropTypes from 'prop-types';
import IconText from '../../articles/components/IconText';

const ArticleLikes = ({ favoritesCount, handlerFavoriteArticle }) => {
  return (
    <IconText
      type="like-o"
      text={favoritesCount}
      key="list-vertical-like-o"
      handler={handlerFavoriteArticle}
      className="article--likes"
    />
  );
};

ArticleLikes.propTypes = {
  favoritesCount: PropTypes.number,
  handlerFavoriteArticle: PropTypes.func.isRequired,
};

ArticleLikes.defaultProps = {
  favoritesCount: 0,
};

export default ArticleLikes;
