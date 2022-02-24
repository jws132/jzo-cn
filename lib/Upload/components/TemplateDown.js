'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * 下载模板
 * @param {*} param0
 */
var TemplateDown = function TemplateDown(_ref) {
  var templateUrl = _ref.templateUrl;
  return (
    !!templateUrl &&
    /*#__PURE__*/ _react.default.createElement(
      _react.default.Fragment,
      null,
      '\xA0\xA0',
      /*#__PURE__*/ _react.default.createElement(
        'a',
        {
          onClick: function onClick(e) {
            e.stopPropagation();

            if (typeof templateUrl === 'string') {
              window.open(templateUrl);
            } else if (typeof templateUrl === 'function') {
              templateUrl(e);
            }
          },
        },
        '\u4E0B\u8F7D\u6A21\u677F',
      ),
    )
  );
};

var _default = TemplateDown;
exports.default = _default;
