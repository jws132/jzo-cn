import { useState } from 'react';
import { Button } from 'antd';

export default ({
  type = 'link',
  children,
  loading = false,
  onOk,
  ...restProps
}) => {
  const [newLoading, setLoading] = useState(false);

  return (
    <Button
      type={type === 'link' ? 'link' : type}
      loading={loading ? loading : newLoading}
      onClick={() => onOk({ setLoading })}
      {...restProps}
    >
      {children}
    </Button>
  );
};
