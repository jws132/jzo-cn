'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Tip = function Tip(_ref) {
  var maxSize = _ref.maxSize,
    maxLength = _ref.maxLength,
    acceptSuffix = _ref.acceptSuffix;
  return /*#__PURE__*/ _react.default.createElement(
    'p',
    {
      className: 'ant-upload-hint',
    },
    '\u5927\u5C0F\u4E0D\u8D85\u8FC7'.concat(maxSize, 'mb'),
    acceptSuffix && ' \u53EA\u652F\u6301'.concat(acceptSuffix, '\u6587\u4EF6'),
    maxLength > 1 &&
      ' \u6700\u591A\u4E0A\u4F20'.concat(maxLength, '\u4E2A\u6587\u4EF6'),
  );
};

var _default = Tip;
exports.default = _default;
