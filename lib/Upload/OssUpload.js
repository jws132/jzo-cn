'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/upload/style');

var _upload = _interopRequireDefault(require('antd/es/upload'));

require('antd/es/modal/style');

var _modal = _interopRequireDefault(require('antd/es/modal'));

require('antd/es/message/style');

var _message2 = _interopRequireDefault(require('antd/es/message'));

var _react = _interopRequireWildcard(require('react'));

var _icons = require('@ant-design/icons');

var _index = _interopRequireDefault(require('./index.less'));

var _propTypes = _interopRequireDefault(require('prop-types'));

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

// 校验图片的高宽比
// const validImageWH = (file, width, height) => {
//   const filereader = new FileReader();
//   const image = new Image();
//   return new Promise((resolve, reject) => {
//     if (!width || !height) {
//       resolve(true);
//     } else {
//       filereader.onload = e => {
//         image.onload = function () {
//           // 获取图片的宽高，并存放到file对象中
//           if (this.width !== width || this.height !== height) {
//             message.error(`图片尺寸大小应为：${width}*${height}`);
//             reject(false);
//           } else resolve(true);
//         };
//         image.onerror = reject;
//         image.src = e.target.result;
//       };
//       filereader.readAsDataURL(file);
//     }
//   });
// };

/**
 * 图片上传OSS方式
 * @param {*} param0
 */
