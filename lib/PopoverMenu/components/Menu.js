'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function(obj) {
            return typeof obj;
          }
        : function(obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/menu/style');

var _menu = _interopRequireDefault(require('antd/es/menu'));

var _react = _interopRequireWildcard(require('react'));

var _lodash = require('lodash');

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(
    nodeInterop,
  ) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
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

var JMenu = function JMenu(_ref) {
  var menusRender = _ref.menusRender,
    modelKeys = _ref.modelKeys;
  var _modelKeys$nameField = modelKeys.nameField,
    nameField =
      _modelKeys$nameField === void 0 ? 'title' : _modelKeys$nameField,
    _modelKeys$keyField = modelKeys.keyField,
    keyField = _modelKeys$keyField === void 0 ? 'key' : _modelKeys$keyField;
  var menuEnum = (0, _lodash.keyBy)(menusRender, 'key');

  var onCurMenuClick = function onCurMenuClick(_ref2) {
    var _menuEnum$key, _menuEnum$key$onClick;

    var key = _ref2.key,
      domEvent = _ref2.domEvent;
    domEvent.stopPropagation();
    var item =
      (menuEnum === null || menuEnum === void 0 ? void 0 : menuEnum[key]) || {};
    menuEnum === null || menuEnum === void 0
      ? void 0
      : (_menuEnum$key = menuEnum[key]) === null || _menuEnum$key === void 0
      ? void 0
      : (_menuEnum$key$onClick = _menuEnum$key.onClick) === null ||
        _menuEnum$key$onClick === void 0
      ? void 0
      : _menuEnum$key$onClick.call(_menuEnum$key, {
          key: key,
          item: item,
        });
  };

  return /*#__PURE__*/ _react.default.createElement(
    _menu.default,
    {
      onClick: onCurMenuClick,
    },
    menusRender.map(function(el) {
      return /*#__PURE__*/ _react.default.createElement(
        _menu.default.Item,
        {
          key: el[keyField],
          icon: el.icon || null,
        },
        el[nameField],
      );
    }),
  );
};

JMenu.defaultProps = {
  menusRender: [],
  iconRender: null,
};
var _default = JMenu;
exports.default = _default;
