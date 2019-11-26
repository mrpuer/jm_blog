import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const Article = ({ articles }) => {
  const { slug } = useParams();
  const currentArticle = articles[slug];
  return <div>{currentArticle.title}</div>;
};

Article.propTypes = {
  articles: PropTypes.string.isRequired,
};

const mapDispatchToProps = ({ articles }) => ({
  articles: articles.all,
});

export default connect(mapDispatchToProps)(Article);
