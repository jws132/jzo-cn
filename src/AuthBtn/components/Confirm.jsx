import Button from './Button';
import { newConfirm } from './utils/index';

export default ({
  type = 'link',
  children,
  confirmText,
  loading,
  onOk,
  props,
  confirmProps,
  ...restProps
}) => {
  const newProps = {
    type,
    loading,
    ...props,
    ...restProps,
  };
  return (
    <Button
      onOk={() => {
        newConfirm({ confirmText, loading, onOk, ...confirmProps });
      }}
      {...newProps}
    >
      {children}
    </Button>
  );
};
