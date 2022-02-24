'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.newConfirm = void 0;

require('antd/es/modal/style');

var _modal = _interopRequireDefault(require('antd/es/modal'));

var _react = _interopRequireDefault(require('react'));

var _icons = require('@ant-design/icons');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var confirm = _modal.default.confirm;

var newConfirm = function newConfirm(_ref) {
  var confirmText = _ref.confirmText,
    loading = _ref.loading,
    onOk = _ref.onOk;
  return confirm({
    title: '温馨提示',
    icon: /*#__PURE__*/ _react.default.createElement(
      _icons.ExclamationCircleOutlined,
      null,
    ),
    content: confirmText,
    okText: '确定',
    cancelText: '取消',
    confirmLoading: loading,
    onOk: onOk,
  });
};

exports.newConfirm = newConfirm;
