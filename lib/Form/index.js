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

require('antd/es/row/style');

var _row = _interopRequireDefault(require('antd/es/row'));

require('antd/es/form/style');

var _form = _interopRequireDefault(require('antd/es/form'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _util = require('./util');

var _FormGroup = _interopRequireDefault(require('./FormGroup'));

var _FormAction = _interopRequireDefault(require('./FormAction'));

require('./index.less');

var _excluded = [
  'formRef',
  'fields',
  'column',
  'loading',
  'initialValues',
  'children',
  'gutter',
  'submitCall',
  'cancelCall',
  'defaultActionBar',
  'labelBasicSpan',
  'totalSpan',
  'onFinishFailed',
  'layout',
  'actionsRender',
  'actionsPosition',
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
var defautValidateMessages = {
  required: '????????????',
  whitespace: '??????????????????',
  string: {
    len: '?????????${len}?????????',
    min: '????????????${min}?????????',
    max: '????????? ${max} ?????????',
    range: '????????? ${min} - ${max} ???????????????',
  },
  number: {
    len: '????????? ${len}',
    min: '???????????? ${min}',
    max: '???????????? ${max}',
    range: '????????? ${min} - ${max}??????',
  },
  array: {
    len: '????????? ${len} ',
    min: '?????????????????? ${min}',
    max: '?????????????????? ${max}',
    range: '????????? ${min} - ${max}??????',
  },
  pattern: {
    mismatch: '????????????',
  },
};

var GForm = function GForm(props) {
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    action = _useState2[0],
    setAction = _useState2[1];

  var formRef = props.formRef,
    fields = props.fields,
    column = props.column,
    loading = props.loading,
    initialValues = props.initialValues,
    children = props.children,
    gutter = props.gutter,
    submitCall = props.submitCall,
    cancelCall = props.cancelCall,
    defaultActionBar = props.defaultActionBar,
    labelBasicSpan = props.labelBasicSpan,
    totalSpan = props.totalSpan,
    onFinishFailed = props.onFinishFailed,
    layout = props.layout,
    actionsRender = props.actionsRender,
    actionsPosition = props.actionsPosition,
    restProps = _objectWithoutProperties(props, _excluded);

  var _Form$useForm = _form.default.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0]; // ?????????????????????????????????????????????

  var collectDateField = function collectDateField() {
    var dateFields = {};
    fields &&
      fields.forEach(function(el) {
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
  }; // ????????????????????????

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
  }; // ??????formItem???Props

  var formLyoutProps = {
    gutter: gutter,
    column: column,
    labelBasicSpan: labelBasicSpan,
    totalSpan: totalSpan,
    layout: layout,
  }; // ???????????????

  var formatValues = function formatValues(fieldsValue) {
    Object.keys(fieldsValue).forEach(function(key) {
      var value = fieldsValue[key];

      if (typeof value === 'string') {
        value = value.replace(/(^\s*)|(\s*$)/g, ''); // ?????????

        fieldsValue[key] = (0, _util.toCDB)(value); // ???????????????
      }
    }); // ????????????moment

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
  }; // ??????

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

    if (formRef && typeof formRef !== 'function') {
      formRef.current = action;
    } else if (formRef && typeof formRef === 'function') {
      formRef(action);
    }

    setAction(action);
  }, []); // ??????form???Props

  var newFormProps = {
    onFinish: function onFinish(fieldsValue) {
      submitCall && submitCall(formatValues(fieldsValue));
    },
    initialValues: formateDateTypeInitialValues(initialValues),
    validateMessages: defautValidateMessages,
    layout: layout,
  };

  var actionsProps = _objectSpread(
    {
      actionsRender: actionsRender,
      actionsPosition: actionsPosition,
      defaultActionBar: defaultActionBar,
      action: action,
    },
    formLyoutProps,
  );

  var wrapperNode = fields
    ? /*#__PURE__*/ _react.default.createElement(_FormGroup.default, {
        fields: fields,
        formLyoutProps: formLyoutProps,
      })
    : children;

  var formProps = _objectSpread(
    _objectSpread(
      {
        layout: layout,
        children: wrapperNode,
      },
      newFormProps,
    ),
    restProps,
  );

  console.log('actionsProps', actionsProps);
  return /*#__PURE__*/ _react.default.createElement(
    _form.default,
    _extends({}, formProps, {
      form: form,
    }),
    wrapperNode,
    (defaultActionBar || actionsRender) &&
      /*#__PURE__*/ _react.default.createElement(
        _row.default,
        {
          gutter: gutter,
        },
        /*#__PURE__*/ _react.default.createElement(
          _FormAction.default,
          actionsProps,
        ),
      ),
  );
};

GForm.propTypes = {
  /**
   * ???????????????
   */
  fields: _propTypes.default.arrayOf(
    _propTypes.default.shape({
      type: _propTypes.default.string,
      //??????
      title: _propTypes.default.oneOfType([
        _propTypes.default.object,
        _propTypes.default.string,
      ]),
      // ??????
      label: _propTypes.default.oneOfType([
        _propTypes.default.object,
        _propTypes.default.string,
      ]),
      // ??????
      dataIndex: _propTypes.default.string,
      // ?????????
      name: _propTypes.default.string,
      // ?????????
      hideInForm: _propTypes.default.bool,
      // ??????????????????
      validOptions: _propTypes.default.object,
      // ????????????
      optionsData: _propTypes.default.array,
      // ???????????????
      models: _propTypes.default.array,
      // ?????????????????????????????????['label','value']
      props: _propTypes.default.object,
      // ?????????????????????
      itemProps: _propTypes.default.object, // FormItem???????????????
    }),
  ),

  /**
   * ????????????
   */
  cancelCall: _propTypes.default.func,

  /**
   * ????????????
   */
  submitCall: _propTypes.default.func,

  /**
   * ??????????????????
   */
  loading: _propTypes.default.bool,

  /**
   * ???????????????
   */
  initialValues: _propTypes.default.object,

  /**
   * ??????????????????????????? ???????????????
   */
  defaultActionBar: _propTypes.default.bool,

  /**
   * ??????????????????
   */
  column: _propTypes.default.number,

  /**
   * ????????????????????????
   */
  gutter: _propTypes.default.oneOfType([
    _propTypes.default.object,
    _propTypes.default.number,
  ]),

  /**
   * label?????????
   */
  labelBasicSpan: _propTypes.default.number,

  /**
   * ??????????????????
   */
  totalSpan: _propTypes.default.number,

  /**
   * ????????????????????????????????????
   */
  actionsRender: _propTypes.default.oneOfType([
    _propTypes.default.func,
    _propTypes.default.string,
  ]),
  actionsPosition: _propTypes.default.string,
};
GForm.defaultProps = {
  column: 3,
  loading: false,
  gutter: 3,
  defaultActionBar: true,
  labelBasicSpan: 8,
  totalSpan: 24,
  actionsPosition: 'default',
  actionsRender: null,
};
var _default = GForm;
exports.default = _default;
