import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'antd';
import { Link } from 'react-router-dom';

const ArticleTags = ({ tags }) => {
  return (
    <span>
      {tags.map(tag => (
        <Tag color="blue" key={tag}>
          <Link to={`/?tag=${tag}`}>{tag}</Link>
        </Tag>
      ))}
    </span>
  );
};

ArticleTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};

ArticleTags.defaultProps = {
  tags: [],
};

export default ArticleTags;
