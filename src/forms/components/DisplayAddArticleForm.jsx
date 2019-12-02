import React from 'react';
import { Form, Field, FieldArray } from 'formik';
import { Button, Form as AntForm, Icon } from 'antd';
import PropTypes from 'prop-types';
import { AntInput, AntTextArea } from './CreateAntField';

const DisplayAddArticleForm = ({ data: { submitCount, isSubmitting, values } }) => {
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
        <FieldArray
          name="tagList"
          render={arrayHelpers => (
            <div>
              {values.tagList &&
                values.tagList.length > 0 &&
                values.tagList.map((tag, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <AntForm.Item key={index}>
                    <Field
                      name={`tagList.${index}`}
                      // component={AntInput}
                      label="Tag Name"
                    />
                    <Icon
                      className="dynamic-delete-button"
                      type="minus-circle-o"
                      onClick={() => arrayHelpers.remove(index)}
                    />
                  </AntForm.Item>
                ))}
              <AntForm.Item>
                <Button type="dashed" onClick={() => arrayHelpers.push('')}>
                  <Icon type="plus" /> Add tag
                </Button>
              </AntForm.Item>
            </div>
          )}
        />
      </AntForm.Item>
      <AntForm.Item>
        <Button type="primary" htmlType="submit" loading={isSubmitting}>
          Add new article
        </Button>
      </AntForm.Item>
    </Form>
  );
};

DisplayAddArticleForm.propTypes = {
  data: PropTypes.shape({
    submitCount: PropTypes.number,
    isSubmitting: PropTypes.bool,
    values: PropTypes.shape({
      tagList: PropTypes.arrayOf(PropTypes.string),
    }),
  }),
};

DisplayAddArticleForm.defaultProps = {
  data: {
    submitCount: 0,
    isSubmitting: false,
  },
};

export default DisplayAddArticleForm;
