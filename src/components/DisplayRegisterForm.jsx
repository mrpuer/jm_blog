import React from 'react';
import { Form, Field } from 'formik';
import { Button, Form as AntForm } from 'antd';
import { AntInput, AntInputPassword } from './CreateAntField';

// eslint-disable-next-line react/prop-types
const DisplayRegisterForm = ({ data: { submitCount, isSubmitting } }) => {
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
      <AntForm.Item>
        <Button type="primary" htmlType="submit" disabled={isSubmitting}>
          Register
        </Button>
      </AntForm.Item>
    </Form>
  );
};

export default DisplayRegisterForm;
