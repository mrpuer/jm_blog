import React from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

const IconText = ({ type, text, handler }) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
  <span onClick={handler}>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

IconText.propTypes = {
  type: PropTypes.string.isRequired,
  handler: PropTypes.func,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

IconText.defaultProps = {
  text: '',
  handler: () => {},
};

export default IconText;
