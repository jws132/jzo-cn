import React, { useMemo } from 'react';
import { Popover } from 'antd';
import TreeMenu from './components/TreeMenu';
import Menu from './components/Menu';
import styles from './style.less';

const PopoverMenu = ({
  onClickRender,
  children,
  placement,
  modelKeys,
  treeData,
  onMenuClick,
  trigger,
  ...restProps
}) => {
  const menusRender = useMemo(() => {
    return onClickRender?.() || [];
  }, [onClickRender]);

  return (
    <Popover
      overlayClassName={styles.popover}
      placement={placement}
      getPopupContainer={triggerNode => triggerNode.parentNode}
      content={
        menusRender?.length > 0 ? (
          <Menu modelKeys={modelKeys} menusRender={menusRender} />
        ) : (
          <TreeMenu
            modelKeys={modelKeys}
            treeData={treeData}
            onMenuClick={onMenuClick}
          />
        )
      }
      trigger={trigger}
      {...restProps}
    >
      {children}
    </Popover>
  );
};

PopoverMenu.defaultProps = {
  modelKeys: {
    childrenField: 'children', // children的字段名
    nameField: 'title', // 名称显示字段
    keyField: 'key', // key值字段，需string
  },
  trigger: 'hover',
  placement: 'bottomLeft',
  onMenuClick: () => {},
  onClickRender: null,
};

export default PopoverMenu;
