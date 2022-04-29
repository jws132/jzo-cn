import React, { useState, useMemo, useEffect } from 'react';
import { Input, InputNumber, Select, Switch, TreeSelect } from 'antd';
import { isArray, omit } from 'lodash';

class Field extends React.Component {
  constructor(props) {
    super(props);
    const { getInternalHooks } = props.fieldContext;
    getInternalHooks().initEntityValue(this);
  }
}

const ItemForm = ({
  form,
  type,
  title,
  placeholder,
  options,
  modelKeys,
  params,
  request,
  formProps = {},
  renderChild,
  ...restProps
}) => {
  const [newOptions, setNewOptions] = useState([]);
  const { valueField = 'value', labelField = 'label' } = modelKeys;
  const props = omit({ ...restProps }, ['formName']);

  useMemo(() => {
    if (isArray(options) && !options.length) {
      setNewOptions(options);
    }
  }, [options]);

  useEffect(() => {
    if (request) {
      getRequest();
    }
  }, [request, params]);

  const getRequest = async () => {
    const { code, data, success } = await request(params);
    if (success) {
      setNewOptions(data);
    }
    return { code, data };
  };

  const newFormProps = {
    allowClear: ['select', 'input'].includes(type),
    options: newOptions,
    ...formProps,
    ...props,
  };

  if (placeholder) {
    newFormProps.placeholder = placeholder;
  } else {
    newFormProps.placeholder = ['select'].includes(type)
      ? `请选择${title}`
      : `请输入${title}`;
  }

  switch (type) {
    case 'input':
      return <Input {...newFormProps} />;
    case 'password':
      return <Input.Password {...newFormProps} />;
    case 'textArea':
      return (
        <Input.TextArea
          autoSize={{ minRows: 2, maxRows: 6 }}
          maxLength={300}
          {...newFormProps}
        />
      );
    case 'inputNumber':
      return (
        <InputNumber
          precision={0}
          min={0}
          style={{
            width: '100%',
          }}
          {...newFormProps}
        />
      );
    case 'select':
      return (
        <Select {...newFormProps}>
          {newOptions.map(el => (
            <Select.Option
              key={el[valueField]}
              value={el[valueField]}
              disabled={el.disabled}
            >
              {el[labelField]}
            </Select.Option>
          ))}
        </Select>
      );
    case 'switch':
      return <Switch {...newFormProps} />;
    case 'treeSelect':
      return <TreeSelect {...newFormProps} />;
    case 'custom':
      const childrenCustom =
        Object.prototype.toString.call(renderChild) === '[object Function]'
          ? renderChild?.(form)
          : renderChild;
      return renderChild
        ? React.cloneElement(childrenCustom, { ...newFormProps })
        : null;
    default:
      return <Input {...newFormProps} />;
  }
};

ItemForm.defaultProps = {
  formLabel: '',
  options: [],
  modelKeys: {},
};

export default ItemForm;
