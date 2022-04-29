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

require('antd/es/modal/style');

var _modal = _interopRequireDefault(require('antd/es/modal'));

var _react = _interopRequireWildcard(require('react'));

var _excluded = ['previewFile', 'onOk'];

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

var PreviewModal = function PreviewModal(_ref) {
  var previewFile = _ref.previewFile,
    onOk = _ref.onOk,
    rest = _objectWithoutProperties(_ref, _excluded);

  var _ref2 = previewFile || {},
    url = _ref2.url,
    type = _ref2.type; // 判断文件是否是图片

  var isImg = (0, _react.useMemo)(
    function() {
      return ['jpg', 'jpeg', 'png', 'svg', 'gif', 'pjpeg'].includes(type);
    },
    [previewFile],
  );
  return /*#__PURE__*/ _react.default.createElement(
    _modal.default,
    _extends(
      {
        title: '\u6587\u4EF6\u9884\u89C8',
        okText: '\u5173\u95ED',
        cancelButtonProps: {
          style: {
            display: 'none',
          },
        },
        onCancel: onOk,
        onOk: onOk,
      },
      rest,
    ),
    url
      ? isImg
        ? /*#__PURE__*/ _react.default.createElement('img', {
            src: previewFile.url,
            alt: '',
            width: '100%',
          })
        : /*#__PURE__*/ _react.default.createElement('iframe', {
            src: 'https://view.officeapps.live.com/op/view.aspxsrc='.concat(
              previewFile.url,
            ),
            width: '100%',
            height: '100%',
            frameborder: '1',
          })
      : null,
  );
};

var _default = PreviewModal;
exports.default = _default;
