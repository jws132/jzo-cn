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

require('antd/es/tree/style');

var _tree = _interopRequireDefault(require('antd/es/tree'));

var _react = _interopRequireWildcard(require('react'));

var _TreeEmpty = _interopRequireDefault(require('./TreeEmpty'));

var _index = require('../../index');

var _index2 = require('../../utils/index');

var _lodash = require('lodash');

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

/**
 * 递归数组
 * @param {*} key
 * @param {*} tree
 */
var getParentKey = function getParentKey(keys, tree, keyField, childrenField) {
  function parentKeyFun(key, data) {
    var parentKey;

    for (var i = 0; i < data.length; i++) {
      var node = data[i];
      var nodeChildren = node[childrenField];

      if (nodeChildren) {
        if (
          nodeChildren.some(function(item) {
            return item[keyField] === key;
          })
        ) {
          parentKey = node[keyField];
        } else if (parentKeyFun(key, nodeChildren)) {
          parentKey = parentKeyFun(key, nodeChildren);
        }
      }
    }

    return parentKey;
  }

  return parentKeyFun(keys, tree);
};

var BaseTree = function BaseTree(_ref) {
  var treeData = _ref.treeData,
    _ref$modelKeys = _ref.modelKeys,
    modelKeys = _ref$modelKeys === void 0 ? [] : _ref$modelKeys,
    checkedKeys = _ref.checkedKeys,
    toolBarRender = _ref.toolBarRender,
    iconRender = _ref.iconRender,
    defaultSelectedKeys = _ref.defaultSelectedKeys,
    searchValue = _ref.searchValue,
    onSelect = _ref.onSelect,
    onCheck = _ref.onCheck,
    onRightClick = _ref.onRightClick,
    menuRightRender = _ref.menuRightRender,
    searchInputRender = _ref.searchInputRender,
    _ref$expandedLevel = _ref.expandedLevel,
    expandedLevel = _ref$expandedLevel === void 0 ? 1 : _ref$expandedLevel,
    onTreeNode = _ref.onTreeNode,
    onTreeNodeTitle = _ref.onTreeNodeTitle,
    restProps = _objectWithoutProperties(_ref, [
      'treeData',
      'modelKeys',
      'checkedKeys',
      'toolBarRender',
      'iconRender',
      'defaultSelectedKeys',
      'searchValue',
      'onSelect',
      'onCheck',
      'onRightClick',
      'menuRightRender',
      'searchInputRender',
      'expandedLevel',
      'onTreeNode',
      'onTreeNodeTitle',
    ]);

  var _modelKeys$childrenFi = modelKeys.childrenField,
    childrenField =
      _modelKeys$childrenFi === void 0 ? 'children' : _modelKeys$childrenFi,
    _modelKeys$nameField = modelKeys.nameField,
    nameField =
      _modelKeys$nameField === void 0 ? 'title' : _modelKeys$nameField,
    _modelKeys$keyField = modelKeys.keyField,
    keyField = _modelKeys$keyField === void 0 ? 'key' : _modelKeys$keyField;

  var _useState = (0, _react.useState)(['2-1']),
    _useState2 = _slicedToArray(_useState, 2),
    expandedKeys = _useState2[0],
    setExpandedKeys = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    letCheckedKeys = _useState4[0],
    setLetCheckedKeys = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    autoExpandParent = _useState6[0],
    setAutoExpandParent = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedKeys = _useState8[0],
    setSelectedKeys = _useState8[1];

  var _useState9 = (0, _react.useState)({}),
    _useState10 = _slicedToArray(_useState9, 2),
    currentItem = _useState10[0],
    setCurrentItem = _useState10[1];

  var dataList = (0, _react.useMemo)(
    function() {
      return (0, _index2.getDataList)(
        treeData,
        keyField,
        nameField,
        childrenField,
      );
    },
    [treeData],
  ); // 格式化列表

  var newKeys = (0, _react.useMemo)(
    function() {
      var expandedKeys = dataList
        .map(function(item) {
          if (item[nameField].includes(searchValue)) {
            return getParentKey(
              item[keyField],
              treeData,
              keyField,
              childrenField,
            );
          }

          return null;
        })
        .filter(function(item, i, self) {
          return item && self.indexOf(item) === i;
        });
      setExpandedKeys((0, _lodash.uniq)(expandedKeys));
      setAutoExpandParent(true);
      return (0, _lodash.uniq)(expandedKeys);
    },
    [searchValue, treeData],
  );
  (0, _react.useEffect)(
    function() {
      var eKeys = dataList
        .filter(function(el) {
          return el[childrenField];
        })
        .map(function(el) {
          return el[keyField];
        });
      console.log('defaultSelectedKey', defaultSelectedKeys);
      setExpandedKeys(eKeys);
      setAutoExpandParent(true);
      setSelectedKeys(defaultSelectedKeys);
      setLetCheckedKeys(checkedKeys);
    },
    [defaultSelectedKeys, treeData],
  ); // 展开所有节点

  var allCheckedKeys = function allCheckedKeys() {
    var allKeys = dataList.map(function(el) {
      return el[keyField];
    });
    onTreeCheck === null || onTreeCheck === void 0
      ? void 0
      : onTreeCheck(allKeys);
  };
  /**
   * 清空选中数据
   */

  var clearCheckedKeys = function clearCheckedKeys() {
    onTreeCheck === null || onTreeCheck === void 0 ? void 0 : onTreeCheck([]);
  };
  /**
   * 右击事件触发
   * @param {*} e
   */

  var onRightEventClick = function onRightEventClick(_ref2) {
    var event = _ref2.event,
      node = _ref2.node;
    var item = dataList.find(function(el) {
      return el[keyField] == node.props.eventKey;
    });
    setCurrentItem(item || {});
  }; //点击复选框触发

  var onTreeCheck = function onTreeCheck(checkedKeys) {
    setLetCheckedKeys(checkedKeys);
    onCheck === null || onCheck === void 0 ? void 0 : onCheck(checkedKeys);
  };
  /**
   * 点击树节点触发
   * @param {*} selectedKeys
   * @param {*} e
   */

  var onTreeSelect = function onTreeSelect(selectedKeys, e) {
    e.stop;
    var item =
      dataList.filter(function(el) {
        return el.key === e.node.key;
      })[0] || {};
    setSelectedKeys(selectedKeys);
    onSelect === null || onSelect === void 0
      ? void 0
      : onSelect(selectedKeys, item);
  };

  var loop = function loop(data) {
    return data.map(function(item) {
      var nodeProps =
        onTreeNode === null || onTreeNode === void 0
          ? void 0
          : onTreeNode(item);
      var nodeTitleProps =
        onTreeNodeTitle === null || onTreeNodeTitle === void 0
          ? void 0
          : onTreeNodeTitle(item);
      var hasChildren = item[childrenField];
      var titleField = item[nameField];
      var index = titleField.indexOf(searchValue);
      var beforeStr = titleField.substr(0, index);
      var afterStr = titleField.substr(index + searchValue.length);
      var title =
        index > -1
          ? /*#__PURE__*/ _react.default.createElement(
              'span',
              nodeTitleProps,
              beforeStr,
              /*#__PURE__*/ _react.default.createElement(
                'span',
                {
                  style: {
                    color: 'red',
                  },
                },
                searchValue,
              ),
              afterStr,
            )
          : /*#__PURE__*/ _react.default.createElement(
              'span',
              nodeTitleProps,
              item[nameField],
            );

      if (
        (menuRightRender === null || menuRightRender === void 0
          ? void 0
          : menuRightRender().length) > 0
      ) {
        title = /*#__PURE__*/ _react.default.createElement(
          _index.PopoverMenu,
          {
            visible:
              item[keyField] ===
              (currentItem === null || currentItem === void 0
                ? void 0
                : currentItem.key),
            placement: 'rightTop',
            onClickRender: function onClickRender() {
              return menuRightRender(item[keyField], item);
            },
            onVisibleChange: function onVisibleChange() {
              setCurrentItem({});
            },
          },
          title,
        );
      }

      var treeNodeProps = _objectSpread(
        {
          title: title,
          key: item[keyField],
          icon: function icon(_ref3) {
            var selected = _ref3.selected;
            return iconRender === null || iconRender === void 0
              ? void 0
              : iconRender(item, selected);
          },
        },
        nodeProps,
      );

      if (hasChildren) {
        return /*#__PURE__*/ _react.default.createElement(
          _tree.default.TreeNode,
          treeNodeProps,
          loop(item[childrenField]),
        );
      }

      return /*#__PURE__*/ _react.default.createElement(
        _tree.default.TreeNode,
        treeNodeProps,
      );
    });
  };

  var state = (0, _react.useMemo)(
    function() {
      if (searchValue && !newKeys.length) {
        return false;
      }

      return true;
    },
    [newKeys],
  );
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    toolBarRender === null || toolBarRender === void 0
      ? void 0
      : toolBarRender({
          checkedKeys: letCheckedKeys,
          expandedKeys: expandedKeys,
          clearCheckedKeys: clearCheckedKeys,
          allCheckedKeys: allCheckedKeys,
        }),
    searchInputRender === null || searchInputRender === void 0
      ? void 0
      : searchInputRender(),
    state
      ? /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            style: {
              marginTop: '20px',
            },
          },
          /*#__PURE__*/ _react.default.createElement(
            _tree.default,
            _extends(
              {
                selectedKeys: selectedKeys,
                checkedKeys: letCheckedKeys,
                onExpand: function onExpand(keys) {
                  setExpandedKeys(keys);
                  setAutoExpandParent(false);
                },
                onCheck: onTreeCheck,
                onSelect: onTreeSelect,
                expandedKeys: expandedKeys,
                autoExpandParent: autoExpandParent,
                onRightClick: onRightEventClick,
                showIcon: true,
              },
              restProps,
            ),
            loop(treeData),
          ),
        )
      : /*#__PURE__*/ _react.default.createElement(_TreeEmpty.default, {
          description: '当前搜索无匹配内容',
        }),
  );
};

BaseTree.defaultProps = {
  treeData: [],
  // 树状数据
  placeholder: '请输入查询条件',
  defaultSelectedKeys: [],
  // 默认选中key
  checkedKeys: [],
  onRightClick: function onRightClick() {},
  // 右键点击回调
  onSelect: function onSelect() {},
  // 右键点击回调
  searchInputRender: null,
  menuRightRender: null,
};
var _default = BaseTree;
exports.default = _default;
