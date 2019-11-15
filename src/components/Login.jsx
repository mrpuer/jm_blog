import React from 'react';
import { Formik } from 'formik';
import DisplayLoginForm from './DisplayLoginForm';
import { loginSchema } from '../schemas/schemas';

const initialValues = {
  email: '',
  password: '',
};

const handleSubmit = formProps => {
  const { email, password } = formProps;
  console.log(email, password);
};

const Login = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={handleSubmit}>
      {data => <DisplayLoginForm data={data} />}
    </Formik>
  );
};

export default Login;
