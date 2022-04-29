'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _components = require('./components');

var _excluded = [
  'type',
  'hide',
  'onOk',
  'disabled',
  'confirmText',
  'tipText',
  'loading',
  'name',
  'children',
  'placement',
  'props',
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

var TYPE_TO_COMPONENT = {
  Confirm: _components.Confirm,
  Popconfirm: _components.Popconfirm,
  Button: _components.Button,
  More: _components.More,
};
/**
 * 表格按钮组件
 * 数组props 为原始Button属性
 * @param {*} param0
 */

var AuthBtn = function AuthBtn(_ref) {
  var type = _ref.type,
    hide = _ref.hide,
    onOk = _ref.onOk,
    disabled = _ref.disabled,
    confirmText = _ref.confirmText,
    _ref$tipText = _ref.tipText,
    tipText = _ref$tipText === void 0 ? '' : _ref$tipText,
    loading = _ref.loading,
    name = _ref.name,
    children = _ref.children,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? 'top' : _ref$placement,
    props = _ref.props,
    restProps = _objectWithoutProperties(_ref, _excluded);

  if (hide) return null;

  var componentProps = _objectSpread(
    {
      onOk: onOk,
      disabled: disabled,
      loading: loading,
      placement: placement,
      tipText: tipText,
      props: props,
    },
    restProps,
  );

  if (['confirm', 'popconfirm', 'tooltip', 'more'].includes(type)) {
    var componentType = type.replace(type[0], type[0].toUpperCase());
    var Component = TYPE_TO_COMPONENT[componentType];

    if (['confirm', 'popconfirm'].includes(type)) {
      componentProps.confirmText = confirmText;
    }

    return /*#__PURE__*/ _react.default.createElement(
      Component,
      componentProps,
      children ? children : name,
    );
  } else {
    return /*#__PURE__*/ _react.default.createElement(
      _components.Button,
      _extends(
        {
          type: type,
        },
        componentProps,
      ),
      children ? children : name,
    );
  }
};

AuthBtn.defaultProps = {
  type: 'link',
  onOk: function onOk() {},
  // 回调方法
  hide: false,
  // 是否显示
  disabled: false,
  //是否禁用
  confirmText: '',
  //提示信息
  loading: false,
  placement: 'top',
};
var _default = AuthBtn;
exports.default = _default;
