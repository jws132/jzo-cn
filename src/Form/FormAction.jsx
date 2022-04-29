import React from 'react';
import { Button, Space, Col } from 'antd';

const FormAction = ({
  actionsRender,
  column,
  totalSpan,
  layout,
  defaultActionBar,
  labelBasicSpan,
  actionsPosition,
  action,
}) => {
  // 布局相关
  // const span = Math.min(Number.isNaN(Number(column)) ? 1 : itemColumn, column); // 列占比数
  let offset = Math.ceil(labelBasicSpan / (column || 1));
  if (layout === 'vertical') {
    offset = 0;
  }

  return (
    <Col offset={offset} span={24 - offset}>
      <div
        style={{
          textAlign: actionsPosition !== 'default' ? actionsPosition : '',
        }}
      >
        {defaultActionBar && (
          <Space>
            <Button type="primary" htmlType="submit">
              保存
            </Button>
            <Button htmlType="button" onClick={() => action?.resetFields()}>
              重置
            </Button>
          </Space>
        )}
        {actionsRender && actionsRender?.(action)}
      </div>
    </Col>
  );
};

export default FormAction;
