'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/message/style');

var _message2 = _interopRequireDefault(require('antd/es/message'));

var _react = _interopRequireWildcard(require('react'));

var _util = require('./util');

var _DraggerShow = _interopRequireDefault(require('./components/DraggerShow'));

var _UploadShow = _interopRequireDefault(require('./components/UploadShow'));

var _FileItem = _interopRequireDefault(require('./components/FileItem'));

var _PreviewModal = _interopRequireDefault(
  require('./components/PreviewModal'),
);

require('./index.less');

var _excluded = [
    'listType',
    'acceptSuffix',
    'maxLength',
    'maxSize',
    'totalMaxSize',
    'disabled',
    'value',
    'action',
    'separator',
    'templateUrl',
    'headers',
    'showUploadList',
    'onChange',
    'onPreview',
    'onRemove',
    'onDownload',
    'isDragger',
    'isOSS',
    'queryOssSign',
    'data',
    'beforeUpload',
    'modelKeys',
    'isArrayType',
    'nameRender',
  ],
  _excluded2 = ['response', 'status'];

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
  if (
    (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
    iter['@@iterator'] != null
  )
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source),
        )
      : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key),
          );
        });
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
 * 文件上传组件：
 *  支持单文件、多文件，限定文件数量；
 *  上传格式控制；
 *  文件预览、删除；
 *  支持只查看不能操作
 */
