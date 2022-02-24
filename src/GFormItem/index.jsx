import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Form, Select } from 'antd';
import { validEmoji, mapTypeToComponent, generateOption } from './util';
import InputNum from './InputNum';

const FormItem = Form.Item;
const { OptGroup } = Select;

function GFormItem({ itemSet, labelBasicSpan, layout }) {
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
    renderChild,
    valueEnum = {},
    disabled = false,
    props = {}, // 组件原生的属性
    itemProps = {}, // FormItem的原生属性
    column,
  } = itemSet;
  if (hideInForm) {
    return null;
  }

  const newOptionsData = useMemo(() => {
    if (JSON.stringify(valueEnum) !== '{}') {
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
    <FormItem
      name={dataIndex || name}
      label={title || label}
      {...newValidOptions}
      {...itemProps}
    >
      {children}
    </FormItem>
  );
}
GFormItem.propTypes = {
  itemSet: PropTypes.object, // 表单字段配置项
  gutter: PropTypes.oneOfType([PropTypes.object, PropTypes.number]), // 输入项之间的间隔
  labelBasicSpan: PropTypes.number, // label占比
  layout: PropTypes.string, // label占比
};

GFormItem.defaultProps = {
  itemSet: {},
  gutter: 0,
  labelBasicSpan: 8,
  layout: 'horizontal',
};

GFormItem.InputNumer = InputNum;

export default GFormItem;