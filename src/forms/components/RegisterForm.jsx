import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerSchema } from '../../schemas/schemas';
import DisplayRegisterForm from './DisplayRegisterForm';
import { onRegister } from '../actions';
import SpinnerWrapper from '../../spinner/SpinnerWrapper';

const initialValues = {
  email: '',
  password: '',
  username: '',
};

const RegisterForm = ({ registerHandler, showSpinner }) => {
  return (
    <SpinnerWrapper isActive={showSpinner}>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          registerHandler(values);
          setSubmitting(false);
        }}
      >
        {data => <DisplayRegisterForm data={data} />}
      </Formik>
    </SpinnerWrapper>
  );
};

RegisterForm.propTypes = {
  registerHandler: PropTypes.func.isRequired,
  showSpinner: PropTypes.bool,
};

RegisterForm.defaultProps = {
  showSpinner: false,
};

const mapStateToProps = ({ user: { isLoading } }) => ({
  showSpinner: isLoading,
});

const dispatchProps = {
  registerHandler: onRegister,
};

export default connect(mapStateToProps, dispatchProps)(RegisterForm);
