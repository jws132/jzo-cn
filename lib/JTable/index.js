'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function(obj) {
            return typeof obj;
          }
        : function(obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/table/style');

var _table = _interopRequireDefault(require('antd/es/table'));

var _react = _interopRequireWildcard(require('react'));

var _excluded = [
  'rowKey',
  'rowSelection',
  'request',
  'pagination',
  'sreachParams',
];

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(
    nodeInterop,
  ) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source),
        )
      : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key),
          );
        });
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) ||
        arr['@@iterator'];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

// 分页配置
var GlobalPagination = {
  pageSizeOptions: ['10', '20', '50', '100', '150', '200', '300'],
  showSizeChanger: true,
  showQuickJumper: true,
  showTotal: function showTotal(total) {
    return '\u5171 '.concat(total, ' \u6761');
  },
};
var GTable = /*#__PURE__*/ (0, _react.forwardRef)(function(props, ref) {
  var tableRef = (0, _react.useRef)();

  var _props$rowKey = props.rowKey,
    _rowKey = _props$rowKey === void 0 ? 'id' : _props$rowKey,
    rowSelection = props.rowSelection,
    request = props.request,
    _props$pagination = props.pagination,
    pagination = _props$pagination === void 0 ? true : _props$pagination,
    sreachParams = props.sreachParams,
    restProps = _objectWithoutProperties(props, _excluded);

  var _useState = (0, _react.useState)(10),
    _useState2 = _slicedToArray(_useState, 2),
    pageSize = _useState2[0],
    setPageSize = _useState2[1];

  var _useState3 = (0, _react.useState)(1),
    _useState4 = _slicedToArray(_useState3, 2),
    pageNum = _useState4[0],
    setPageNum = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];

  var _useState7 = (0, _react.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    total = _useState8[0],
    setTotal = _useState8[1];

  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    dataSource = _useState10[0],
    setDataSource = _useState10[1];

  var _useState11 = (0, _react.useState)({}),
    _useState12 = _slicedToArray(_useState11, 2),
    params = _useState12[0],
    setParams = _useState12[1];

  var queryList = function queryList() {
    if (!request) return;

    try {
      setLoading(true);
      request(
        _objectSpread(
          _objectSpread(
            {
              page: pageNum,
              pageSize: pageSize,
            },
            sreachParams,
          ),
          params,
        ),
      ).then(function(_ref) {
        var data = _ref.data,
          code = _ref.code,
          msg = _ref.msg;

        var _ref2 = data || {},
          total = _ref2.total,
          list = _ref2.list;

        setTotal(total || 0);
        setDataSource(list || []);
        setLoading(false);
      });
    } catch (error) {
      console.error(error);
    }
  };

  (0, _react.useEffect)(
    function() {
      queryList();
    },
    [pageNum, pageSize, params],
  );
  (0, _react.useImperativeHandle)(ref, function() {
    return {
      reload: function reload(params) {
        setPageNum(1);
        setParams(params);
      },
      refresh: function refresh() {
        queryList();
      },
      vvg: vvg,
    };
  });

  var onTableChange = function onTableChange(page, filters, sorter) {
    console.log('filters', filters, sorter);
    var current = page.current,
      pageSize = page.pageSize;
    var order = sorter.order,
      column = sorter.column;
    var newParams = {};

    if (column && column.sorter) {
      var sreachField = column.sreachField,
        sreachFieldValue = column.sreachFieldValue,
        sreachFieldType = column.sreachFieldType;
      newParams[sreachField] = sreachFieldValue;
      newParams[sreachFieldType] = order == 'ascend' ? '1' : '0';
      setParams(_objectSpread(_objectSpread({}, params), newParams));
    } //过滤条件查询

    if (Object.keys(filters).length > 0) {
      Object.keys(filters).forEach(function(v, i) {
        newParams[v] = filters[v].toString();
      });
    }

    setParams(_objectSpread(_objectSpread({}, params), newParams));
    setPageNum(current);
    setPageSize(pageSize);
  };

  var paginationSet = pagination
    ? _objectSpread(
        _objectSpread({}, GlobalPagination),
        {},
        {
          total: total,
          current: pageNum,
          pageSize: pageSize,
        },
      )
    : false;

  if (request && restProps.dataSource) {
    delete restProps.dataSource;
  }

  var tProps = _objectSpread(
    {
      dataSource: dataSource,
      rowSelection: rowSelection,
      loading: loading,
      rowKey: function rowKey(record) {
        return record[_rowKey];
      },
      pagination: paginationSet,
      onChange: onTableChange,
    },
    restProps,
  );

  return /*#__PURE__*/ _react.default.createElement(
    _table.default,
    _extends({}, tProps, {
      ref: tableRef,
    }),
  );
});
var _default = GTable;
exports.default = _default;
