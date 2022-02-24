'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/input-number/style');

var _inputNumber = _interopRequireDefault(require('antd/es/input-number'));

var _react = _interopRequireDefault(require('react'));

var _classnames = _interopRequireDefault(require('classnames'));

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

var InputNum = function InputNum(_ref) {
  var className = _ref.className,
    style = _ref.style,
    suffix = _ref.suffix,
    prefix = _ref.prefix,
    addonBefore = _ref.addonBefore,
    addonAfter = _ref.addonAfter,
    rest = _objectWithoutProperties(_ref, [
      'className',
      'style',
      'suffix',
      'prefix',
      'addonBefore',
      'addonAfter',
    ]);

  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      style: {
        display: 'flex',
        alignItems: 'center',
      },
    },
    prefix &&
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'g-input-fix',
          style: {
            borderRight: 'none',
            paddingRight: 4,
          },
        },
        prefix,
      ),
    addonBefore &&
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'g-input-addon',
        },
        ' ',
        addonBefore,
        ' ',
      ),
    /*#__PURE__*/ _react.default.createElement(
      _inputNumber.default,
      _extends(
        {
          className: (0, _classnames.default)(className, {
            'g-input-number-before': !!addonBefore || !!prefix,
            'g-input-number-after': !!addonAfter || !!suffix,
          }),
          precision: 2,
          style: _objectSpread(
            {
              flex: 1,
            },
            style,
          ),
        },
        rest,
      ),
    ),
    addonAfter &&
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'g-input-addon',
        },
        ' ',
        addonAfter,
        ' ',
      ),
    suffix &&
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'g-input-fix',
          style: {
            borderLeft: 'none',
            paddingLeft: 4,
          },
        },
        suffix,
      ),
  );
};

var _default = InputNum;
exports.default = _default;
