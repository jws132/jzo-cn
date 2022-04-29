'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/popconfirm/style');

var _popconfirm = _interopRequireDefault(require('antd/es/popconfirm'));

var _react = _interopRequireDefault(require('react'));

var _Button = _interopRequireDefault(require('./Button'));

var _excluded = [
  'type',
  'children',
  'confirmText',
  'disabled',
  'loading',
  'onOk',
  'okText',
  'cancelText',
  'props',
  'confirmProps',
];

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

var _default = function _default(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'link' : _ref$type,
    children = _ref.children,
    confirmText = _ref.confirmText,
    disabled = _ref.disabled,
    loading = _ref.loading,
    onOk = _ref.onOk,
    _ref$okText = _ref.okText,
    okText = _ref$okText === void 0 ? '确定' : _ref$okText,
    _ref$cancelText = _ref.cancelText,
    cancelText = _ref$cancelText === void 0 ? '取消' : _ref$cancelText,
    props = _ref.props,
    confirmProps = _ref.confirmProps,
    restProps = _objectWithoutProperties(_ref, _excluded);

  var newProps = _objectSpread(
    _objectSpread(
      {
        type: type,
        loading: loading,
        disabled: disabled,
      },
      props,
    ),
    restProps,
  );

  return /*#__PURE__*/ _react.default.createElement(
    _popconfirm.default,
    _extends(
      {
        disabled: disabled,
        title: confirmText,
        onConfirm: onOk,
        okText: okText,
        cancelText: cancelText,
      },
      confirmProps,
    ),
    /*#__PURE__*/ _react.default.createElement(
      _Button.default,
      _extends(
        {
          type: 'link',
        },
        newProps,
      ),
      children,
    ),
  );
};

exports.default = _default;
