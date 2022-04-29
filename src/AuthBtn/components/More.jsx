import React, { useMemo } from 'react';
import { Menu, Dropdown } from 'antd';
import Button from './Button';
import { uniqueId, keyBy, omit } from 'lodash';
import { DownOutlined } from '@ant-design/icons';
import { newConfirm } from './utils/index';

export default ({
  type = 'link',
  children,
  confirmText,
  disabled,
  loading,
  menuChildren,
  onOk,
  props,
  ...restProps
}) => {
  const newChildren = useMemo(() => {
    return menuChildren.map(el => {
      el.key = uniqueId('menu_');
      return el;
    });
  }, [menuChildren]);

  var keyMenu = keyBy(newChildren, 'key');

  function handleMenuClick({ item, key, keyPath, domEvent }) {
    domEvent.stopPropagation();
    const { type, confirmText } = keyMenu?.[key] || {};
    if (type === 'confirm') {
      newConfirm({
        confirmText,
        loading,
        onOk: () => keyMenu?.[key]?.onOk?.(),
      });
    } else {
      keyMenu?.[key]?.onOk?.();
    }
  }
  const restDropdown = omit(restProps, 'placement');
  console.log(restDropdown);
  return (
    <Dropdown
      type="link"
      loading={loading}
      overlay={
        <Menu onClick={handleMenuClick}>
          {newChildren.map(el => (
            <Menu.Item key={el.key} {...el}>
              {el.name}
            </Menu.Item>
          ))}
        </Menu>
      }
      {...restDropdown}
    >
      <Button type="link" {...props}>
        {children}
        <DownOutlined />
      </Button>
    </Dropdown>
  );
};
