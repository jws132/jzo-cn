'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/button/style');

var _button = _interopRequireDefault(require('antd/es/button'));

var _react = _interopRequireDefault(require('react'));

var _index = require('./utils/index');

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
  var children = _ref.children,
    confirmText = _ref.confirmText,
    loading = _ref.loading,
    onOk = _ref.onOk,
    restProps = _objectWithoutProperties(_ref, [
      'children',
      'confirmText',
      'loading',
      'onOk',
    ]);

  return /*#__PURE__*/ _react.default.createElement(
    _button.default,
    _extends(
      {
        type: 'link',
        onClick: function onClick() {
          (0, _index.newConfirm)({
            confirmText: confirmText,
            loading: loading,
            onOk: onOk,
          });
        },
        loading: loading,
      },
      restProps,
    ),
    children,
  );
};

exports.default = _default;
