'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _InputNum = _interopRequireDefault(require('../InputNum'));

var _util = require('./util');

require('./index.less');

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

var MoneyInput = function MoneyInput() {
  var multiple =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return function(_ref) {
    var value = _ref.value,
      _onChange = _ref.onChange,
      rest = _objectWithoutProperties(_ref, ['value', 'onChange']);

    return /*#__PURE__*/ _react.default.createElement(
      _InputNum.default,
      _extends(
        {
          value: !Number.isNaN(Number(value))
            ? (0, _util.accDiv)(value, multiple)
            : value,
          onChange: function onChange(v) {
            _onChange(
              !Number.isNaN(Number(v)) ? (0, _util.accMul)(v, multiple) : v,
            );
          },
          precision: 2,
        },
        rest,
      ),
    );
  };
};

var _default = MoneyInput;
exports.default = _default;