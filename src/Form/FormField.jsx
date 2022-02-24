import React, { useMemo, useEffect } from 'react';
import { Form, Col } from 'antd';
import { mapTypeToComponent, generateOption, allMatch } from './utils/index';

const isVerifyOption = ['checkboxGroup', 'select', 'radioGroup', 'radioButton'];

const FormField = ({ itemSet, column, labelBasicSpan, layout }) => {
  const {
    name,
    dataIndex,
    label,
    valueEnum,
    optionsData = [],
    valueType,
    type,
    rules = [],
    models = [],
    validOptions = {}, // 校验相关
    render,
    disabled = false,
    props = {},
    visible = true,
    required = false,
    itemProps = {},
    renderChild,
    ...restProps
  } = itemSet;
  const newOptionsData = useMemo(() => {
    if (valueEnum) {
      return generateOption(valueEnum);
    }
    return optionsData;
  }, [optionsData, valueEnum]);

  // 组件类型
  const componentType = type.toLowerCase();

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

  if (componentType === 'custom' && renderChild) {
    debugger;
    // 自定义组件
    children =
      typeof renderChild === 'object'
        ? React.cloneElement(renderChild, { ...props })
        : renderChild;
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
    const [valueKey = 'value', labelKey = 'label', uniqueKey] = models;

    const newProps = {
      ...defaultProps,
      disabled,
      ...props,
    };

    if (WrappedComponent) {
      children = (
        <WrappedComponent {...newProps}>
          {isOptionFields
            ? newOptionsData.map(v => {
                if (componentType === 'selectgroup') {
                  return (
                    <OptGroup
                      label={v[labelKey]}
                      key={v[uniqueKey] || v[valueKey] || v[labelKey]}
                    >
                      {v.children?.map(child => (
                        <SubComponent
                          key={String(child[uniqueKey] || child[valueKey])}
                          value={child[valueKey]}
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
                    key={String(v[valueKey])}
                    value={v[valueKey]}
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
    <Form.Item
      name={dataIndex || name}
      label={label}
      {...newValidOptions}
      {...itemProps}
    >
      {children}
    </Form.Item>
  );
};

FormField.defaultProps = {
  models: ['value', 'label'], //替换传递的value和lable
};

export default FormField;
