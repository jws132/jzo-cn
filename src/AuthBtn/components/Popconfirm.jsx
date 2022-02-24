import { Popconfirm, Button } from 'antd';

export default ({
  children,
  confirmText,
  disabled,
  loading,
  onOk,
  ...restProps
}) => {
  return (
    <Popconfirm
      disabled={disabled}
      title={confirmText}
      onConfirm={onOk}
      okText="确定"
      cancelText="取消"
    >
      <Button type="link" loading={loading} {...restProps}>
        {children}
      </Button>
    </Popconfirm>
  );
};
