import React from 'react';
import { InputNum } from '@jzo/a-cn';
import { accMul, accDiv } from './util';
import './index.less';

const MoneyInput = (multiple = 1) => ({
  value,
  onChange,
  placeholder = '请输入',
  ...rest
}) => {
  return (
    <InputNum
      value={!Number.isNaN(Number(value)) ? accDiv(value, multiple) : value}
      onChange={v => {
        onChange(!Number.isNaN(Number(v)) ? accMul(v, multiple) : v);
      }}
      precision={2}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default MoneyInput;
