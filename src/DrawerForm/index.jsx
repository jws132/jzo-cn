import React, { useRef, useEffect } from 'react';
import { Drawer, Space, Button } from 'antd';
import PropTypes from 'prop-types';
import { JForm } from '@jzo/a-cn';
import styles from './style.less';

const DrawerForm = ({
  title,
  visible,
  initialValues,
  formRef,
  fields,
  formProps,
  onOk,
  loading = false,
  onVisibleChange,
  beforeRender,
  afterRender,
  actionsPosition = 'default',
  actionsRender,
  defaultActionBar = true,
  okText = '确定',
  cancelText = '取消',
  onCancel,
  okButtonProps,
  cancelButtonProp,
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

  const newFormProps = {
    initialValues,
    fields,
    defaultActionBar: false,
    submitCall: values => {
      onOk?.(values);
    },
    ...formProps,
  };

  const handleCancel = () => {
    onCancel?.();
    actionRef.current.reset();
  };

  const drawerProps = {
    visible,
    title,
    destroyOnClose: true,
    onClose: () => {
      handleCancel?.();
    },
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
              onClick={() => actionRef.current.onValidate(onOk)}
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
    <Drawer {...drawerProps}>
      <div style={styles.drawer_form}>
        {beforeRender?.()}
        <JForm formRef={actionRef} {...newFormProps} />
        {afterRender?.()}
      </div>
    </Drawer>
  );
};

DrawerForm.propTypes = {
  /**
   * 表单配置项
   */
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string, //类型
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
  /**
   * 保存按钮属性
   */
  okButtonProps: PropTypes.object,
  /**
   * 保存按钮属性
   */
  okButtonProps: PropTypes.object,
  /**
   * 关闭按钮属性
   */
  cancelButtonProp: PropTypes.object,
};

DrawerForm.defaultProps = {
  title: '',
  loading: false,
  visible: false,
  initialValues: {},
  fields: [],
  defaultActionBar: true,
  actionsPosition: 'default',
  okButtonProps: {},
  cancelButtonProp: {},
  actionsRender: () => {},
  onVisibleChange: () => {},
  beforeRender: () => {},
  afterRender: () => {},
  onOk: () => {},
  onCancel: () => {},
};

export default DrawerForm;
