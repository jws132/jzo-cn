import React, { forwardRef, useState, useEffect } from 'react';
import { Form, Row } from 'antd';
import {
  getItemLayout,
  toCDB,
  defaultValidateMessages,
  dateComponentType,
  formateDate,
} from './utils/index';
import { MediaQueries } from '@jzo/a-cn';
import FormGroup from './FormGroup';

const JForm = props => {
  const {
    actionRef,
    layout,
    type = 'field',
    fields = [],
    container,
    itemLayout,
    actionsPosition = 'default',
    actionsRender,
    initialValues,
    onValuesChange,
    onFinish,
    children,
    size,
    onFinishFailed,
    submitCall,
    ...restProps
  } = props;

  const [form] = Form.useForm();

  // 收集日期字段及格式化的映射关系
  const collectDateField = () => {
    const dateFields = {};
    fields &&
      fields.forEach(el => {
        const { dataIndex, name, type, props = {} } = el;
        if (Object.keys(dateComponentType).includes(type)) {
          dateFields[dataIndex || name] = {
            type,
            format: (props && props.format) || dateComponentType[type],
          };
        }
      });
    return dateFields;
  };

  // 转换表单值
  const formatValues = fieldsValue => {
    Object.keys(fieldsValue).forEach(key => {
      let value = fieldsValue[key];
      if (typeof value === 'string') {
        value = value.replace(/(^\s*)|(\s*$)/g, ''); // 去空格
        fieldsValue[key] = toCDB(value); // 统一转半角
      }
    });

    // 转换日期moment
    const dateFields = collectDateField();
    Object.keys(dateFields).forEach(field => {
      const { type, format } = dateFields[field];
      if (typeof type === 'string') {
        fieldsValue[field] = formateDate(fieldsValue[field], format);
      }
    });
    return fieldsValue;
  };

  return (
    <MediaQueries>
      {matchedPoint => {
        const normalizedItemLayout = getItemLayout({
          itemLayout,
          layout,
          matchedPoint,
        });

        const fieldGroupContext = {
          layout,
          itemLayout: {
            ...normalizedItemLayout,
            layout,
          },
          size,
          matchedPoint,
          formInstance: {
            ...form,
            formatValues,
            onValidate: callback => {
              form
                .validateFields()
                .then(values => {
                  collectDateField();
                  const params = formatValues(values);
                  callback && callback(params);
                })
                .catch(errorInfo => {
                  onFinishFailed && onFinishFailed(errorInfo);
                });
            },
          },
        };

        //传入基础配置布局context
        const wrapperChildren = () =>
          fields ? (
            <FormGroup
              fields={fields}
              container={container}
              actionsPosition={actionsPosition}
              actionsRender={actionsRender}
              {...fieldGroupContext}
            />
          ) : (
            children
          );
        const formProps = {
          initialValues: initialValues,
          onValuesChange,
          onFinish: fieldsValue => {
            submitCall && submitCall(formatValues(fieldsValue));
          },
          children: wrapperChildren,
          wrapperCol: fieldGroupContext.itemLayout.wrapperCol,
          labelCol: fieldGroupContext.itemLayout.labelCol,
          validateMessages: defaultValidateMessages,
          ...restProps,
        };
        return (
          <Form
            {...formProps}
            form={fieldGroupContext.formInstance}
            layout={layout}
          />
        );
      }}
    </MediaQueries>
  );
};

JForm.defaultProps = {
  fields: [],
  initialValues: {},
  layout: 'horizontal', //horizontal | vertical | inline
  onFinish: () => {},
  onValuesChange: () => {},
  size: 'middle',
  actionsRender: [],
  itemLayout: {
    cols: 1,
  },
};

export default JForm;
