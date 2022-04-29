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

require('antd/es/popover/style');

var _popover = _interopRequireDefault(require('antd/es/popover'));

var _react = _interopRequireWildcard(require('react'));

var _TreeMenu = _interopRequireDefault(require('./components/TreeMenu'));

var _Menu = _interopRequireDefault(require('./components/Menu'));

var _style2 = _interopRequireDefault(require('./style.less'));

var _excluded = [
  'onClickRender',
  'children',
  'placement',
  'modelKeys',
  'treeData',
  'onMenuClick',
  'trigger',
];

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

var PopoverMenu = function PopoverMenu(_ref) {
  var onClickRender = _ref.onClickRender,
    children = _ref.children,
    placement = _ref.placement,
    modelKeys = _ref.modelKeys,
    treeData = _ref.treeData,
    onMenuClick = _ref.onMenuClick,
    trigger = _ref.trigger,
    restProps = _objectWithoutProperties(_ref, _excluded);

  var menusRender = (0, _react.useMemo)(
    function() {
      return (
        (onClickRender === null || onClickRender === void 0
          ? void 0
          : onClickRender()) || []
      );
    },
    [onClickRender],
  );
  return /*#__PURE__*/ _react.default.createElement(
    _popover.default,
    _extends(
      {
        overlayClassName: _style2.default.popover,
        placement: placement,
        getPopupContainer: function getPopupContainer(triggerNode) {
          return triggerNode.parentNode;
        },
        content:
          (menusRender === null || menusRender === void 0
            ? void 0
            : menusRender.length) > 0
            ? /*#__PURE__*/ _react.default.createElement(_Menu.default, {
                modelKeys: modelKeys,
                menusRender: menusRender,
              })
            : /*#__PURE__*/ _react.default.createElement(_TreeMenu.default, {
                modelKeys: modelKeys,
                treeData: treeData,
                onMenuClick: onMenuClick,
              }),
        trigger: trigger,
      },
      restProps,
    ),
    children,
  );
};

PopoverMenu.defaultProps = {
  modelKeys: {
    childrenField: 'children',
    // children的字段名
    nameField: 'title',
    // 名称显示字段
    keyField: 'key', // key值字段，需string
  },
  trigger: 'hover',
  placement: 'bottomLeft',
  onMenuClick: function onMenuClick() {},
  onClickRender: null,
};
var _default = PopoverMenu;
exports.default = _default;
