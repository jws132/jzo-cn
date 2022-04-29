import React, { useRef, useEffect } from 'react';
import { Modal, Space, Button } from 'antd';
import PropTypes from 'prop-types';
import { JForm } from '@jzo/a-cn';

const ModalForm = ({
  title,
  visible,
  initialValues,
  fields,
  formProps,
  onOk,
  loading = false,
  onVisibleChange,
  onCancel,
  beforeRender,
  afterRender,
  actionsPosition = 'default',
  actionsRender,
  defaultActionBar = true,
  okText = '确定',
  cancelText = '取消',
  okButtonProps,
  cancelButtonProp,
  formRef,
  ...restPorps
}) => {
  const actionRef = useRef(null);

  useEffect(() => {
    actionRef.current?.setFieldsValue(initialValues);
  }, [initialValues]);

  useEffect(() => {
    if (visible && formRef && !formRef.current) {
      setTimeout(() => {
        formRef.current = { ...actionRef.current };
      });
    }
    onVisibleChange?.(visible);
  }, [visible]);

  const handleCancel = () => {
    onCancel?.();
    actionRef.current.reset();
  };

  const newFormProps = {
    initialValues,
    fields,
    defaultActionBar: false,
    submitCall: values => {
      onOk?.(values);
    },
    ...formProps,
  };

  const modalProps = {
    visible,
    title,
    destroyOnClose: true,
    onOk: () => {
      formRef.current.submit();
    },
    onCancel,
    footer: (
      <div
        style={{
          textAlign: actionsPosition === 'default' ? 'right' : actionsPosition,
        }}
      >
        {defaultActionBar && (
          <Space>
            <Button onClick={() => handleCancel()} {...cancelButtonProp}>
              {cancelText}
            </Button>
            <Button
              type="primary"
              loading={loading}
              onClick={() => actionRef.current.submit()}
              {...okButtonProps}
            >
              {okText}
            </Button>
          </Space>
        )}
        {actionsRender && actionsRender?.(actionRef)}
      </div>
    ),
    ...restPorps,
  };

  return (
    <Modal {...modalProps}>
      {beforeRender?.()}
      <JForm formRef={actionRef} {...newFormProps} />
      {afterRender?.()}
    </Modal>
  );
};

ModalForm.propTypes = {
  /**
   * 表单配置项
   */
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string, // 类型
      title: PropTypes.oneOfType([PropTypes.object, PropTypes.string]), // 标签
      label: PropTypes.oneOfType([PropTypes.object, PropTypes.string]), // 标签
      dataIndex: PropTypes.string, // 入参名
      name: PropTypes.string, // 入参名
      hideInForm: PropTypes.bool, // 是否失效隐藏
      validOptions: PropTypes.object, // 校验相关
      optionsData: PropTypes.array, // 下拉框数据
      models: PropTypes.array, // 下拉框数据对应的字段名['label','value']
      props: PropTypes.object, // 组件原生的属性
      itemProps: PropTypes.object, // FormItem的原生属性
    }),
  ),
  /**
   * 是否显示
   */
  visible: PropTypes.bool,
  /**
   * 取消回调
   */
  onCancel: PropTypes.func,
  /**
   * 提交回调
   */
  onOk: PropTypes.func,
  /**
   * 正在保存标志
   */
  loading: PropTypes.bool,
  /**
   * 表单初始值
   */
  initialValues: PropTypes.object,

  /**
   * 是否使用默认的按钮 重置、保存
   */
  defaultActionBar: PropTypes.bool,

  /**
   * 表单底部按钮工具栏的添加
   */
  actionsRender: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  /**
   * 表单底部按钮工具栏位置
   */
  actionsPosition: PropTypes.string,
  /**
   * 表单头部添加信息
   */
  beforeRender: PropTypes.func,
  /**
   * 表单底部添加信息
   */
  afterRender: PropTypes.func,
};

ModalForm.defaultProps = {
  title: '',
  loading: false,
  visible: false,
  initialValues: {},
  fields: [],
  onVisibleChange: () => {},
  beforeRender: () => {},
  afterRender: () => {},
  onOk: () => {},
};

export default ModalForm;
