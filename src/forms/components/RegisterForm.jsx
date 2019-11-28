import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { message, Modal } from 'antd';
import { registerSchema } from '../../schemas/schemas';
import DisplayRegisterForm from './DisplayRegisterForm';
import { onRegister } from '../actions';

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
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        registerHandler(values)
          .then(() => {
            message.success('Register successful!');
            setSubmitting(false);
          })
          .catch(({ response }) => {
            Modal.error({
              title: 'Register Error:',
              content: (
                <>
                  {Object.keys(response.data.errors).map(key => (
                    <div key={key}>{` - ${key} ${response.data.errors[key][0]}`}</div>
                  ))}
                </>
              ),
            });
            setSubmitting(false);
          });
      }}
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
