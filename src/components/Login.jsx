import React from 'react';
import { Formik } from 'formik';
import DisplayLoginForm from './DisplayLoginForm';

const initialValues = {
  userEmail: '',
  userPassword: '',
};

const handleSubmit = formProps => {
  const { userEmail, userPassword } = formProps;
  console.log(userEmail, userPassword);
};

const Login = () => {
  return <Formik initialValues={initialValues} render={DisplayLoginForm} onSubmit={handleSubmit} />;
};

export default Login;
