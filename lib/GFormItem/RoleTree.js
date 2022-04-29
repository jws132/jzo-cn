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

require('antd/es/tree/style');

var _tree = _interopRequireDefault(require('antd/es/tree'));

var _react = _interopRequireWildcard(require('react'));

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
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) ||
        arr['@@iterator'];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
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

var TreeNode = _tree.default.TreeNode; // 获取树的叶子节点

var leafKeys = [];

var getLeafKeys = function getLeafKeys(data) {
  data &&
    data.map(function(item) {
      if (item.children && item.children.length > 0) {
        getLeafKeys(item.children);
      } else {
        leafKeys.push(item.id.toString());
      }

      return null;
    });
  return leafKeys;
};
/**
 * 角色树
 * @param {*} param0
 */

var RoleTree = function RoleTree(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    treeData = _ref.treeData;

  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    checkedKeys = _useState2[0],
    setCheckedKeys = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedKeys = _useState4[0],
    setSelectedKeys = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    autoExpandParent = _useState6[0],
    setAutoExpandParent = _useState6[1];

  (0, _react.useEffect)(
    function() {
      getLeafKeys(treeData);
    },
    [treeData],
  );
  (0, _react.useEffect)(
    function() {
      var newKeys = []; // 过滤出非父节点

      if (value) {
        newKeys = leafKeys.filter(function(el) {
          return value.includes(el);
        });
      }

      setCheckedKeys(newKeys);
    },
    [value],
  );

  var onCheck = function onCheck(checkedKeys, e) {
    setCheckedKeys(checkedKeys);
    onChange(checkedKeys.concat(e.halfCheckedKeys));
  };

  var renderTreeNodes = function renderTreeNodes(data) {
    return data.map(function(item) {
      if (item.children && item.children.length > 0) {
        return /*#__PURE__*/ _react.default.createElement(
          TreeNode,
          {
            title: item.menuName,
            key: item.id,
          },
          renderTreeNodes(item.children),
        );
      }

      return /*#__PURE__*/ _react.default.createElement(TreeNode, {
        title: item.menuName,
        key: item.id,
      });
    });
  };

  var onSelect = function onSelect(selectedKeys) {
    setSelectedKeys(selectedKeys);
  };

  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      style: {
        height: 300,
        overflow: 'auto',
      },
    },
    /*#__PURE__*/ _react.default.createElement(
      _tree.default,
      {
        checkable: true,
        checkedKeys: checkedKeys,
        onCheck: onCheck,
        onSelect: onSelect,
        selectedKeys: selectedKeys,
        autoExpandParent: autoExpandParent,
        defaultExpandAll: true,
      },
      renderTreeNodes(treeData),
    ),
  );
};

var _default = RoleTree;
exports.default = _default;
