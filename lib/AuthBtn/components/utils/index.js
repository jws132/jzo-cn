'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.newConfirm = void 0;

require('antd/es/modal/style');

var _modal = _interopRequireDefault(require('antd/es/modal'));

var _react = _interopRequireDefault(require('react'));

var _icons = require('@ant-design/icons');

var _excluded = ['confirmText', 'loading', 'onOk'];

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
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

var confirm = _modal.default.confirm;

var newConfirm = function newConfirm(_ref) {
  var confirmText = _ref.confirmText,
    loading = _ref.loading,
    onOk = _ref.onOk,
    confirmProps = _objectWithoutProperties(_ref, _excluded);

  return confirm(
    _objectSpread(
      {
        title: '温馨提示',
        icon: /*#__PURE__*/ _react.default.createElement(
          _icons.ExclamationCircleOutlined,
          null,
        ),
        content: confirmText,
        okText: '确定',
        cancelText: '取消',
        confirmLoading: loading,
        onOk: onOk,
      },
      confirmProps,
    ),
  );
};

exports.newConfirm = newConfirm;
