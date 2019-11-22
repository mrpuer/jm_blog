import React from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

IconText.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

IconText.defaultProps = {
  text: '',
};

export default IconText;
