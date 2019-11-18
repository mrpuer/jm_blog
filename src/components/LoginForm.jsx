import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal, message } from 'antd';
import DisplayLoginForm from './DisplayLoginForm';
import { loginSchema } from '../schemas/schemas';
import { onLogin } from '../actions/actionsCreator';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = ({ loginHandler }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        loginHandler(values)
          .then(() => {
            message.success('Login successful!');
            setSubmitting(false);
          })
          .catch(({ response }) => {
            Modal.error({
              title: 'Login Error:',
              content: Object.keys(response.data.errors)
                .map(key => `${key} ${response.data.errors[key][0]}`)
                .join('\n'),
            });
            setSubmitting(false);
          });
      }}
    >
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
