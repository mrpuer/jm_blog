import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
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
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };
  return (
    <SpinnerWrapper isActive={showSpinner}>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting }) => {
          loginHandler(values).then(result => {
            if (result) history.replace(from);
            setSubmitting(false);
          });
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
