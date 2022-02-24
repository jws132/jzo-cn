'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/empty/style');

var _empty = _interopRequireDefault(require('antd/es/empty'));

var _react = _interopRequireDefault(require('react'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var TreeEmpty = function TreeEmpty(_ref) {
  var _ref$description = _ref.description,
    description = _ref$description === void 0 ? '暂无数据' : _ref$description;
  return /*#__PURE__*/ _react.default.createElement(_empty.default, {
    image: _empty.default.PRESENTED_IMAGE_SIMPLE,
    description: description,
  });
};

var _default = TreeEmpty;
exports.default = _default;
