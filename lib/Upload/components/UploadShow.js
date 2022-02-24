'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/upload/style');

var _upload = _interopRequireDefault(require('antd/es/upload'));

require('antd/es/button/style');

var _button = _interopRequireDefault(require('antd/es/button'));

var _react = _interopRequireDefault(require('react'));

var _icons = require('@ant-design/icons');

var _TemplateDown = _interopRequireDefault(require('./TemplateDown'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * 上传展示组件
 */
var UploadShow = function UploadShow(_ref) {
  var uploadProps = _ref.uploadProps,
    tip = _ref.tip,
    disabled = _ref.disabled,
    templateUrl = _ref.templateUrl,
    isPicture = _ref.isPicture;
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    /*#__PURE__*/ _react.default.createElement(
      _upload.default,
      uploadProps,
      disabled
        ? null
        : isPicture
        ? /*#__PURE__*/ _react.default.createElement(
            'div',
            null,
            /*#__PURE__*/ _react.default.createElement(_icons.UploadOutlined, {
              style: {
                fontSize: 18,
              },
            }),
            /*#__PURE__*/ _react.default.createElement(
              'div',
              null,
              '\u4E0A\u4F20',
            ),
          )
        : /*#__PURE__*/ _react.default.createElement(
            _react.default.Fragment,
            null,
            /*#__PURE__*/ _react.default.createElement(
              _button.default,
              {
                type: 'primary',
              },
              /*#__PURE__*/ _react.default.createElement(
                _icons.UploadOutlined,
                null,
              ),
              '\u4E0A\u4F20\u6587\u4EF6',
            ),
            /*#__PURE__*/ _react.default.createElement(_TemplateDown.default, {
              templateUrl: templateUrl,
            }),
            tip,
          ),
    ),
    isPicture && !disabled && tip,
  );
};

var _default = UploadShow;
exports.default = _default;
