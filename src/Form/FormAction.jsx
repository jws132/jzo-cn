import React, { useContext } from 'react';
import { Form, Col, Space, Button } from 'antd';
import PropTypes from 'prop-types';
import { AuthBtn } from '@jzo/a-cn';

const FormAction = props => {
  const {
    itemLayout,
    actionsRender,
    formInstance,
    actionsPosition,
    style,
    children,
  } = props;
  const { span, gutter, layout } = itemLayout;

  const actionRender = (
    <div
      style={
        layout !== 'vertical'
          ? style
          : Object.assign({ ...style }, { marginTop: 30 })
      }
    >
      <Space>
        {actionsRender.map(
          ({
            type,
            hide,
            name,
            disabled,
            confirmText,
            loading,
            onOk,
            children,
            ...rest
          }) => {
            const btnProps = {
              type,
              hide,
              name,
              disabled,
              confirmText,
              loading,
              children,
              onOk: done => {
                onOk?.(formInstance, done);
              },
              ...rest,
            };
            return <AuthBtn {...btnProps}> {name || children}</AuthBtn>;
          },
        )}
      </Space>
    </div>
  );

  if (actionsPosition === 'default' && layout !== 'inline') {
    const wrapperCol =
      layout === 'horizontal'
        ? Object.assign(
            { offset: itemLayout.labelCol?.span },
            itemLayout.wrapperCol,
          )
        : itemLayout.wrapperCol;
    return (
      <Col span={span}>
        <Form.Item wrapperCol={wrapperCol}>{actionRender}</Form.Item>
      </Col>
    );
  } else {
    return actionRender;
  }
};

FormAction.propTypes = {
  /**
   * 布局对象
   */
  itemLayout: PropTypes.object,
  /**
   * 提交回调
   */
  actionsRender: PropTypes.array,
  actionsPosition: PropTypes.string,
};

export default FormAction;
