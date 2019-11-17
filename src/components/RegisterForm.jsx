import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerSchema } from '../schemas/schemas';
import DisplayRegisterForm from './DisplayRegisterForm';
import { onRegister } from '../actions/actionsCreator';

const initialValues = {
  email: '',
  password: '',
  username: '',
};

const RegisterForm = ({ registerHandler }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={registerHandler}
    >
      {data => <DisplayRegisterForm data={data} />}
    </Formik>
  );
};

RegisterForm.propTypes = {
  registerHandler: PropTypes.func.isRequired,
};

const dispatchProps = {
  registerHandler: onRegister,
};

export default connect(null, dispatchProps)(RegisterForm);
