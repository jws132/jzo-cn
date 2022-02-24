import { useEffect, useState } from 'react';

const useRequest = ({ getData, effects, manual, onRequestError }) => {
  const [loading, setLoading] = useState(false);
  const [entity, setEntity] = useState([]);

  const updateDataAndLoading = data => {
    setEntity(data);
    setLoading(false);
  };

  const fetchList = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const { data, success } = (await getData()) || {};
      if (success !== false) {
        updateDataAndLoading(data);
      }
    } catch (e) {
      // 如果没有传递这个方法的话，需要把错误抛出去，以免吞掉错误
      if (onRequestError === undefined) {
        throw new Error(e);
      } else {
        onRequestError(e);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    if (manual) {
      return;
    }
    fetchList();
  }, [...(effects || []), manual]);

  return {
    dataSource: entity,
    setDataSource: setEntity,
    loading,
    reload: () => fetchList(),
  };
};

export default useRequest;
