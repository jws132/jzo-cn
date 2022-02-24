import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const SearchInput = ({ placeholder, onSearch }) => {
  return (
    <Input
      placeholder={placeholder}
      onChange={e => {
        onSearch?.(e.target.value);
      }}
      suffix={<SearchOutlined />}
      allowClear
    />
  );
};

SearchInput.defaultProps = {
  placeholder: '请输入查询条件',
  onSearch: () => {}, // 右键点击回调
};

export default SearchInput;
