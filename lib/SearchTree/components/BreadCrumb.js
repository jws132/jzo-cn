'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _style = _interopRequireDefault(require('../style.less'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var BreadCrumb = function BreadCrumb(_ref) {
  var title = _ref.title,
    rightRender = _ref.rightRender;
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: _style.default.breadCrumb,
    },
    /*#__PURE__*/ _react.default.createElement('span', null, title),
    /*#__PURE__*/ _react.default.createElement(
      'div',
      null,
      rightRender === null || rightRender === void 0 ? void 0 : rightRender(),
    ),
  );
};

BreadCrumb.defaultProps = {
  rightRender: null,
};
var _default = BreadCrumb;
exports.default = _default;
