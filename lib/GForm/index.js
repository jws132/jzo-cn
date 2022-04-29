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

require('antd/es/form/style');

var _form = _interopRequireDefault(require('antd/es/form'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _aCn = require('@jzo/a-cn');

var _util = require('./util');

var _FormGroup = _interopRequireDefault(require('./FormGroup'));

require('./index.less');

var _excluded = [
  'actionRef',
  'fields',
  'container',
  'column',
  'loading',
  'initialValues',
  'children',
  'gutter',
  'submitCall',
  'cancelCall',
  'toolBarRender',
  'defaultFooterBar',
  'labelBasicSpan',
  'totalSpan',
  'onFinishFailed',
  'layout',
  'onValuesChange',
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

var dateComponetType = {
  monthpicker: 'YYYY-MM',
  rangepicker: 'YYYY-MM-DD',
  datepicker: 'YYYY-MM-DD',
  yearpicker: 'YYYY',
  timepickerrange: 'HH:mm',
  timepicker: 'HH:mm',
};
var defaultValidateMessages = {
  required: '不能为空',
  whitespace: '不能全为空格',
  string: {
    len: '长度为${len}个字符',
    min: '至少输入${min}个字符',
    max: '不超过 ${max} 个字符',
    range: '长度在 ${min} - ${max} 个字符之间',
  },
  number: {
    len: '必须为 ${len}',
    min: '不能小于 ${min}',
    max: '不能大于 ${max}',
    range: '范围在 ${min} - ${max}之间',
  },
  array: {
    len: '数量为 ${len} ',
    min: '数量不能小于 ${min}',
    max: '数量不能大于 ${max}',
    range: '范围在 ${min} - ${max}之间',
  },
  pattern: {
    mismatch: '格式错误',
  },
};

var GForm = function GForm(props) {
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    action = _useState2[0],
    setAction = _useState2[1];

  var actionRef = props.actionRef,
    fields = props.fields,
    container = props.container,
    column = props.column,
    loading = props.loading,
    initialValues = props.initialValues,
    children = props.children,
    gutter = props.gutter,
    submitCall = props.submitCall,
    cancelCall = props.cancelCall,
    toolBarRender = props.toolBarRender,
    defaultFooterBar = props.defaultFooterBar,
    labelBasicSpan = props.labelBasicSpan,
    totalSpan = props.totalSpan,
    onFinishFailed = props.onFinishFailed,
    layout = props.layout,
    onValuesChange = props.onValuesChange,
    restProps = _objectWithoutProperties(props, _excluded);

  var _Form$useForm = _form.default.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0]; //处理占比

  var formSet = (0, _react.useMemo)(
    function() {
      return fields === null || fields === void 0
        ? void 0
        : fields.map(function(el) {
            var itemColumn = el.column;
            var span = Math.min(
              Number.isNaN(Number(itemColumn)) ? 1 : itemColumn,
              column,
            ); // 列占比数

            var colSpan = Math.ceil(totalSpan / column) * span;
            return _objectSpread(
              _objectSpread({}, el),
              {},
              {
                colSpan: colSpan,
              },
            );
          });
    },
    [fields],
  ); // 收集日期字段及格式化的映射关系

  var collectDateField = function collectDateField() {
    var dateFields = {};
    formSet &&
      formSet.forEach(function(el) {
        var dataIndex = el.dataIndex,
          name = el.name,
          type = el.type,
          _el$props = el.props,
          props = _el$props === void 0 ? {} : _el$props;

        if (Object.keys(dateComponetType).includes(type)) {
          dateFields[dataIndex || name] = {
            type: type,
            format: (props && props.format) || dateComponetType[type],
          };
        }
      });
    return dateFields;
  }; // 转化日期的初始值

  var formateDateTypeInitialValues = function formateDateTypeInitialValues(
    initialValues,
  ) {
    var newInitValues = _objectSpread({}, initialValues);

    var dateFields = collectDateField();
    Object.keys(dateFields).forEach(function(field) {
      var format = dateFields[field].format;
      newInitValues[field] = (0, _util.normalizeDate)(
        newInitValues[field],
        format,
      );
    });
    return newInitValues;
  }; // 转换表单值

  var formatValues = function formatValues(fieldsValue) {
    Object.keys(fieldsValue).forEach(function(key) {
      var value = fieldsValue[key];

      if (typeof value === 'string') {
        value = value.replace(/(^\s*)|(\s*$)/g, ''); // 去空格

        fieldsValue[key] = (0, _util.toCDB)(value); // 统一转半角
      }
    }); // 转换日期moment

    var dateFields = collectDateField();
    Object.keys(dateFields).forEach(function(field) {
      var _dateFields$field = dateFields[field],
        type = _dateFields$field.type,
        format = _dateFields$field.format;

      if (typeof type === 'string') {
        fieldsValue[field] = (0, _util.formateDate)(fieldsValue[field], format);
      }
    });
    return fieldsValue;
  }; // 重置

  var reset = function reset() {
    form.resetFields();
    cancelCall && cancelCall(formatValues(form.getFieldsValue()));
  };

  (0, _react.useEffect)(function() {
    var action = _objectSpread(
      _objectSpread({}, form),
      {},
      {
        reset: reset,
        formatValues: formatValues,
        collectDateField: collectDateField,
        onValidate: function onValidate(callback) {
          form
            .validateFields()
            .then(function(values) {
              collectDateField();
              var params = formatValues(values);
              callback && callback(params);
            })
            .catch(function(errorInfo) {
              onFinishFailed && onFinishFailed(errorInfo);
            });
        },
      },
    );

    if (actionRef && typeof actionRef !== 'function') {
      actionRef.current = action;
    } else if (actionRef && typeof actionRef === 'function') {
      actionRef(action);
    }

    setAction(action);
  }, []); // 组装formItem的Props

  var formItemProps = {
    column: column,
    labelBasicSpan: labelBasicSpan,
    totalSpan: totalSpan,
    layout: layout,
  };
  return /*#__PURE__*/ _react.default.createElement(
    _aCn.MediaQueries,
    null,
    function(matchedPoint) {
      var fromGroup = {
        form: form,
        gutter: gutter,
        fields: formSet,
        container: container,
        formItemProps: formItemProps,
        matchedPoint: matchedPoint,
      };

      var formProps = _objectSpread(
        {
          layout: layout,
          initialValues: formateDateTypeInitialValues(initialValues),
          onValuesChange: onValuesChange,
          children: fields
            ? /*#__PURE__*/ _react.default.createElement(
                _FormGroup.default,
                fromGroup,
              )
            : children,
          onFinish: (function(_onFinish) {
            function onFinish(_x) {
              return _onFinish.apply(this, arguments);
            }

            onFinish.toString = function() {
              return _onFinish.toString();
            };

            return onFinish;
          })(function(fieldsValue) {
            onFinish && onFinish(formatValues(fieldsValue));
          }),
          validateMessages: defaultValidateMessages,
        },
        restProps,
      );

      return /*#__PURE__*/ _react.default.createElement(
        _form.default,
        _extends({}, formProps, {
          form: form,
        }),
      );
    },
  );
};

GForm.propTypes = {
  /**
   * 表单配置项
   */
  fields: _propTypes.default.arrayOf(
    _propTypes.default.shape({
      type: _propTypes.default.string,
      //类型
      title: _propTypes.default.oneOfType([
        _propTypes.default.object,
        _propTypes.default.string,
      ]),
      // 标签
      label: _propTypes.default.oneOfType([
        _propTypes.default.object,
        _propTypes.default.string,
      ]),
      // 标签
      dataIndex: _propTypes.default.string,
      // 入参名
      name: _propTypes.default.string,
      // 入参名
      hideInForm: _propTypes.default.bool,
      // 是否失效隐藏
      validOptions: _propTypes.default.object,
      // 校验相关
      optionsData: _propTypes.default.array,
      // 下拉框数据
      models: _propTypes.default.array,
      // 下拉框数据对应的字段名['label','value']
      props: _propTypes.default.object,
      // 组件原生的属性
      itemProps: _propTypes.default.object,
      // FormItem的原生属性
      container: _propTypes.default.object,
    }),
  ),

  /**
   * 重置回调
   */
  cancelCall: _propTypes.default.func,

  /**
   * 提交回调
   */
  submitCall: _propTypes.default.func,

  /**
   * 正在保存标志
   */
  loading: _propTypes.default.bool,

  /**
   * 表单初始值
   */
  initialValues: _propTypes.default.object,

  /**
   * 是否使用默认的按钮 重置、保存
   */
  defaultFooterBar: _propTypes.default.bool,

  /**
   * 表单底部按钮工具栏的添加
   */
  toolBarRender: _propTypes.default.func,

  /**
   * 一行显示几列
   */
  column: _propTypes.default.number,

  /**
   * 列与列之间的间隔
   */
  gutter: _propTypes.default.oneOfType([
    _propTypes.default.object,
    _propTypes.default.number,
  ]),

  /**
   * label的占比
   */
  labelBasicSpan: _propTypes.default.number,

  /**
   * 一行的总占比
   */
  totalSpan: _propTypes.default.number,
  onValuesChange: _propTypes.default.func,
};
GForm.defaultProps = {
  column: 3,
  loading: false,
  gutter: 3,
  defaultFooterBar: true,
  labelBasicSpan: 8,
  totalSpan: 24,
  onValuesChange: function onValuesChange() {},
};
var _default = GForm;
exports.default = _default;
