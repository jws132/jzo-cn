'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/statistic/style');

var _statistic = _interopRequireDefault(require('antd/es/statistic'));

var _react = _interopRequireDefault(require('react'));

var _classnames2 = _interopRequireDefault(require('classnames'));

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

// 功能：将浮点数四舍五入，取小数点后几位
function toDecimal(x, precision) {
  var f = parseFloat(x);

  if (Number.isNaN(Number(f))) {
    return x;
  }

  var d = precision ? Math.pow(10, precision) : 1;
  f = Math.round(x * d) / d;
  return f;
}

var MoneyShow = function MoneyShow(dividend) {
  return function(_ref) {
    var _classnames;

    var _ref$prefix = _ref.prefix,
      prefix = _ref$prefix === void 0 ? '￥' : _ref$prefix,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? 0 : _ref$value,
      bold = _ref.bold,
      _ref$precision = _ref.precision,
      precision = _ref$precision === void 0 ? 2 : _ref$precision,
      className = _ref.className,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'md' : _ref$size,
      color = _ref.color,
      align = _ref.align,
      rest = _objectWithoutProperties(_ref, [
        'prefix',
        'value',
        'bold',
        'precision',
        'className',
        'size',
        'color',
        'align',
      ]);

    return /*#__PURE__*/ _react.default.createElement(
      _statistic.default,
      _extends(
        {
          className: (0, _classnames2.default)(
            className,
            'g-statistic',
            ((_classnames = {}),
            _defineProperty(_classnames, 'g-statistic-bold', bold),
            _defineProperty(_classnames, 'g-statistic-'.concat(size), !!size),
            _defineProperty(_classnames, 'g-statistic-'.concat(color), !!color),
            _defineProperty(_classnames, 'g-statistic-'.concat(align), !!align),
            _classnames),
          ),
          prefix: prefix,
          value: Number.isNaN(Number(value))
            ? value
            : toDecimal((0, _util.accDiv)(value, dividend || 1), precision),
          precision: precision,
        },
        rest,
      ),
    );
  };
};

var _default = MoneyShow;
exports.default = _default;
