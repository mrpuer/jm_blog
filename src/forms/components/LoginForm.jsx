import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DisplayLoginForm from './DisplayLoginForm';
import { loginSchema } from '../../schemas/schemas';
import { onLogin } from '../actions';
import SpinnerWrapper from '../../spinner/SpinnerWrapper';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = ({ loginHandler, showSpinner }) => {
  return (
    <SpinnerWrapper isActive={showSpinner}>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          loginHandler(values).then(() => setSubmitting(false));
        }}
      >
        {data => <DisplayLoginForm data={data} />}
      </Formik>
    </SpinnerWrapper>
  );
};

LoginForm.propTypes = {
  loginHandler: PropTypes.func.isRequired,
  showSpinner: PropTypes.bool,
};

LoginForm.defaultProps = {
  showSpinner: false,
};

const mapStateToProps = ({ user: { isLoading } }) => ({
  showSpinner: isLoading,
});

const mapDispatch = {
  loginHandler: onLogin,
};

export default connect(mapStateToProps, mapDispatch)(LoginForm);
