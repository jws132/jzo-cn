/**
 * @author 狄路
 * @version 0.0.1
 * @function Form组件
 * @date 2021/11/22 1:30
 */
import React, { useImperativeHandle } from 'react';
import { Form, Row } from 'antd';
import FormContext from './FormContext';
import FormGroup from './FormGroup';
import { useForm } from './FormStore';
import { useMemo } from 'react';

const GForm = React.forwardRef(
  (
    {
      mode = 'create',
      fields,
      cols,
      layout,
      initialValues,
      gutter = 0,
      children,
      onValuesChange,
      formItemLayout,
      actionsRender,
      onFinish,
      onFinishFailed,
      form,
      ...restProps
    },
    ref,
  ) => {
    // 通过Form.useForm对表单数据域进行交互。useForm是React Hooks的实现，只能用于函数组件
    const [formInstance] = useForm(form);

    useImperativeHandle(ref, () => ({
      ...formInstance,
    }));

    const formContextValue = useMemo(() => {
      return {
        ...formInstance,
      };
    }, [formInstance]);

    const finalChildren = fields ? (
      <FormGroup
        cols={cols}
        fields={fields}
        itemLayout={formItemLayout}
        //actionsRender={actionsRender}
        formInstance={formInstance}
      />
    ) : (
      children
    );

    const wrapperNode = (
      <FormContext.Provider value={formContextValue}>
        {finalChildren}
      </FormContext.Provider>
    );

    const formProps = {
      layout,
      initialValues,
      onValuesChange,
      onFinish: fieldsValue => {
        // eslint-disable-next-line no-unused-expressions
        onFinish && onFinish(formatValues(fieldsValue));
      },
      children: wrapperNode,
      ...formItemLayout,
      ...restProps,
    };
    return <Form {...formProps} />;
  },
);

GForm.defaultProps = {
  cols: 3, // 默认一行3列
  gutter: 0, // 表格间隙
  actionsRender: () => {},
  onValuesChange: () => {},
  layout: 'horizontal', // horizontal | vertical | inline
  // 默认布局样式
  formItemLayout: {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  },
};

GForm.useForm = useForm;

export default GForm;
