import { Button } from 'antd';
import { newConfirm } from './utils/index';

export default ({ children, confirmText, loading, onOk, ...restProps }) => {
  return (
    <Button
      type="link"
      onClick={() => {
        newConfirm({ confirmText, loading, onOk });
      }}
      loading={loading}
      {...restProps}
    >
      {children}
    </Button>
  );
};
