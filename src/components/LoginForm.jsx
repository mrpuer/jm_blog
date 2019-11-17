import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DisplayLoginForm from './DisplayLoginForm';
import { loginSchema } from '../schemas/schemas';
import { onLogin } from '../actions/actionsCreator';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = ({ loginHandler }) => {
  return (
    <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={loginHandler}>
      {data => <DisplayLoginForm data={data} />}
    </Formik>
  );
};

LoginForm.propTypes = {
  loginHandler: PropTypes.func.isRequired,
};

const mapDispatch = {
  loginHandler: onLogin,
};

export default connect(null, mapDispatch)(LoginForm);
