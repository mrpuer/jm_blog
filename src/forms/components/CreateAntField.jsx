import React from 'react';
import { Input, Form } from 'antd';

const CreateAntField = AntComponent => ({
  field,
  form,
  hasFeedback,
  label,
  submitCount,
  type,
  ...props
}) => {
  const touched = form.touched[field.name];
  const submitted = submitCount > 0;
  const hasError = form.errors[field.name];
  const submittedError = hasError && submitted;
  const touchedError = hasError && touched;
  const onBlur = () => form.setFieldTouched(field.name, true);
  const onInputChange = ({ target: { value } }) => form.setFieldValue(field.name, value);
  const onChange = value => form.setFieldValue(field.name, value);
  return (
    <Form.Item
      label={label}
      hasFeedback={(hasFeedback && submitted) || (hasFeedback && touched)}
      help={submittedError || touchedError ? hasError : false}
      validateStatus={submittedError || touchedError ? 'error' : 'success'}
    >
      <AntComponent
        {...field}
        {...props}
        onBlur={onBlur}
        onChange={type ? onInputChange : onChange}
      />
    </Form.Item>
  );
};

export const AntInput = CreateAntField(Input);
export const AntInputPassword = CreateAntField(Input.Password);
export const AntTextArea = CreateAntField(Input.TextArea);
