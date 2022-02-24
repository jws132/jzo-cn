import React, { useState, useEffect, useMemo } from 'react';
import { Tree } from 'antd';
import TreeEmpty from './TreeEmpty';
import { PopoverMenu } from '../../index';
import { getDataList } from '../../utils/index';
import { uniq } from 'lodash';

/**
 * 递归数组
 * @param {*} key
 * @param {*} tree
 */
const getParentKey = (keys, tree, keyField, childrenField) => {
  function parentKeyFun(key, data) {
    let parentKey;
    for (let i = 0; i < data.length; i++) {
      const node = data[i];
      const nodeChildren = node[childrenField];
      if (nodeChildren) {
        if (nodeChildren.some(item => item[keyField] === key)) {
          parentKey = node[keyField];
        } else if (parentKeyFun(key, nodeChildren)) {
          parentKey = parentKeyFun(key, nodeChildren);
        }
      }
    }
    return parentKey;
  }
  return parentKeyFun(keys, tree);
};

const BaseTree = ({
  treeData,
  modelKeys = [],
  checkedKeys,
  toolBarRender,
  iconRender,
  defaultSelectedKeys,
  searchValue,
  onSelect,
  onCheck,
  onRightClick,
  menuRightRender,
  searchInputRender,
  expandedLevel = 1,
  onTreeNode,
  onTreeNodeTitle,
  onChange,
  ...restProps
}) => {
  const {
    childrenField = 'children',
    nameField = 'title',
    keyField = 'key',
  } = modelKeys;
  const [expandedKeys, setExpandedKeys] = useState(['2-1']);
  const [letCheckedKeys, setLetCheckedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [currentItem, setCurrentItem] = useState({});

  const dataList = useMemo(
    () => getDataList(treeData, keyField, nameField, childrenField),
    [treeData],
  ); // 格式化列表

  const newKeys = useMemo(() => {
    const expandedKeys = dataList
      .map(item => {
        if (item[nameField].includes(searchValue)) {
          return getParentKey(
            item[keyField],
            treeData,
            keyField,
            childrenField,
          );
        }
        return null;
      })
      .filter((item, i, self) => item && self.indexOf(item) === i);
    setExpandedKeys(uniq(expandedKeys));
    setAutoExpandParent(true);
    return uniq(expandedKeys);
  }, [searchValue, treeData]);

  useEffect(() => {
    const eKeys = dataList
      .filter(el => el[childrenField])
      .map(el => el[keyField]);
    setExpandedKeys(eKeys);
    setAutoExpandParent(true);
    setSelectedKeys(defaultSelectedKeys);
    setLetCheckedKeys(checkedKeys);
  }, [defaultSelectedKeys, treeData]); // 展开所有节点

  const allCheckedKeys = () => {
    const allKeys = dataList.map(el => el[keyField]);
    onTreeCheck?.(allKeys);
  };
  /**
   * 清空选中数据
   */
  const clearCheckedKeys = () => {
    onTreeCheck?.([]);
  };

  /**
   * 右击事件触发
   * @param {*} e
   */
  const onRightEventClick = ({ event, node }) => {
    const item = dataList.find(el => el[keyField] == node.props.eventKey);
    setCurrentItem(item || {});
  };

  //点击复选框触发
  const onTreeCheck = (checkedKeys, e) => {
    setLetCheckedKeys(checkedKeys);
    onCheck?.(checkedKeys);
    onChange?.(checkedKeys.concat(e.halfCheckedKeys));
  };

  /**
   * 点击树节点触发
   * @param {*} selectedKeys
   * @param {*} e
   */
  const onTreeSelect = (selectedKeys, e) => {
    e.stop;
    const item = dataList.filter(el => el.key === e.node.key)[0] || {};
    setSelectedKeys(selectedKeys);
    onSelect?.(selectedKeys, item);
  };

  const loop = data => {
    return data.map(item => {
      const nodeProps = onTreeNode?.(item);
      const nodeTitleProps = onTreeNodeTitle?.(item);
      const hasChildren = item[childrenField];
      const titleField = item[nameField];
      const index = titleField.indexOf(searchValue);
      const beforeStr = titleField.substr(0, index);
      const afterStr = titleField.substr(index + searchValue.length);
      let title =
        index > -1 ? (
          <span {...nodeTitleProps}>
            {beforeStr}
            <span style={{ color: 'red' }}>{searchValue}</span>
            {afterStr}
          </span>
        ) : (
          <span {...nodeTitleProps}>{item[nameField]}</span>
        );
      if (menuRightRender?.().length > 0) {
        title = (
          <PopoverMenu
            visible={item[keyField] === currentItem?.key}
            placement="rightTop"
            onClickRender={() => menuRightRender(item[keyField], item)}
            onVisibleChange={() => {
              setCurrentItem({});
            }}
          >
            {title}
          </PopoverMenu>
        );
      }
      const treeNodeProps = {
        title,
        key: item[keyField],
        icon: ({ selected }) => iconRender?.(item, selected),
        ...nodeProps,
      };
      if (hasChildren) {
        return (
          <Tree.TreeNode {...treeNodeProps}>
            {loop(item[childrenField])}
          </Tree.TreeNode>
        );
      }
      return <Tree.TreeNode {...treeNodeProps} />;
    });
  };
  const state = useMemo(() => {
    if (searchValue && !newKeys.length) {
      return false;
    }
    return true;
  }, [newKeys]);

  return (
    <>
      {toolBarRender?.({
        checkedKeys: letCheckedKeys,
        expandedKeys,
        clearCheckedKeys,
        allCheckedKeys,
      })}
      {searchInputRender?.()}
      {state ? (
        <div style={{ marginTop: '20px' }}>
          <Tree
            selectedKeys={selectedKeys}
            checkedKeys={letCheckedKeys}
            onExpand={keys => {
              setExpandedKeys(keys);
              setAutoExpandParent(false);
            }}
            onCheck={onTreeCheck}
            onSelect={onTreeSelect}
            expandedKeys={expandedKeys}
            autoExpandParent={autoExpandParent}
            onRightClick={onRightEventClick}
            showIcon
            {...restProps}
          >
            {loop(treeData)}
          </Tree>
        </div>
      ) : (
        <TreeEmpty description={'当前搜索无匹配内容'} />
      )}
    </>
  );
};

BaseTree.defaultProps = {
  treeData: [], // 树状数据
  placeholder: '请输入查询条件',
  defaultSelectedKeys: [], // 默认选中key
  checkedKeys: [],
  onRightClick: () => {}, // 右键点击回调
  onSelect: () => {}, // 右键点击回调
  searchInputRender: null,
  menuRightRender: null,
};

export default BaseTree;
