import { Popconfirm } from 'antd';
import Button from './Button';

export default ({
  type = 'link',
  children,
  confirmText,
  disabled,
  loading,
  onOk,
  okText = '确定',
  cancelText = '取消',
  props,
  confirmProps,
  ...restProps
}) => {
  const newProps = {
    type,
    loading,
    disabled,
    ...props,
    ...restProps,
  };

  return (
    <Popconfirm
      disabled={disabled}
      title={confirmText}
      onConfirm={onOk}
      okText={okText}
      cancelText={cancelText}
      {...confirmProps}
    >
      <Button type="link" {...newProps}>
        {children}
      </Button>
    </Popconfirm>
  );
};