var FileUpload = function FileUpload(_ref) {
  var listType = _ref.listType,
    _ref$acceptSuffix = _ref.acceptSuffix,
    acceptSuffix = _ref$acceptSuffix === void 0 ? '' : _ref$acceptSuffix,
    _ref$maxLength = _ref.maxLength,
    maxLength = _ref$maxLength === void 0 ? 1 : _ref$maxLength,
    _ref$maxSize = _ref.maxSize,
    maxSize = _ref$maxSize === void 0 ? 2 : _ref$maxSize,
    _ref$totalMaxSize = _ref.totalMaxSize,
    totalMaxSize = _ref$totalMaxSize === void 0 ? 2 : _ref$totalMaxSize,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    value = _ref.value,
    _ref$action = _ref.action,
    action =
      _ref$action === void 0
        ? 'https://www.mocky.io/v2/5cc8019d300000980a055e76'
        : _ref$action,
    _ref$separator = _ref.separator,
    separator = _ref$separator === void 0 ? ';' : _ref$separator,
    templateUrl = _ref.templateUrl,
    headers = _ref.headers,
    showUploadList = _ref.showUploadList,
    onChange = _ref.onChange,
    onPreview = _ref.onPreview,
    onRemove = _ref.onRemove,
    onDownload = _ref.onDownload,
    isDragger = _ref.isDragger,
    isOSS = _ref.isOSS,
    queryOssSign = _ref.queryOssSign,
    data = _ref.data,
    beforeUpload = _ref.beforeUpload,
    _ref$modelKeys = _ref.modelKeys,
    modelKeys =
      _ref$modelKeys === void 0
        ? {
            urlKey: 'url',
            idKey: 'id',
            nameKey: 'name',
          }
        : _ref$modelKeys,
    isArrayType = _ref.isArrayType,
    nameRender = _ref.nameRender,
    rest = _objectWithoutProperties(_ref, _excluded);

  var isDocDemo = action === 'https://www.mocky.io/v2/5cc8019d300000980a055e76';

  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    OSSData = _useState2[0],
    setOSSData = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    fileList = _useState4[0],
    setFileList = _useState4[1]; // 本地的文件数据

  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    visible = _useState6[0],
    setVisible = _useState6[1]; // 预览弹窗

  var _useState7 = (0, _react.useState)({}),
    _useState8 = _slicedToArray(_useState7, 2),
    previewFile = _useState8[0],
    setPreviewFile = _useState8[1]; // 预览数据

  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    uploadLock = _useState10[0],
    setUploadLock = _useState10[1]; // 预览数据

  var isPicture =
    listType === null || listType === void 0
      ? void 0
      : listType.includes('picture'); // 是否针对图片

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
  // 获取OSS签名

  var getOSSData = /*#__PURE__*/ (function() {
    var _ref2 = _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var _yield$queryOssSign, success, _data;

        return regeneratorRuntime.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.prev = 0;

                  if (!(typeof queryOssSign === 'function')) {
                    _context.next = 10;
                    break;
                  }

                  _context.next = 4;
                  return queryOssSign();

                case 4:
                  _yield$queryOssSign = _context.sent;
                  success = _yield$queryOssSign.success;
                  _data = _yield$queryOssSign.data;

                  if (success) {
                    setOSSData(_data || {});
                  }

                  _context.next = 11;
                  break;

                case 10:
                  if (queryOssSign && _typeof(queryOssSign) === 'object') {
                    setOSSData(queryOssSign);
                  }

                case 11:
                  _context.next = 16;
                  break;

                case 13:
                  _context.prev = 13;
                  _context.t0 = _context['catch'](0);

                  _message2.default.error(_context.t0);

                case 16:
                case 'end':
                  return _context.stop();
              }
            }
          },
          _callee,
          null,
          [[0, 13]],
        );
      }),
    );

    return function getOSSData() {
      return _ref2.apply(this, arguments);
    };
  })(); // 获取请求入参

  var getExtraData = function getExtraData(file) {
    return {
      key: file.url,
      // 文件名字，可设置路径
      OSSAccessKeyId: OSSData.accessid,
      // Bucket 拥有者的Access Key Id。
      policy: OSSData.policy,
      // policy规定了请求的表单域的合法性
      Signature: OSSData.signature,
      //根据Access Key Secret和policy计算的签名信
      success_action_status: '200', // 让服务端返回200,不然，默认会返回204
    };
  };

  (0, _react.useEffect)(function() {
    if (isOSS) {
      getOSSData(); // 获取oss签名信息
    }
  }, []); // 外部value值

  var outFileList = (0, _react.useMemo)(
    function() {
      var newFileList;
      if (!value) return undefined;

      if (isArrayType) {
        var urlKey = modelKeys.urlKey,
          nameKey = modelKeys.nameKey,
          idKey = modelKeys.idKey;
        newFileList = value.map(function(el) {
          var _el$urlKey;

          var arr =
            ((_el$urlKey = el[urlKey]) === null || _el$urlKey === void 0
              ? void 0
              : _el$urlKey.split('/')) || [];
          return _objectSpread(
            _objectSpread({}, el),
            {},
            {
              uid: el[idKey] || Math.random(),
              url: el[urlKey],
              name: el[nameKey] || arr[arr.length - 1],
              status: 'done',
            },
          );
        });
      } else {
        var _value$split;

        newFileList =
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
      }

      return newFileList;
    },
    [value],
  );
  var currFileList = uploadLock ? fileList : outFileList || fileList; // 上传中拿本地数据展示动态
  // 往外部传值

  var triggerChange = function triggerChange(fileList) {
    var value = isArrayType
      ? fileList
      : fileList
          .map(function(el) {
            return el.url;
          })
          .join(separator);
    onChange === null || onChange === void 0 ? void 0 : onChange(value);
  }; // 默认按钮配置

  var defaultShowUploadList = _objectSpread(
    {
      showPreviewIcon: true,
      showDownloadIcon: false,
      showRemoveIcon: !disabled,
    },
    showUploadList,
  ); // 删除功能

  var onMyRemove = function onMyRemove(file) {
    function remove() {
      var list =
        currFileList === null || currFileList === void 0
          ? void 0
          : currFileList.filter(function(el) {
              return el.uid !== file.uid;
            });
      setFileList(list);

      if (!uploadLock) {
        triggerChange(list);
      }
    }

    if (onRemove && !uploadLock) {
      var _onRemove;

      (_onRemove = onRemove(file)) === null || _onRemove === void 0
        ? void 0
        : _onRemove.then(function(success) {
            if (success) {
              remove();
            }
          });
    } else {
      remove();
    }
  }; // 预览功能

  var onMyPreview = function onMyPreview(file) {
    var url = file.url,
      name = file.name,
      uid = file.uid;
    setPreviewFile({
      type: name.split('.')[1],
      url: url,
      uid: uid,
    });

    if (onPreview) {
      onPreview(file, function() {
        setPreviewFile({});
      });
    } else {
      setVisible(true);
    }
  }; // 上传之后传给外部

  (0, _react.useEffect)(
    function() {
      var isloading = fileList.some(function(el) {
        return el.status === 'uploading' || el.status === 'error';
      });

      if (uploadLock || isloading) {
        var newFileList = [];
        fileList.forEach(function(el) {
          var response = el.response,
            status = el.status,
            rest = _objectWithoutProperties(el, _excluded2);

          if (status !== 'done') {
            return;
          }

          if (isDocDemo) {
            newFileList.push(
              _objectSpread(
                _objectSpread(
                  {
                    status: status,
                  },
                  rest,
                ),
                response,
              ),
            );
          } else {
            var _ref3 = response || {},
              success = _ref3.success,
              _data2 = _ref3.data;

            if (response && success) {
              newFileList.push(
                _objectSpread(
                  _objectSpread(
                    {
                      status: status,
                      url: isArrayType
                        ? _data2 === null || _data2 === void 0
                          ? void 0
                          : _data2[modelKeys.urlKey]
                        : _data2 || '',
                    },
                    isArrayType ? _data2 : null,
                  ),
                  rest,
                ),
              );
            } else if (el.url) {
              newFileList.push(el);
            }
          }
        });
        triggerChange(newFileList);
        setUploadLock(isloading);
      }
    },
    [fileList, uploadLock],
  ); // 上传组件的参数

  var props = _objectSpread(
    {
      listType: listType,
      fileList: currFileList,
      accept: accept,
      action: action,
      headers: _objectSpread(
        {
          authorization: 'authorization-text',
        },
        headers,
      ),
      showUploadList: defaultShowUploadList,
      beforeUpload: isOSS
        ? /*#__PURE__*/ (function() {
            var _ref4 = _asyncToGenerator(
              /*#__PURE__*/ regeneratorRuntime.mark(function _callee2(file) {
                var expire, suffix, filename;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch ((_context2.prev = _context2.next)) {
                      case 0:
                        // 过期重新获取OSSData
                        expire = OSSData.expire * 1000;

                        if (!(expire < Date.now())) {
                          _context2.next = 4;
                          break;
                        }

                        _context2.next = 4;
                        return getOSSData();

                      case 4:
                        suffix = file.name.slice(file.name.lastIndexOf('.'));
                        filename = Date.now() + suffix;
                        file.url = dir + filename;
                        return _context2.abrupt('return', file);

                      case 8:
                      case 'end':
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }),
            );

            return function(_x) {
              return _ref4.apply(this, arguments);
            };
          })()
        : function(file, fileList) {
            var result = true;
            console.log(fileList, file);
            var isLtSize = file.size / 1024 / 1024 < maxSize;
            result = result && isLtSize;

            if (!isLtSize) {
              _message2.default.error(
                '\u6587\u4EF6\u8981\u5C0F\u4E8E'.concat(maxSize, 'MB!'),
              );
            }

            if (beforeUpload) {
              result = result && beforeUpload(file, fileList);
            }

            return result;
          },
      itemRender: function itemRender(originNode, file) {
        if (isPicture) {
          return originNode;
        }

        return /*#__PURE__*/ _react.default.createElement(_FileItem.default, {
          file: file,
          showUploadList: defaultShowUploadList,
          onPreview: onMyPreview,
          onRemove: onMyRemove,
          onDownload: onDownload,
          previewFile: previewFile,
          nameRender: nameRender,
        });
      },
      onChange: function onChange(_ref5) {
        var file = _ref5.file,
          fileList = _ref5.fileList;
        var status = file.status,
          url = file.url,
          response = file.response,
          name = file.name;
        setUploadLock(true); // 锁定上传状态

        var newFileList = fileList
          .slice(0, maxLength || fileList.length)
          .filter(function(file) {
            return !!file.status;
          }) // 过滤beforeUpload 为false的文件
          .map(function(el) {
            var response = el.response;

            var newData = _objectSpread({}, el);

            if (
              status === 'done' &&
              response &&
              !response.success &&
              !isDocDemo
            ) {
              newData.status = 'error';
            }

            return newData;
          });
        setFileList(_toConsumableArray(newFileList));

        if (status === 'error') {
          _message2.default.error(
            ''.concat(name, ' \u6587\u4EF6\u4E0A\u4F20\u5931\u8D25'),
          );
        }

        if (status === 'done' && !isDocDemo) {
          var _ref6 = response || {},
            success = _ref6.success,
            msg = _ref6.msg;

          if (!success && !url) {
            _message2.default.error(
              msg || ''.concat(name, ' \u6587\u4EF6\u4E0A\u4F20\u5931\u8D25'),
            );
          }
        }
      },
      onPreview: onMyPreview,
      onRemove: onMyRemove,
      data: isOSS
        ? function(file) {
            return _objectSpread(_objectSpread({}, getExtraData(file)), data);
          }
        : data,
      disabled: disabled,
    },
    rest,
  ); // 提示语

  var Tip = /*#__PURE__*/ _react.default.createElement(
    'p',
    {
      className: 'ant-upload-hint',
    },
    '\u5355\u6587\u4EF6\u5927\u5C0F\u4E0D\u8D85\u8FC7'.concat(maxSize, 'M'),
    acceptSuffix && ' \u53EA\u652F\u6301'.concat(acceptSuffix, '\u6587\u4EF6'),
    maxLength > 1 &&
      ' \u6700\u591A\u4E0A\u4F20'.concat(maxLength, '\u4E2A\u6587\u4EF6'),
    totalMaxSize && ' \u7D2F\u8BA1\u4E0D\u8D85\u8FC7'.concat(totalMaxSize, 'M'),
  );

  var showComProps = {
    uploadProps: props,
    templateUrl: templateUrl,
    tip: Tip,
    disabled:
      (maxLength &&
        (currFileList === null || currFileList === void 0
          ? void 0
          : currFileList.length) >= maxLength) ||
      disabled,
  };
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    null,
    isDragger
      ? /*#__PURE__*/ _react.default.createElement(
          _DraggerShow.default,
          showComProps,
        )
      : /*#__PURE__*/ _react.default.createElement(
          _UploadShow.default,
          _extends({}, showComProps, {
            isPicture: isPicture,
          }),
        ),
    /*#__PURE__*/ _react.default.createElement(_PreviewModal.default, {
      previewFile: previewFile,
      visible: visible,
      onOk: function onOk() {
        setVisible(false);
        setPreviewFile({});
      },
    }),
  );
};

var _default = FileUpload;
exports.default = _default;
