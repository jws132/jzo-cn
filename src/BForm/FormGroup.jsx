import React from 'react';
import { Card } from 'antd';
import FormItem from './FormItem';

const FormGroup = props => {
  //表单分组
  const containerRender = ({ container, fields }) => {
    console.log(fields);
    const fieldNode = fields?.length > 0 ? itemRender(fields) : null;
    return container ? (
      <Card {...container.props} title={container.title || ''}>
        {fieldNode}
      </Card>
    ) : (
      fieldNode
    );
  };

  const itemRender = fields => {
    return fields.map((fieldConfig, index) => {
      const { container, fields, dataIndex, name, hideInForm } = fieldConfig;
      if (hideInForm) {
        return null;
      }
      const fieldKey = dataIndex || name || `field-${index}`;

      const itemProps = {
        dataIndex,
        name,
        fieldKey,
        ...fieldConfig,
      };

      return container || fields ? (
        <FormGroup {...itemProps} key={fieldKey} />
      ) : (
        <FormItem {...itemProps} key={fieldKey} />
      );
    });
  };

  return containerRender(props);
};

export default FormGroup;
