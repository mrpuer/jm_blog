import React from 'react';
import { Form, Field } from 'formik';
import { Button, Form as AntForm } from 'antd';
import PropTypes from 'prop-types';
import { AntInput, AntInputPassword } from './CreateAntField';

const DisplayRegisterForm = ({ data }) => {
  const { submitCount, isSubmitting } = data;
  return (
    <Form className="form">
      <Field
        name="username"
        type="text"
        label="Username"
        component={AntInput}
        submitCount={submitCount}
        hasFeedback
      />
      <Field
        name="email"
        type="email"
        label="Email"
        component={AntInput}
        submitCount={submitCount}
        hasFeedback
      />
      <Field
        name="password"
        type="password"
        label="Password"
        component={AntInputPassword}
        submitCount={submitCount}
        hasFeedback
      />
      <Field
        name="passwordRepeat"
        type="password"
        label="Password"
        component={AntInputPassword}
        submitCount={submitCount}
        hasFeedback
      />
      <AntForm.Item>
        <Button type="primary" htmlType="submit" disabled={isSubmitting}>
          Register
        </Button>
      </AntForm.Item>
    </Form>
  );
};

DisplayRegisterForm.propTypes = {
  data: PropTypes.shape({
    submitCount: PropTypes.number,
    isSubmitting: PropTypes.bool,
  }),
};

DisplayRegisterForm.defaultProps = {
  data: {
    submitCount: 0,
    isSubmitting: false,
  },
};

export default DisplayRegisterForm;
