import React, { useCallback } from 'react';
import { Menu } from 'antd';
import { keyBy } from 'lodash';

const JMenu = ({ menusRender, modelKeys }) => {
  const { nameField = 'title', keyField = 'key' } = modelKeys;

  var menuEnum = keyBy(menusRender, 'key');

  const onCurMenuClick = ({ key, domEvent }) => {
    domEvent.stopPropagation();
    const item = menuEnum?.[key] || {};
    menuEnum?.[key]?.onClick?.({ key, item });
  };

  return (
    <Menu onClick={onCurMenuClick}>
      {menusRender.map(el => {
        return (
          <Menu.Item key={el[keyField]} icon={el.icon || null}>
            {el[nameField]}
          </Menu.Item>
        );
      })}
    </Menu>
  );
};
JMenu.defaultProps = {
  menusRender: [],
  iconRender: null,
};

export default JMenu;
