'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/form/style');

var _form = _interopRequireDefault(require('antd/es/form'));

var _react = _interopRequireWildcard(require('react'));

var _index = require('./utils/index');

var _aCn = require('@jzo/a-cn');

var _FormGroup = _interopRequireDefault(require('./FormGroup'));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
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
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
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
  if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
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

var JForm = function JForm(props) {
  var actionRef = props.actionRef,
    layout = props.layout,
    _props$type = props.type,
    type = _props$type === void 0 ? 'field' : _props$type,
    _props$fields = props.fields,
    fields = _props$fields === void 0 ? [] : _props$fields,
    container = props.container,
    itemLayout = props.itemLayout,
    _props$actionsPositio = props.actionsPosition,
    actionsPosition =
      _props$actionsPositio === void 0 ? 'default' : _props$actionsPositio,
    actionsRender = props.actionsRender,
    initialValues = props.initialValues,
    onValuesChange = props.onValuesChange,
    onFinish = props.onFinish,
    children = props.children,
    size = props.size,
    onFinishFailed = props.onFinishFailed,
    submitCall = props.submitCall,
    restProps = _objectWithoutProperties(props, [
      'actionRef',
      'layout',
      'type',
      'fields',
      'container',
      'itemLayout',
      'actionsPosition',
      'actionsRender',
      'initialValues',
      'onValuesChange',
      'onFinish',
      'children',
      'size',
      'onFinishFailed',
      'submitCall',
    ]);

  var _Form$useForm = _form.default.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0]; // 收集日期字段及格式化的映射关系

  var collectDateField = function collectDateField() {
    var dateFields = {};
    fields &&
      fields.forEach(function(el) {
        var dataIndex = el.dataIndex,
          name = el.name,
          type = el.type,
          _el$props = el.props,
          props = _el$props === void 0 ? {} : _el$props;

        if (Object.keys(_index.dateComponentType).includes(type)) {
          dateFields[dataIndex || name] = {
            type: type,
            format: (props && props.format) || _index.dateComponentType[type],
          };
        }
      });
    return dateFields;
  }; // 转换表单值

  var formatValues = function formatValues(fieldsValue) {
    Object.keys(fieldsValue).forEach(function(key) {
      var value = fieldsValue[key];

      if (typeof value === 'string') {
        value = value.replace(/(^\s*)|(\s*$)/g, ''); // 去空格

        fieldsValue[key] = (0, _index.toCDB)(value); // 统一转半角
      }
    }); // 转换日期moment

    var dateFields = collectDateField();
    Object.keys(dateFields).forEach(function(field) {
      var _dateFields$field = dateFields[field],
        type = _dateFields$field.type,
        format = _dateFields$field.format;

      if (typeof type === 'string') {
        fieldsValue[field] = (0, _index.formateDate)(
          fieldsValue[field],
          format,
        );
      }
    });
    return fieldsValue;
  };

  return /*#__PURE__*/ _react.default.createElement(
    _aCn.MediaQueries,
    null,
    function(matchedPoint) {
      var normalizedItemLayout = (0, _index.getItemLayout)({
        itemLayout: itemLayout,
        layout: layout,
        matchedPoint: matchedPoint,
      });
      var fieldGroupContext = {
        layout: layout,
        itemLayout: _objectSpread(
          _objectSpread({}, normalizedItemLayout),
          {},
          {
            layout: layout,
          },
        ),
        size: size,
        matchedPoint: matchedPoint,
        formInstance: _objectSpread(
          _objectSpread({}, form),
          {},
          {
            formatValues: formatValues,
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
        ),
      }; //传入基础配置布局context

      var wrapperChildren = function wrapperChildren() {
        return fields
          ? /*#__PURE__*/ _react.default.createElement(
              _FormGroup.default,
              _extends(
                {
                  fields: fields,
                  container: container,
                  actionsPosition: actionsPosition,
                  actionsRender: actionsRender,
                },
                fieldGroupContext,
              ),
            )
          : children;
      };

      var formProps = _objectSpread(
        {
          initialValues: initialValues,
          onValuesChange: onValuesChange,
          onFinish: function onFinish(fieldsValue) {
            submitCall && submitCall(formatValues(fieldsValue));
          },
          children: wrapperChildren,
          wrapperCol: fieldGroupContext.itemLayout.wrapperCol,
          labelCol: fieldGroupContext.itemLayout.labelCol,
          validateMessages: _index.defaultValidateMessages,
        },
        restProps,
      );

      return /*#__PURE__*/ _react.default.createElement(
        _form.default,
        _extends({}, formProps, {
          form: fieldGroupContext.formInstance,
          layout: layout,
        }),
      );
    },
  );
};

JForm.defaultProps = {
  fields: [],
  initialValues: {},
  layout: 'horizontal',
  //horizontal | vertical | inline
  onFinish: function onFinish() {},
  onValuesChange: function onValuesChange() {},
  size: 'middle',
  actionsRender: [],
  itemLayout: {
    cols: 1,
  },
};
var _default = JForm;
exports.default = _default;
