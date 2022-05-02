'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/col/style');

var _col = _interopRequireDefault(require('antd/es/col'));

require('antd/es/space/style');

var _space = _interopRequireDefault(require('antd/es/space'));

require('antd/es/button/style');

var _button = _interopRequireDefault(require('antd/es/button'));

var _react = _interopRequireDefault(require('react'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var FormAction = function FormAction(_ref) {
  var actionsRender = _ref.actionsRender,
    column = _ref.column,
    totalSpan = _ref.totalSpan,
    layout = _ref.layout,
    defaultActionBar = _ref.defaultActionBar,
    labelBasicSpan = _ref.labelBasicSpan,
    actionsPosition = _ref.actionsPosition,
    action = _ref.action;
  // 布局相关
  // const span = Math.min(Number.isNaN(Number(column)) ? 1 : itemColumn, column); // 列占比数
  var offset = Math.ceil(labelBasicSpan / (column || 1));

  if (layout === 'vertical') {
    offset = 0;
  }

  return /*#__PURE__*/ _react.default.createElement(
    _col.default,
    {
      offset: offset,
      span: 24 - offset,
    },
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        style: {
          textAlign: actionsPosition !== 'default' ? actionsPosition : '',
        },
      },
      defaultActionBar &&
        /*#__PURE__*/ _react.default.createElement(
          _space.default,
          null,
          /*#__PURE__*/ _react.default.createElement(
            _button.default,
            {
              type: 'primary',
              htmlType: 'submit',
            },
            '\u4FDD\u5B58',
          ),
          /*#__PURE__*/ _react.default.createElement(
            _button.default,
            {
              htmlType: 'button',
              onClick: function onClick() {
                return action === null || action === void 0
                  ? void 0
                  : action.resetFields();
              },
            },
            '\u91CD\u7F6E',
          ),
        ),
      actionsRender &&
        (actionsRender === null || actionsRender === void 0
          ? void 0
          : actionsRender(action)),
    ),
  );
};

var _default = FormAction;
exports.default = _default;
