import React from 'react';
import { Form } from 'antd';
import FormField from './FormField';
import { Input, InputNumber, Select, Switch, TreeSelect } from 'antd';
import FormContext from './FormContext';

class Field extends React.Component {
  disabled = false; //禁用
  visible = false; //不显示

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { formContext } = this.props;
    const { getInternalHooks } = formContext;
    getInternalHooks().fieldRegister(this);
  }

  setDisabled = disabled => {
    this.disabled = disabled;
    this.reRender();
  };

  getDisabled() {
    return this.disabled;
  }

  getVisible() {
    return this.visible;
  }

  setVisible = visible => {
    this.visible = visible;
    this.reRender();
  };

  reRender() {
    if (this.destroy) return;
    this.forceUpdate();
  }
  render() {
    const { type, formProps, modelKeys = {}, formContext } = this.props;
    const { valueField = 'value', labelField = 'label' } = modelKeys;
    console.log('this.props', this.props);
    const newFormProps = {
      ...formProps,
    };

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
      // case 'custom':
      //   const childrenCustom =
      //     Object.prototype.toString.call(renderChild) === '[object Function]'
      //       ? renderChild?.(form)
      //       : renderChild;
      //   return renderChild
      //     ? React.cloneElement(childrenCustom, { ...newFormProps })
      //     : null;
      default:
        return <Input {...newFormProps} />;
    }
  }
}

function FormItem(props) {
  const formContext = React.useContext(FormContext);
  const { fieldKey, title, label, itemProps, ...restProps } = props;
  const fieldTitle = title || label;
  const formProps = {
    fieldKey,
    formContext,
    ...restProps,
  };
  return (
    <Form.Item name={fieldKey} label={fieldTitle} {...itemProps}>
      <Field {...formProps} title={fieldTitle} />
    </Form.Item>
  );
}
export default FormItem;
