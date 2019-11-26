import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'antd';
import { connect } from 'react-redux';
import { clearArticlesError } from '../articles/actions';
import mapErrorsToMessage from './mapErrorsToMessage';

const ServerError = props => {
  // eslint-disable-next-line react/prop-types
  const { children, error, hideModal } = props;
  // return error ? (
  //   <>
  //     <Modal title="Basic Modal" visible={!!error} onOk={hideModal}>
  //       <p>Some contents...</p>
  //       <p>Some contents...</p>
  //       <p>Some contents...</p>
  //     </Modal>
  //     {children}
  //   </>
  // ) : (
  //   <>{children}</>
  // );

  // const errorMessage = mapErrorsToMessage[error] || 'Unknown error. Try again.';
  return (
    <>
      <Modal
        title="Server Error!"
        visible={error}
        onOk={hideModal}
        footer={[
          <Button key="submit" type="primary" onClick={hideModal}>
            Close
          </Button>,
        ]}
      >
        <p>{error}</p>
      </Modal>
      {children}
    </>
  );
};

ServerError.propTypes = {
  children: PropTypes.element,
  // hasError: PropTypes.bool,
  hideModal: PropTypes.func.isRequired,
};

ServerError.defaultProps = {
  children: <div className="error" />,
  // hasError: false,
};

const mapStateToProps = ({ articles: { error } }) => ({
  error: { hasError: !!error, errorMessage: mapErrorsToMessage[error] },
});

const dispatchProps = {
  hideModal: clearArticlesError,
};

export default connect(mapStateToProps, dispatchProps)(ServerError);
