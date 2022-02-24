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

require('antd/es/menu/style');

var _menu = _interopRequireDefault(require('antd/es/menu'));

var _react = _interopRequireWildcard(require('react'));

var _index = require('../../utils/index');

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

var TreeMenu = function TreeMenu(_ref) {
  var treeData = _ref.treeData,
    modelKeys = _ref.modelKeys,
    onMenuClick = _ref.onMenuClick,
    iconRender = _ref.iconRender;
  var _modelKeys$childrenFi = modelKeys.childrenField,
    childrenField =
      _modelKeys$childrenFi === void 0 ? 'children' : _modelKeys$childrenFi,
    _modelKeys$nameField = modelKeys.nameField,
    nameField =
      _modelKeys$nameField === void 0 ? 'title' : _modelKeys$nameField,
    _modelKeys$keyField = modelKeys.keyField,
    keyField = _modelKeys$keyField === void 0 ? 'key' : _modelKeys$keyField;
  var dataList = (0, _react.useMemo)(
    function() {
      return (0, _index.getDataList)(
        treeData,
        keyField,
        nameField,
        childrenField,
      );
    },
    [treeData],
  ); // 格式化列表

  var onCurMenuClick = function onCurMenuClick(_ref2) {
    var key = _ref2.key;
    var item =
      dataList.filter(function(el) {
        return el[keyField] == key;
      })[0] || {};
    onMenuClick === null || onMenuClick === void 0
      ? void 0
      : onMenuClick(key, item);
  };

  var loop = function loop(data) {
    return data.map(function(item) {
      var hasChildren = item[childrenField];
      var title = item[nameField];

      if (hasChildren && hasChildren.length > 0) {
        return /*#__PURE__*/ _react.default.createElement(
          _menu.default.SubMenu,
          {
            key: item[keyField],
            title: title,
            icon:
              iconRender === null || iconRender === void 0
                ? void 0
                : iconRender(item),
          },
          loop(item[childrenField]),
        );
      }

      return /*#__PURE__*/ _react.default.createElement(
        _menu.default.Item,
        {
          key: item[keyField],
          icon:
            iconRender === null || iconRender === void 0
              ? void 0
              : iconRender(item),
        },
        title,
      );
    });
  };

  return /*#__PURE__*/ _react.default.createElement(
    _menu.default,
    {
      onClick: onCurMenuClick,
    },
    loop(treeData),
  );
};

TreeMenu.defaultProps = {
  treeData: [],
  iconRender: null,
};
var _default = TreeMenu;
exports.default = _default;
