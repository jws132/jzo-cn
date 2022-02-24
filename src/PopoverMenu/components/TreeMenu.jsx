import React, { useMemo } from 'react';
import { Menu } from 'antd';
import { getDataList } from '../../utils/index';

const TreeMenu = ({ treeData, modelKeys, onMenuClick, iconRender }) => {
  const {
    childrenField = 'children',
    nameField = 'title',
    keyField = 'key',
  } = modelKeys;
  const dataList = useMemo(
    () => getDataList(treeData, keyField, nameField, childrenField),
    [treeData],
  ); // 格式化列表

  const onCurMenuClick = ({ key }) => {
    const item = dataList.filter(el => el[keyField] == key)[0] || {};
    onMenuClick?.(key, item);
  };

  const loop = data => {
    return data.map(item => {
      const hasChildren = item[childrenField];
      const title = item[nameField];
      if (hasChildren && hasChildren.length > 0) {
        return (
          <Menu.SubMenu
            key={item[keyField]}
            title={title}
            icon={iconRender?.(item)}
          >
            {loop(item[childrenField])}
          </Menu.SubMenu>
        );
      }
      return (
        <Menu.Item key={item[keyField]} icon={iconRender?.(item)}>
          {title}
        </Menu.Item>
      );
    });
  };

  return <Menu onClick={onCurMenuClick}>{loop(treeData)}</Menu>;
};
TreeMenu.defaultProps = {
  treeData: [],
  iconRender: null,
};

export default TreeMenu;
