import React from 'react';
import { Formik } from 'formik';
import { registerSchema } from '../schemas/schemas';
import DisplayRegisterForm from './DisplayRegisterForm';

const initialValues = {
  email: '',
  password: '',
  username: '',
};

const handleSubmit = formProps => {
  const { email, password, username } = formProps;
  console.log(email, password, username);
};

const Register = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={registerSchema} onSubmit={handleSubmit}>
      {data => <DisplayRegisterForm data={data} />}
    </Formik>
  );
};

export default Register;
