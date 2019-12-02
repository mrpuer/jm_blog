import React from 'react';
import { Form, Field } from 'formik';
import { Button, Form as AntForm, Icon } from 'antd';
import PropTypes from 'prop-types';
import { AntInput, AntTextArea } from './CreateAntField';

const DisplayAddArticleForm = ({ data: { submitCount, isSubmitting } }) => {
  return (
    <Form className="form">
      <Field
        name="title"
        type="text"
        label="Title"
        component={AntInput}
        submitCount={submitCount}
        hasFeedback
      />
      <Field
        name="description"
        type="text"
        label="Description"
        component={AntInput}
        submitCount={submitCount}
        hasFeedback
      />
      <Field
        name="body"
        type="textarea"
        label="Body"
        component={AntTextArea}
        submitCount={submitCount}
        hasFeedback
      />
      <AntForm.Item>
        <Button type="dashed">
          <Icon type="plus" /> Add field
        </Button>
      </AntForm.Item>
      <AntForm.Item>
        <Button type="primary" htmlType="submit" loading={isSubmitting}>
          Login
        </Button>
      </AntForm.Item>
    </Form>
  );
};

DisplayAddArticleForm.propTypes = {
  data: PropTypes.shape({
    submitCount: PropTypes.number,
    isSubmitting: PropTypes.bool,
  }),
};

DisplayAddArticleForm.defaultProps = {
  data: {
    submitCount: 0,
    isSubmitting: false,
  },
};

export default DisplayAddArticleForm;
