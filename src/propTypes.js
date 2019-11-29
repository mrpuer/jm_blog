import PropTypes from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
export const articleProps = PropTypes.shape({
  article: PropTypes.objectOf({
    slug: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    body: PropTypes.string,
    tagList: PropTypes.arrayOf(PropTypes.string || PropTypes.undef),
    createdAt: PropTypes.dateFormat,
    updatedAt: PropTypes.dateFormat,
    favorited: PropTypes.bool,
    favoritesCount: PropTypes.num,
    isLoading: PropTypes.bool,
  }),
});

export const profileProps = PropTypes.shape({
  username: PropTypes.string,
  bio: PropTypes.string,
  image: PropTypes.string,
  following: PropTypes.bool,
  isLoading: PropTypes.bool,
});
