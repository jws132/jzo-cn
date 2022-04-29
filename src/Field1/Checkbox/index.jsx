import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Checkbox as JCheckBox } from 'antd';

/**
 * CheckBoxGroup组件二次分装
 * @param {*} param0
 */

const CheckBox = ({
  value = [],
  onChange,
  optionsData = [],
  models,
  ...restProps
}) => {
  const [defaultValue, setDefaultValue] = useState();
  const [valueKey, labelKey] = models;

  const newRadioData = useMemo(() => {
    return optionsData.map(el => ({
      value: el[valueKey],
      label: el[labelKey],
    }));
  }, [optionsData]);

  useEffect(() => {
    setDefaultValue(value);
  }, [value]);

  const newProps = {
    value: defaultValue,
    options: newRadioData,
    onChange: changedValue => {
      setDefaultValue(changedValue);
      onChange?.(changedValue);
    },
    ...restProps,
  };
  return <JCheckBox.Group {...newProps} />;
};

CheckBox.propTypes = {
  defaultValue: PropTypes.array,
  value: PropTypes.array, //获取数据数组
  onChange: PropTypes.func, //触发事件
  optionsData: PropTypes.array, //组件赋值数据,
  models: PropTypes.array, //替换传递的value和lable
};

CheckBox.defaultProps = {
  defaultValue: [],
  value: [], //获取数据数组
  onChange: () => {}, //触发事件
  optionsData: [], //组件赋值数据,
  models: ['value', 'label'], //替换传递的value和lable
};

export default CheckBox;
