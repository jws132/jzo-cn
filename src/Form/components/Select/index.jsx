import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
const { Option } = Select;
/**
 * CheckBoxGroup组件二次分装
 * @param {*} param0
 */

const JSelect = ({
  value,
  onChange,
  optionsData = [],
  models,
  ...restProps
}) => {
  const [valueKey, labelKey] = models;
  const newProps = {
    value,
    onChange: changedValue => {
      onChange && onChange(changedValue);
    },
    ...restProps,
  };
  return (
    <Select style={{ width: '100%' }} {...newProps}>
      {optionsData.map((item, key) => {
        return (
          <Option
            {...item}
            value={item[valueKey]}
            label={item[labelKey]}
            key={item[valueKey]}
          >
            {item[labelKey]}
          </Option>
        );
      })}
    </Select>
  );
};

JSelect.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.number,
  ]), //获取数据数组
  onChange: PropTypes.func, //触发事件
  optionsData: PropTypes.array, //组件赋值数据,
  models: PropTypes.array, //替换传递的value和lable
};

JSelect.defaultProps = {
  onChange: () => {}, //触发事件
  optionsData: [], //组件赋值数据,
  models: ['value', 'label'], //替换传递的value和lable
};

export default JSelect;
