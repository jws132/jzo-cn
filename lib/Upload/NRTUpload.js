'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/message/style');

var _message2 = _interopRequireDefault(require('antd/es/message'));

var _react = _interopRequireWildcard(require('react'));

var _UploadShow = _interopRequireDefault(require('./components/UploadShow'));

var _Tip = _interopRequireDefault(require('./components/Tip'));

var _FileItem = _interopRequireDefault(require('./components/FileItem'));

var _util = require('./util');

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

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _iterableToArray(iter) {
  if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter))
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function() {
    var self = this,
      args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      }
      _next(undefined);
    });
  };
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
 * 非实时上传组件
 */
var NRTUpload = function NRTUpload(_ref) {
  var listType = _ref.listType,
    _ref$acceptSuffix = _ref.acceptSuffix,
    acceptSuffix = _ref$acceptSuffix === void 0 ? '' : _ref$acceptSuffix,
    _ref$maxLength = _ref.maxLength,
    maxLength = _ref$maxLength === void 0 ? 1 : _ref$maxLength,
    _ref$maxSize = _ref.maxSize,
    maxSize = _ref$maxSize === void 0 ? 2 : _ref$maxSize,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    value = _ref.value,
    templateUrl = _ref.templateUrl,
    _ref$separator = _ref.separator,
    separator = _ref$separator === void 0 ? ';' : _ref$separator,
    onChange = _ref.onChange,
    rest = _objectWithoutProperties(_ref, [
      'listType',
      'acceptSuffix',
      'maxLength',
      'maxSize',
      'disabled',
      'value',
      'templateUrl',
      'separator',
      'onChange',
    ]);

  var accept = (0, _react.useMemo)(
    function() {
      return acceptSuffix === null || acceptSuffix === void 0
        ? void 0
        : acceptSuffix.split(',').map(function(el) {
            return _util.AcceptMap[el] || el;
          });
    },
    [acceptSuffix],
  ); // 文件接受的类型

  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    fileList = _useState2[0],
    setFileList = _useState2[1]; // 往外部传值

  var triggerChange = function triggerChange(fileList) {
    onChange === null || onChange === void 0
      ? void 0
      : onChange(
          (fileList === null || fileList === void 0
          ? void 0
          : fileList.length)
            ? fileList
            : undefined,
        );
  }; // 外部value值

  var outFileList = (0, _react.useMemo)(
    function() {
      if (value && typeof value === 'string') {
        var _value$split;

        var newFileList =
          value === null || value === void 0
            ? void 0
            : (_value$split = value.split(separator)) === null ||
              _value$split === void 0
            ? void 0
            : _value$split
                .filter(function(el) {
                  return el;
                })
                .map(function(el, index) {
                  var arr = el.split('/');
                  return {
                    uid: index,
                    status: 'done',
                    url: el,
                    name: arr[arr.length - 1],
                  };
                });
        return newFileList;
      } else if (value && _typeof(value) === 'object' && value.length) {
        return value;
      }

      return undefined;
    },
    [value],
  );
  var currFileList = outFileList || fileList; // 默认按钮配置

  var defaultShowUploadList = {
    showPreviewIcon: false,
    showDownloadIcon: false,
    showRemoveIcon: !disabled,
  }; // 删除功能

  var onMyRemove = function onMyRemove(file) {
    var list =
      currFileList === null || currFileList === void 0
        ? void 0
        : currFileList.filter(function(el) {
            return el.uid !== file.uid;
          });
    setFileList(list);
    triggerChange(list);
  };

  var uploadProps = _objectSpread(
    {
      fileList: currFileList,
      accept: accept,
      showUploadList: defaultShowUploadList,
      beforeUpload: (function() {
        var _beforeUpload = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee(file) {
            var isLtSize;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    isLtSize = file.size / 1024 / 1024 < maxSize;

                    if (!isLtSize) {
                      _message2.default.error(
                        '\u6587\u4EF6\u8981\u5C0F\u4E8E'.concat(maxSize, 'MB!'),
                      );
                    }

                    return _context.abrupt('return', isLtSize);

                  case 3:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee);
          }),
        );

        function beforeUpload(_x) {
          return _beforeUpload.apply(this, arguments);
        }

        return beforeUpload;
      })(),
      itemRender: function itemRender(originNode, file) {
        return /*#__PURE__*/ _react.default.createElement(_FileItem.default, {
          file: file,
          showUploadList: defaultShowUploadList,
          onRemove: onMyRemove,
        });
      },
      onChange: function onChange(_ref2) {
        var file = _ref2.file,
          fileList = _ref2.fileList;
        var status = file.status,
          name = file.name;
        var newFileList = fileList.slice(0, maxLength || fileList.length);
        setFileList(_toConsumableArray(newFileList));

        if (status === 'done') {
          triggerChange(
            fileList.map(function(el) {
              var response = el.response,
                url = el.url,
                rest = _objectWithoutProperties(el, ['response', 'url']);

              return _objectSpread(
                _objectSpread(_objectSpread({}, rest), response),
                {},
                {
                  url:
                    url ||
                    (response === null || response === void 0
                      ? void 0
                      : response.url),
                },
              );
            }),
          );
        }

        if (status === 'error') {
          _message2.default.error(
            ''.concat(name, ' \u6587\u4EF6\u4E0A\u4F20\u5931\u8D25'),
          );
        }
      },
      customRequest: function customRequest(_ref3) {
        var file = _ref3.file,
          onSuccess = _ref3.onSuccess;
        var reader = new FileReader();
        reader.readAsDataURL(file); // 读取文件

        reader.onload = function(localFile) {
          onSuccess({
            url: file.name,
          });
        };
      },
      onRemove: onMyRemove,
      disabled: disabled,
    },
    rest,
  );

  return /*#__PURE__*/ _react.default.createElement(_UploadShow.default, {
    uploadProps: uploadProps,
    tip: /*#__PURE__*/ _react.default.createElement(_Tip.default, {
      maxLength: maxLength,
      maxSize: maxSize,
      acceptSuffix: acceptSuffix,
    }),
    disabled: disabled || currFileList.length >= maxLength,
    templateUrl: templateUrl,
  });
};

var _default = NRTUpload;
exports.default = _default;
