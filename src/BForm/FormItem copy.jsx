import React from 'react';
import { Form } from 'antd';
import FormField from './FormField';

const FormItem = ({
  dataIndex,
  name,
  title,
  label,
  itemProps,
  required,
  ...restProps
}) => {
  const fieldKey = dataIndex || name || `field-${index}`;
  const fieldTitle = title || label;
  const formProps = {
    fieldKey,
    ...restProps,
  };

  return (
    <Form.Item name={fieldKey} label={fieldTitle} {...itemProps}>
      <FormField {...formProps} title={fieldTitle} />
    </Form.Item>
  );
};

FormItem.defaultProps = {
  cols: 3,
  fields: [],
};

export default FormItem;
