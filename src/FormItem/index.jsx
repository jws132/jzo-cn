import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Form, Select } from 'antd';
import { validEmoji, mapTypeToComponent } from './util';
import { useState } from 'react';

const FormItem = Form.Item;
const { OptGroup } = Select;

function JFormItem({ fields, itemSet, column, labelBasicSpan, layout }) {
  const {
    type = 'input', // 类型
    title, // 标签
    label, // 标签
    dataIndex, // 入参名
    name, // 入参名
    hideInForm = false, // 是否失效隐藏
    validOptions = {}, // 校验相关
    optionsData = [], // 下拉框数据
    models = [], // 下拉框数据对应的字段名['value','label']
    renderFormItem,
    props = {}, // 组件原生的属性
    itemProps = {}, // FormItem的原生属性
    column: itemColumn,
    request,
  } = fields || itemSet;

  if (hideInForm) {
    return null;
  }

  // const options = useMemo(() => {
  //   return optionsData;
  // }, [optionsData]);

  // useEffect(() => {
  //   console.log(1111111111111);
  //   setOptions(optionsData);
  // }, [optionsData]);

  // useEffect(() => {
  //   if (request) {
  //     getRequest();
  //   }
  // }, [request]);

  // const getRequest = async () => {
  //   const { code, data, success } = await request(params);
  //   if (success) {
  //     setOptions(data);
  //   }
  //   return { code, data };
  // };

  // 组件类型
  const componentType = type.toLowerCase();

  // 布局相关
  const span = Math.min(
    Number.isNaN(Number(itemColumn)) ? 1 : itemColumn,
    column,
  ); // 列占比数
  let labelSpan = Math.ceil(labelBasicSpan / (span || 1));
  if ((!title && !label) || layout === 'vertical') {
    labelSpan = 0;
  }
  const totalSpan = 24;
  const layoutProps = {
    labelCol: { span: layout === 'vertical' ? totalSpan : labelSpan },
    wrapperCol: { span: totalSpan - labelSpan },
    label: title || label,
  };

  useEffect(() => {
    // 校验配置，全局控制输入不能有emoji
    if (['input', 'password', 'textarea'].includes(componentType)) {
      const { rules = [] } = validOptions;
      const newRules = [];
      const commonRules = [
        () => ({
          validator: validEmoji,
        }),
      ];

      const whitespaceRules = { whitespace: true };

      // 是否有必填校验
      const hasEmptyRule = rules.some(element => element.required);
      hasEmptyRule && newRules.push(whitespaceRules);

      validOptions.rules = [].concat(rules || [], newRules);
    }
  }, []);

  const newValidOptions = {
    validateFirst: true, // validateFirst：当某一规则校验不通过时，是否停止剩下的规则的校验
    ...validOptions,
  };

  let children = null;

  if (renderFormItem) {
    const formProps = {
      dataIndex,
      name,
      optionsData,
      ...props,
    };
    // 自定义组件
    children =
      typeof renderFormItem === 'object'
        ? React.cloneElement(renderFormItem, { ...formProps })
        : renderFormItem?.({ props: formProps });
  } else {
    const { WrappedComponent, defaultProps = {}, childStyle, SubComponent } =
      mapTypeToComponent[componentType] || {};

    // 是否有子组件
    const isOptionFields = [
      'select',
      'selectgroup',
      'radiogroup',
      'radiogroupbutton',
      'checkboxgroup',
    ].includes(componentType);
    const [vauleKey = 'value', labelKey = 'label', uniqueKey] = models;

    const componentProps = {
      ...defaultProps,
      ...props,
    };

    if (WrappedComponent) {
      children = (
        <WrappedComponent {...componentProps}>
          {isOptionFields
            ? optionsData.map(v => {
                if (componentType === 'selectgroup') {
                  return (
                    <OptGroup
                      label={v[labelKey]}
                      key={v[uniqueKey] || v[vauleKey] || v[labelKey]}
                    >
                      {v.children?.map(child => (
                        <SubComponent
                          key={String(child[uniqueKey] || child[vauleKey])}
                          value={child[vauleKey]}
                          style={childStyle}
                          disabled={child.disabled}
                        >
                          {child[labelKey]}
                        </SubComponent>
                      ))}
                    </OptGroup>
                  );
                }
                return (
                  <SubComponent
                    key={String(v[vauleKey])}
                    value={v[vauleKey]}
                    style={childStyle}
                    disabled={v.disabled}
                  >
                    {v[labelKey]}
                  </SubComponent>
                );
              })
            : null}
        </WrappedComponent>
      );
    }
  }

  return (
    <FormItem
      name={dataIndex || name}
      {...layoutProps}
      {...newValidOptions}
      {...itemProps}
    >
      {children}
    </FormItem>
  );
}
JFormItem.propTypes = {
  fields: PropTypes.object, // 表单字段配置项
  gutter: PropTypes.oneOfType([PropTypes.object, PropTypes.number]), // 输入项之间的间隔
  column: PropTypes.number, // 一行几列
  labelBasicSpan: PropTypes.number, // label占比
  layout: PropTypes.string, // label占比
  request: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

JFormItem.defaultProps = {
  fields: {},
  gutter: 0,
  column: 3,
  labelBasicSpan: 8,
  layout: 'horizontal',
};

export default JFormItem;
