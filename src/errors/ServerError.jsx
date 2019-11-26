import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'antd';
import { connect } from 'react-redux';
import { clearArticlesError } from '../articles/actions';
import mapErrorsToMessage from './mapErrorsToMessage';

const ServerError = props => {
  const { children, error, hideModal } = props;

  const errorMessage = mapErrorsToMessage[error];
  return (
    <>
      <Modal
        title="Server Error!"
        visible={!!error}
        onCancel={hideModal}
        footer={[
          <Button key="submit" type="primary" onClick={hideModal}>
            Close
          </Button>,
        ]}
      >
        <p>{errorMessage}</p>
      </Modal>
      {children}
    </>
  );
};

ServerError.propTypes = {
  children: PropTypes.element,
  error: PropTypes.number,
  hideModal: PropTypes.func.isRequired,
};

ServerError.defaultProps = {
  children: <div className="error" />,
  error: null,
};

const mapStateToProps = ({ articles: { error } }) => ({
  error,
});

const dispatchProps = {
  hideModal: clearArticlesError,
};

export default connect(mapStateToProps, dispatchProps)(ServerError);
