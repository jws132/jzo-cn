import { useState } from 'react';
import { Button, Tooltip } from 'antd';

export default ({
  type = 'link',
  children,
  loading = false,
  tipText = '',
  placement = 'top',
  onOk,
  props,
  ...restProps
}) => {
  const [newLoading, setLoading] = useState(false);
  const newProps = {
    type,
    loading: loading ? loading : newLoading, 
    ...props,
    ...restProps,
  };

  if (tipText) {
    return (
      <Tooltip title={tipText} placement={placement}>
        <Button onClick={() => onOk({ setLoading })} {...newProps}>
          {children}
        </Button>
      </Tooltip>
    );
  }

  return (
    <Button onClick={() => onOk({ setLoading })} {...newProps}>
      {children}
    </Button>
  );
};
