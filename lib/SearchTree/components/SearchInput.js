'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/input/style');

var _input = _interopRequireDefault(require('antd/es/input'));

var _react = _interopRequireDefault(require('react'));

var _icons = require('@ant-design/icons');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var SearchInput = function SearchInput(_ref) {
  var placeholder = _ref.placeholder,
    onSearch = _ref.onSearch;
  return /*#__PURE__*/ _react.default.createElement(_input.default, {
    placeholder: placeholder,
    onChange: function onChange(e) {
      onSearch === null || onSearch === void 0
        ? void 0
        : onSearch(e.target.value);
    },
    suffix: /*#__PURE__*/ _react.default.createElement(
      _icons.SearchOutlined,
      null,
    ),
    allowClear: true,
  });
};

SearchInput.defaultProps = {
  placeholder: '请输入查询条件',
  onSearch: function onSearch() {}, // 右键点击回调
};
var _default = SearchInput;
exports.default = _default;
