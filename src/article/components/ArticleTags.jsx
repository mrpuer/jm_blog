import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'antd';

const ArticleTags = ({ tags }) => {
  return (
    <span>
      {tags.map(tag => (
        <Tag color="blue" key={tag}>
          {tag}
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
