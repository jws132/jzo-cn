import React from 'react';
import { Empty } from 'antd';

const TreeEmpty = ({ description = '暂无数据' }) => {
  return (
    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={description} />
  );
};

export default TreeEmpty;
