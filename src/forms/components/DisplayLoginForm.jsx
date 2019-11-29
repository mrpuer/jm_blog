import React from 'react';
import { Form, Field } from 'formik';
import { Button, Form as AntForm } from 'antd';
import PropTypes from 'prop-types';
import { AntInput, AntInputPassword } from './CreateAntField';

const DisplayLoginForm = ({ data: { submitCount, isSubmitting } }) => {
  return (
    <Form className="form">
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
      <AntForm.Item>
        <Button type="primary" htmlType="submit" loading={isSubmitting}>
          Login
        </Button>
      </AntForm.Item>
    </Form>
  );
};

DisplayLoginForm.propTypes = {
  data: PropTypes.shape({
    submitCount: PropTypes.number,
    isSubmitting: PropTypes.bool,
  }),
};

DisplayLoginForm.defaultProps = {
  data: {
    submitCount: 0,
    isSubmitting: false,
  },
};

export default DisplayLoginForm;
