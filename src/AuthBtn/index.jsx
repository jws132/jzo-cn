import React from 'react';
import { Confirm, Popconfirm, More, Button } from './components';

const TYPE_TO_COMPONENT = {
  Confirm,
  Popconfirm,
  Button,
  More,
};
/**
 * 表格按钮组件
 * 数组props 为原始Button属性
 * @param {*} param0
 */

const AuthBtn = ({
  type,
  hide,
  onOk,
  disabled,
  confirmText,
  tipText = '',
  loading,
  name,
  children,
  placement = 'top',
  props,
  ...restProps
}) => {
  if (hide) return null;

  const componentProps = {
    onOk,
    disabled,
    loading,
    placement,
    tipText,
    props,
    ...restProps,
  };

  if (['confirm', 'popconfirm', 'tooltip', 'more'].includes(type)) {
    const componentType = type.replace(type[0], type[0].toUpperCase());
    const Component = TYPE_TO_COMPONENT[componentType];
    if (['confirm', 'popconfirm'].includes(type)) {
      componentProps.confirmText = confirmText;
    }
    return (
      <Component {...componentProps}>{children ? children : name}</Component>
    );
  } else {
    return (
      <Button type={type} {...componentProps}>
        {children ? children : name}
      </Button>
    );
  }
};

AuthBtn.defaultProps = {
  type: 'link',
  onOk: () => {}, // 回调方法
  hide: false, // 是否显示
  disabled: false, //是否禁用
  confirmText: '', //提示信息
  loading: false,
  placement: 'top',
};

export default AuthBtn;
