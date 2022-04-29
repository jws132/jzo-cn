import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;

export const newConfirm = ({ confirmText, loading, onOk, ...confirmProps }) => {
  return confirm({
    title: '温馨提示',
    icon: <ExclamationCircleOutlined />,
    content: confirmText,
    okText: '确定',
    cancelText: '取消',
    confirmLoading: loading,
    onOk,
    ...confirmProps,
  });
};
