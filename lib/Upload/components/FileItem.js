'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/progress/style');

var _progress = _interopRequireDefault(require('antd/es/progress'));

var _react = _interopRequireDefault(require('react'));

var _icons = require('@ant-design/icons');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * 已上传文件展示
 * @param {*} param0
 */
var FileItem = function FileItem(_ref) {
  var showUploadList = _ref.showUploadList,
    file = _ref.file,
    previewFile = _ref.previewFile,
    onPreview = _ref.onPreview,
    onRemove = _ref.onRemove,
    onDownload = _ref.onDownload,
    nameRender = _ref.nameRender;

  var _ref2 = file || {},
    status = _ref2.status,
    percent = _ref2.percent,
    name = _ref2.name,
    uid = _ref2.uid;

  var showDownloadIcon = showUploadList.showDownloadIcon,
    showPreviewIcon = showUploadList.showPreviewIcon,
    showRemoveIcon = showUploadList.showRemoveIcon;
  var isSelf =
    (previewFile === null || previewFile === void 0
      ? void 0
      : previewFile.uid) === uid;
  var isError = status === 'error';
  var isUploading = status === 'uploading';
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'file-upload-file-item '
          .concat(isError ? 'error' : '', ' ')
          .concat(isSelf ? 'active' : ''),
      },
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'file-upload-file-item-file-name',
        },
        /*#__PURE__*/ _react.default.createElement(
          'div',
          null,
          isUploading
            ? /*#__PURE__*/ _react.default.createElement(
                _icons.LoadingOutlined,
                null,
              )
            : /*#__PURE__*/ _react.default.createElement(
                _icons.PaperClipOutlined,
                null,
              ),
          '\xA0\xA0',
          isUploading || isError
            ? /*#__PURE__*/ _react.default.createElement('span', null, name)
            : nameRender
            ? nameRender(file)
            : /*#__PURE__*/ _react.default.createElement('span', null, name),
        ),
        percent > 0 &&
          isUploading &&
          /*#__PURE__*/ _react.default.createElement(_progress.default, {
            percent: percent,
            size: 'small',
            showInfo: false,
          }),
      ),
      /*#__PURE__*/ _react.default.createElement(
        'div',
        null,
        status === 'done' &&
          showDownloadIcon &&
          /*#__PURE__*/ _react.default.createElement(
            'a',
            {
              onClick: function onClick() {
                return onDownload ? onDownload(file) : window.open(file.url);
              },
            },
            '\u4E0B\u8F7D',
          ),
        status === 'done' &&
          showPreviewIcon &&
          /*#__PURE__*/ _react.default.createElement(
            'a',
            {
              onClick: function onClick() {
                return onPreview === null || onPreview === void 0
                  ? void 0
                  : onPreview(file);
              },
            },
            '\u9884\u89C8',
          ),
        (status === 'error' || showRemoveIcon) &&
          /*#__PURE__*/ _react.default.createElement(
            'a',
            {
              onClick: function onClick() {
                return onRemove === null || onRemove === void 0
                  ? void 0
                  : onRemove(file);
              },
            },
            '\u5220\u9664',
          ),
      ),
    ),
  );
};

var _default = FileItem;
exports.default = _default;
