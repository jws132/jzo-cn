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

require('antd/es/dropdown/style');

var _dropdown = _interopRequireDefault(require('antd/es/dropdown'));

require('antd/es/button/style');

var _button = _interopRequireDefault(require('antd/es/button'));

require('antd/es/menu/style');

var _menu = _interopRequireDefault(require('antd/es/menu'));

var _react = _interopRequireWildcard(require('react'));

var _lodash = require('lodash');

var _icons = require('@ant-design/icons');

var _index = require('./utils/index');

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
    disabled = _ref.disabled,
    loading = _ref.loading,
    menuChildren = _ref.menuChildren,
    onOk = _ref.onOk,
    restProps = _objectWithoutProperties(_ref, [
      'children',
      'confirmText',
      'disabled',
      'loading',
      'menuChildren',
      'onOk',
    ]);

  var newChildren = (0, _react.useMemo)(
    function() {
      return menuChildren.map(function(el) {
        el.key = (0, _lodash.uniqueId)('menu_');
        return el;
      });
    },
    [menuChildren],
  );
  var keyMenu = (0, _lodash.keyBy)(newChildren, 'key');

  function handleMenuClick(_ref2) {
    var item = _ref2.item,
      key = _ref2.key,
      keyPath = _ref2.keyPath,
      domEvent = _ref2.domEvent;
    domEvent.stopPropagation();

    var _ref3 =
        (keyMenu === null || keyMenu === void 0 ? void 0 : keyMenu[key]) || {},
      type = _ref3.type,
      confirmText = _ref3.confirmText;

    if (type === 'confirm') {
      (0, _index.newConfirm)({
        confirmText: confirmText,
        loading: loading,
        onOk: function onOk() {
          var _keyMenu$key, _keyMenu$key$onOk;

          return keyMenu === null || keyMenu === void 0
            ? void 0
            : (_keyMenu$key = keyMenu[key]) === null || _keyMenu$key === void 0
            ? void 0
            : (_keyMenu$key$onOk = _keyMenu$key.onOk) === null ||
              _keyMenu$key$onOk === void 0
            ? void 0
            : _keyMenu$key$onOk.call(_keyMenu$key);
        },
      });
    } else {
      var _keyMenu$key2, _keyMenu$key2$onOk;

      keyMenu === null || keyMenu === void 0
        ? void 0
        : (_keyMenu$key2 = keyMenu[key]) === null || _keyMenu$key2 === void 0
        ? void 0
        : (_keyMenu$key2$onOk = _keyMenu$key2.onOk) === null ||
          _keyMenu$key2$onOk === void 0
        ? void 0
        : _keyMenu$key2$onOk.call(_keyMenu$key2);
    }
  }

  return /*#__PURE__*/ _react.default.createElement(
    _dropdown.default,
    _extends(
      {
        type: 'link',
        loading: loading,
        overlay: /*#__PURE__*/ _react.default.createElement(
          _menu.default,
          {
            onClick: handleMenuClick,
          },
          newChildren.map(function(el) {
            return /*#__PURE__*/ _react.default.createElement(
              _menu.default.Item,
              _extends(
                {
                  key: el.key,
                },
                el,
              ),
              el.name,
            );
          }),
        ),
      },
      restProps,
    ),
    /*#__PURE__*/ _react.default.createElement(
      _button.default,
      {
        type: 'link',
      },
      children,
      /*#__PURE__*/ _react.default.createElement(_icons.DownOutlined, null),
    ),
  );
};

exports.default = _default;