var ImgUpload = function ImgUpload(_ref) {
  var value = _ref.value,
    separator = _ref.separator,
    onChange = _ref.onChange,
    size = _ref.size,
    width = _ref.width,
    height = _ref.height,
    disabled = _ref.disabled,
    hideUploadButton = _ref.hideUploadButton,
    max = _ref.max,
    accept = _ref.accept,
    queryOssSign = _ref.queryOssSign;

  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    fileList = _useState2[0],
    setFileList = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    OSSData = _useState4[0],
    setOSSData = _useState4[1];

  (0, _react.useEffect)(function() {
    init(); // 获取oss签名信息
  }, []); // value值变化更改fileList

  (0, _react.useEffect)(
    function() {
      if (value) {
        var arr = value.split(separator); // 接受多张图片数据

        var res = arr.map(function(url) {
          var urlArr = url.split('/');
          return {
            uid: Math.random(),
            url: url,
            name: urlArr[urlArr.length - 1],
            status: 'done',
          };
        });
        setFileList(res);
      } else {
        setFileList([]);
      }
    },
    [value],
  ); // 获取OSS签名

  var init = /*#__PURE__*/ (function() {
    var _ref2 = _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var _yield$queryOssSign, success, data;

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
                  data = _yield$queryOssSign.data;

                  if (success) {
                    setOSSData(data || {});
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

    return function init() {
      return _ref2.apply(this, arguments);
    };
  })(); // 预览

  var handlePreview = function handlePreview(file) {
    _modal.default.info({
      title: '图片预览',
      icon: false,
      content: /*#__PURE__*/ _react.default.createElement('img', {
        alt: '\u56FE\u7247\u9884\u89C8',
        style: {
          width: '100%',
        },
        src: file.url,
      }),
      okText: '关闭',
      width: 600,
    });
  }; // 移除

  var handleRemove = function handleRemove(file) {
    var arr = [];
    if (value) arr = value.split(separator);
    var res = arr.filter(function(item) {
      return item !== file.url;
    });
    onChange(res.join(separator));
  }; // 监听change

  var handleChange = function handleChange(_ref3) {
    var file = _ref3.file,
      fileList = _ref3.fileList;

    if (file.status === 'done') {
      var outValue = fileList
        .map(function(el) {
          if (el.uid === file.uid) {
            return OSSData.host + el.url;
          }

          return el.url;
        })
        .join(separator);
      onChange && onChange(outValue);
    }
  }; // 修改file的url信息

  var transformFile = function transformFile(file) {
    var suffix = file.name.slice(file.name.lastIndexOf('.'));
    var filename = Date.now() + suffix; // const { name = '', uid, type } = file;
    // const filename = `${name.split(".")[0]}_${uid}.${type.split("/")[1]}`;

    file.url = OSSData.dir + filename;
    return file;
  }; // 获取请求入参

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
  }; // 上传文件之前的钩子

  var handleBeforeUpload = /*#__PURE__*/ (function() {
    var _ref4 = _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee2(file) {
        var isLegal, isLt3M, measure, expire;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                isLegal =
                  file.type === 'image/jpeg' || file.type === 'image/png';

                if (!isLegal) {
                  _message2.default.error('图片文件必须是jpg、png！');
                }

                isLt3M = file.size / 1024 / 1024 < size;

                if (!isLt3M) {
                  _message2.default.error(
                    '\u56FE\u7247\u6587\u4EF6\u5FC5\u987B\u5C0F\u4E8E'.concat(
                      size,
                      'MB!',
                    ),
                  );
                }

                measure = true; //await validImageWH(file, width, height); // 宽高限制

                if (!(isLegal && isLt3M && measure)) {
                  _context2.next = 11;
                  break;
                }

                expire = OSSData.expire * 1000;

                if (!(expire < Date.now())) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 10;
                return init();

              case 10:
                return _context2.abrupt('return', true);

              case 11:
                return _context2.abrupt('return', false);

              case 12:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2);
      }),
    );

    return function handleBeforeUpload(_x) {
      return _ref4.apply(this, arguments);
    };
  })();

  var uploadButton = /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: _index.default.defaultUploadWrap,
    },
    /*#__PURE__*/ _react.default.createElement(_icons.ToTopOutlined, {
      style: {
        fontSize: '18px',
      },
    }),
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'ant-upload-text',
      },
      '\u4E0A\u4F20',
    ),
  );

  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    /*#__PURE__*/ _react.default.createElement(
      _upload.default,
      {
        name: 'file',
        action: OSSData.host,
        accept: accept,
        listType: 'picture-card',
        fileList: fileList,
        onPreview: handlePreview,
        onRemove: handleRemove,
        beforeUpload: handleBeforeUpload,
        onChange: handleChange,
        transformFile: transformFile,
        data: getExtraData,
        disabled: disabled,
        showUploadList: {
          showPreviewIcon: true,
          showRemoveIcon: !disabled,
          showDownloadIcon: false,
        },
      },
      fileList.length >= max || hideUploadButton ? null : uploadButton,
    ),
    /*#__PURE__*/ _react.default.createElement(
      'p',
      null,
      '\u53EA\u652F\u6301'
        .concat(accept, '\u6587\u4EF6 \u5927\u5C0F\u4E0D\u8D85\u8FC7')
        .concat(size, 'mb '),
      width &&
        '\u56FE\u7247\u5C3A\u5BF8\u4E3A'.concat(width, '*').concat(height, ' '),
      max > 1 && '\u6700\u591A\u4E0A\u4F20'.concat(max, '\u5F20\u56FE\u7247'),
    ),
  );
};

ImgUpload.propTypes = {
  disabled: _propTypes.default.bool,
  // 是否可以删除重新上传
  hideUploadButton: _propTypes.default.bool,
  // 是否隐藏上传按钮，默认否
  size: _propTypes.default.number,
  // 上传图片的大小，单位为M
  max: _propTypes.default.number,
  // 最多可上传几张图片，默认1张
  accept: _propTypes.default.string,
  // 可接收类型
  width: _propTypes.default.number,
  // 尺寸宽度
  heigth: _propTypes.default.number,
  // 尺寸高度
  separator: _propTypes.default.oneOf([';', ',']),
  // 多图片值分隔符
  queryOssSign: _propTypes.default.oneOfType([
    _propTypes.default.object,
    _propTypes.default.func,
  ]).isRequired,
};
ImgUpload.defaultProps = {
  disabled: false,
  // 是否可以删除重新上传
  hideUploadButton: false,
  // 是否隐藏上传按钮，默认否
  size: 3,
  // 上传图片的大小，单位为M
  max: 1,
  // 最多可上传几张图片，默认1张
  accept: '.jpg,.png',
  // 可接收类型
  separator: ';', // 多图片值分隔符
};
var _default = ImgUpload;
exports.default = _default;
