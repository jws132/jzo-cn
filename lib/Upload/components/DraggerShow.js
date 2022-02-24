'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/upload/style');

var _upload = _interopRequireDefault(require('antd/es/upload'));

var _react = _interopRequireDefault(require('react'));

var _icons = require('@ant-design/icons');

var _TemplateDown = _interopRequireDefault(require('./TemplateDown'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Dragger = _upload.default.Dragger;
/**
 * 拖拽展示组件
 * @param {*} param0
 */

var DraggerShow = function DraggerShow(_ref) {
  var uploadProps = _ref.uploadProps,
    tip = _ref.tip,
    disabled = _ref.disabled,
    templateUrl = _ref.templateUrl;
  return disabled
    ? /*#__PURE__*/ _react.default.createElement(_upload.default, uploadProps)
    : /*#__PURE__*/ _react.default.createElement(
        Dragger,
        uploadProps,
        /*#__PURE__*/ _react.default.createElement(
          _react.default.Fragment,
          null,
          /*#__PURE__*/ _react.default.createElement(
            'p',
            {
              className: 'ant-upload-drag-icon',
            },
            ' ',
            /*#__PURE__*/ _react.default.createElement(
              _icons.InboxOutlined,
              null,
            ),
            ' ',
          ),
          /*#__PURE__*/ _react.default.createElement(
            'p',
            {
              className: 'ant-upload-text',
            },
            '\u70B9\u51FB\u6216\u5C06\u6587\u4EF6\u62D6\u62FD\u5230\u8FD9\u91CC\u4E0A\u4F20',
            /*#__PURE__*/ _react.default.createElement(_TemplateDown.default, {
              templateUrl: templateUrl,
            }),
          ),
          tip,
        ),
      );
};

var _default = DraggerShow;
exports.default = _default;
