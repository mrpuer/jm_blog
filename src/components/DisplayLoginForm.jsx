import React from 'react';
import { Form, Field } from 'formik';
import { Button, Form as AntForm } from 'antd';
import { AntInput, AntInputPassword } from './CreateAntField';

// eslint-disable-next-line react/prop-types
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
        <Button type="primary" htmlType="submit" disabled={isSubmitting}>
          Login
        </Button>
      </AntForm.Item>
    </Form>
  );
};

export default DisplayLoginForm;
