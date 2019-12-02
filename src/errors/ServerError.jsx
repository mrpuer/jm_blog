import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'antd';
import { connect } from 'react-redux';
import getErrorMessage from './getErrorMessage';
import { clearError } from './actions';

const ServerError = props => {
  const { children, error, hideModal } = props;
  if (error) {
    const errorMessage = getErrorMessage(error);
    return (
      <>
        <Modal
          title={errorMessage.title}
          visible={!!error}
          onCancel={hideModal}
          footer={[
            <Button key="submit" type="primary" onClick={hideModal}>
              Close
            </Button>,
          ]}
        >
          <div>{errorMessage.content}</div>
        </Modal>
        {children}
      </>
    );
  }
  return <>{children}</>;
};

ServerError.propTypes = {
  children: PropTypes.element,
  error: PropTypes.shape({
    data: PropTypes.oneOfType([
      PropTypes.shape({
        errors: PropTypes.oneOfType([
          PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
          PropTypes.string,
        ]),
      }),
      PropTypes.string,
    ]),
    status: PropTypes.number,
  }),
  hideModal: PropTypes.func.isRequired,
};

ServerError.defaultProps = {
  children: <div className="error" />,
  error: null,
};

const mapStateToProps = ({ error }) => ({
  error,
});

const dispatchProps = {
  hideModal: clearError,
};

export default connect(mapStateToProps, dispatchProps)(ServerError);
