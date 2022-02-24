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

require('antd/es/input-number/style');

var _inputNumber = _interopRequireDefault(require('antd/es/input-number'));

require('antd/es/input/style');

var _input = _interopRequireDefault(require('antd/es/input'));

var _react = _interopRequireWildcard(require('react'));

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

var InputGroup = _input.default.Group;
/**
 * 数字区间组件
 */

var NumRange = function NumRange(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    precision = _ref.precision,
    minProps = _ref.minProps,
    maxProps = _ref.maxProps,
    rest = _objectWithoutProperties(_ref, [
      'value',
      'onChange',
      'precision',
      'minProps',
      'maxProps',
    ]);

  var _useState = (0, _react.useState)(undefined),
    _useState2 = _slicedToArray(_useState, 2),
    minNum = _useState2[0],
    setMinNum = _useState2[1];

  var _useState3 = (0, _react.useState)(undefined),
    _useState4 = _slicedToArray(_useState3, 2),
    maxNum = _useState4[0],
    setMaxNum = _useState4[1];

  (0, _react.useEffect)(
    function() {
      if (onChange) {
        onChange([minNum, maxNum]);
      }
    },
    [minNum, maxNum],
  );
  (0, _react.useEffect)(
    function() {
      var _ref2 = value || [],
        _ref3 = _slicedToArray(_ref2, 2),
        outMin = _ref3[0],
        outMax = _ref3[1];

      if (outMin !== minNum) {
        setMinNum(outMin);
      }

      if (outMax !== maxNum) {
        setMaxNum(outMax);
      }
    },
    [value],
  );

  var onMinChange = function onMinChange(v) {
    if (maxNum && v > maxNum) v = maxNum;
    setMinNum(v);
  };

  var onMaxChange = function onMaxChange(v) {
    if (minNum && v < minNum) v = minNum;
    setMaxNum(v);
  };

  return /*#__PURE__*/ _react.default.createElement(
    InputGroup,
    _extends(
      {
        compact: true,
      },
      rest,
    ),
    /*#__PURE__*/ _react.default.createElement(
      _inputNumber.default,
      _extends(
        {
          min: 0,
          max: 10000000000,
          precision: precision,
          value: minNum,
          onChange: onMinChange,
          style: {
            width: '42.5%',
          },
        },
        minProps,
      ),
    ),
    /*#__PURE__*/ _react.default.createElement(_input.default, {
      style: {
        width: '15%',
        borderLeft: 0,
        pointerEvents: 'none',
        backgroundColor: '#fff',
      },
      placeholder: '~',
      disabled: true,
    }),
    /*#__PURE__*/ _react.default.createElement(
      _inputNumber.default,
      _extends(
        {
          style: {
            borderLeft: 0,
            width: '42.5%',
          },
          max: 10000000000,
          min: 0,
          precision: precision,
          value: maxNum,
          onChange: onMaxChange,
        },
        maxProps,
      ),
    ),
  );
};

NumRange.defaultProps = {
  precision: 0,
  onChange: function onChange() {},
};
var _default = NumRange;
exports.default = _default;
