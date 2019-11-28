import React from 'react';
import PropTypes from 'prop-types';
import { Empty, Spin } from 'antd';

const SpinnerWrapper = ({ isActive, children }) => {
  return isActive ? (
    <Spin size="large" tip="Please wait...">
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
    </Spin>
  ) : (
    <>{children}</>
  );
};

SpinnerWrapper.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.element.isRequired,
};

SpinnerWrapper.defaultProps = {
  isActive: false,
};

export default SpinnerWrapper;
