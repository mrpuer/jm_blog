import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo);
    this.setState({ hasError: true });
  }

  handleOk() {
    this.setState({ hasError: false });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    return hasError ? (
      <>
        <div>ERROR!</div>
        <Modal title="Title" onOk={this.handleOk}>
          <p>ModalText</p>
        </Modal>
      </>
    ) : (
      <>{children}</>
    );
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element,
};

ErrorBoundary.defaultProps = {
  children: <div className="error" />,
};
