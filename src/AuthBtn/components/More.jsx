import React, { useMemo } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { uniqueId, keyBy } from 'lodash';
import { DownOutlined } from '@ant-design/icons';
import { newConfirm } from './utils/index';

export default ({
  children,
  confirmText,
  disabled,
  loading,
  menuChildren,
  onOk,
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
      {...restProps}
    >
      <Button type="link">
        {children}
        <DownOutlined />
      </Button>
    </Dropdown>
  );
};
