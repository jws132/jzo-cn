import React, { useState } from 'react';
import SearchInput from './components/SearchInput';
import BaseTree from './components/BaseTree';
import TreeEmpty from './components/TreeEmpty';
import BreadCrumb from './components/BreadCrumb';

const SearchTree = ({
  value = [],
  onChange,
  checkedKeys,
  treeData,
  placeholder,
  modelKeys = {},
  defaultSelectedKeys,
  hideSearch,
  onRightClick,
  menuRightRender,
  ...restProps
}) => {
  const [searchValue, setSearchValue] = useState('');

  const newTree = {
    value,
    treeData,
    searchValue,
    modelKeys,
    searchInputRender: () => {
      return !hideSearch ? (
        <SearchInput
          placeholder={placeholder}
          onSearch={value => setSearchValue(value)}
        />
      ) : null;
    },
    menuRightRender,
    defaultSelectedKeys,
    onChange,
    checkedKeys: checkedKeys || value,
    ...restProps,
  };

  return <>{treeData.length > 0 ? <BaseTree {...newTree} /> : <TreeEmpty />}</>;
};

SearchTree.defaultProps = {
  treeData: [], // 树状数据
  modelKeys: {
    childrenField: 'children', // children的字段名
    nameField: 'title', // 名称显示字段
    keyField: 'key', // key值字段，需string
  },
  placeholder: '请输入查询条件',
  defaultSelectedKeys: [], // 默认选中key
  hideSearch: false, //显示搜索框
  onSelect: () => {},
  onRightClick: () => {}, // 右键点击回调
  toolBarRender: null,
  iconRender: null,
  onTreeNode: null, // 给结点绑定属性
  onTreeNodeTitle: null,
};

SearchTree.BreadCrumb = BreadCrumb;

export default SearchTree;
