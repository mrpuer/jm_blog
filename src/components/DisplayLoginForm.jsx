import React from 'react';
import { Form, Field } from 'formik';
import PropTypes from 'prop-types';

const DisplayLoginForm = ({ handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Field name="userEmail" type="email" label="Email" />
    </Form>
  );
};

DisplayLoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default DisplayLoginForm;
