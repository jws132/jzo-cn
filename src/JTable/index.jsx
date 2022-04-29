import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { Table } from 'antd';

// 分页配置
const GlobalPagination = {
  pageSizeOptions: ['10', '20', '50', '100', '150', '200', '300'],
  showSizeChanger: true,
  showQuickJumper: true,
  showTotal: total => `共 ${total} 条`,
};

const GTable = forwardRef((props, ref) => {
  const tableRef = useRef();
  const {
    rowKey = 'id',
    rowSelection,
    request,
    pagination = true,
    sreachParams,
    ...restProps
  } = props;
  const [pageSize, setPageSize] = useState(10);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [dataSource, setDataSource] = useState([]);
  const [params, setParams] = useState({});

  const queryList = () => {
    if (!request) return;
    try {
      setLoading(true);
      request({ page: pageNum, pageSize, ...sreachParams, ...params }).then(
        ({ data, code, msg }) => {
          const { total, list } = data || {};
          setTotal(total || 0);
          setDataSource(list || []);
          setLoading(false);
        },
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    queryList();
  }, [pageNum, pageSize, params]);

  useImperativeHandle(ref, () => ({
    reload: params => {
      setPageNum(1);
      setParams(params);
    },
    refresh: () => {
      queryList();
    },
    vvg,
  }));

  const onTableChange = (page, filters, sorter) => {
    console.log('filters', filters, sorter);
    const { current, pageSize } = page;
    const { order, column } = sorter;
    let newParams = {};
    if (column && column.sorter) {
      const { sreachField, sreachFieldValue, sreachFieldType } = column;
      newParams[sreachField] = sreachFieldValue;
      newParams[sreachFieldType] = order == 'ascend' ? '1' : '0';
      setParams({ ...params, ...newParams });
    }
    //过滤条件查询
    if (Object.keys(filters).length > 0) {
      Object.keys(filters).forEach((v, i) => {
        newParams[v] = filters[v].toString();
      });
    }
    setParams({ ...params, ...newParams });
    setPageNum(current);
    setPageSize(pageSize);
  };

  const paginationSet = pagination
    ? {
        ...GlobalPagination,
        total,
        current: pageNum,
        pageSize,
      }
    : false;

  if (request && restProps.dataSource) {
    delete restProps.dataSource;
  }

  const tProps = {
    dataSource,
    rowSelection,
    loading,
    rowKey: record => record[rowKey],
    pagination: paginationSet,
    onChange: onTableChange,
    ...restProps,
  };

  return <Table {...tProps} ref={tableRef} />;
});

export default GTable;
