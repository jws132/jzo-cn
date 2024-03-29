'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/form/style');

var _form = _interopRequireDefault(require('antd/es/form'));

require('antd/es/button/style');

var _button = _interopRequireDefault(require('antd/es/button'));

require('antd/es/space/style');

var _space = _interopRequireDefault(require('antd/es/space'));

var _react = _interopRequireDefault(require('react'));

var _icons = require('@ant-design/icons');

var _FormItem = _interopRequireDefault(require('../FormItem'));

var _style4 = _interopRequireDefault(require('./style.less'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source),
        )
      : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key),
          );
        });
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var DynamicForm = function DynamicForm(_ref) {
  var _ref$listFormSet = _ref.listFormSet,
    listFormSet = _ref$listFormSet === void 0 ? [] : _ref$listFormSet,
    hasHead = _ref.hasHead,
    name = _ref.name,
    _ref$maxLength = _ref.maxLength,
    maxLength = _ref$maxLength === void 0 ? 0 : _ref$maxLength,
    hasLabel = _ref.hasLabel,
    hasRemove = _ref.hasRemove,
    hasMove = _ref.hasMove,
    footerRender = _ref.footerRender;
  return /*#__PURE__*/ _react.default.createElement(
    _form.default.List,
    {
      name: name,
    },
    function(fields, _ref2, _ref3) {
      var add = _ref2.add,
        remove = _ref2.remove,
        move = _ref2.move;
      var errors = _ref3.errors;
      return /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: ''.concat(_style4.default.dynamic, ' ant-table'),
        },
        /*#__PURE__*/ _react.default.createElement(
          'table',
          null,
          hasHead
            ? /*#__PURE__*/ _react.default.createElement(
                'thead',
                {
                  className: 'ant-table-thead',
                },
                /*#__PURE__*/ _react.default.createElement(
                  'tr',
                  null,
                  listFormSet.map(function(item, index) {
                    return /*#__PURE__*/ _react.default.createElement(
                      'th',
                      {
                        key: item.name || item.dataIndex,
                      },
                      item.label || item.title,
                    );
                  }),
                  /*#__PURE__*/ _react.default.createElement(
                    'th',
                    null,
                    '\u64CD\u4F5C',
                  ),
                ),
              )
            : null,
          /*#__PURE__*/ _react.default.createElement(
            'tbody',
            {
              className: 'ant-table-tbody',
            },
            fields.map(function(field, index) {
              return /*#__PURE__*/ _react.default.createElement(
                'tr',
                {
                  key: field.key,
                },
                listFormSet.map(function(item, i) {
                  var _item = item,
                    oldName = _item.name,
                    label = _item.label,
                    dataIndex = _item.dataIndex,
                    title = _item.title;
                  var newName = oldName || dataIndex;
                  var newTitle = label || title;
                  item = _objectSpread(
                    _objectSpread({}, item),
                    {},
                    {
                      dataIndex: [field.name, newName],
                      name: [field.name, newName],
                      fieldKey: [field.fieldKey, newName],
                      label: hasLabel ? newTitle : '',
                    },
                  );
                  return /*#__PURE__*/ _react.default.createElement(
                    'td',
                    {
                      key: ''.concat(field.fieldKey, '_').concat(newName),
                    },
                    /*#__PURE__*/ _react.default.createElement(
                      _FormItem.default,
                      {
                        fields: item,
                      },
                    ),
                  );
                }),
                /*#__PURE__*/ _react.default.createElement(
                  'td',
                  null,
                  /*#__PURE__*/ _react.default.createElement(
                    _space.default,
                    null,
                    hasRemove
                      ? /*#__PURE__*/ _react.default.createElement(
                          _icons.MinusCircleOutlined,
                          {
                            onClick: function onClick() {
                              return remove === null || remove === void 0
                                ? void 0
                                : remove(
                                    field === null || field === void 0
                                      ? void 0
                                      : field.name,
                                  );
                            },
                            style: {
                              color: '#ff4d4f',
                            },
                          },
                        )
                      : '',
                    hasMove && index > 0
                      ? /*#__PURE__*/ _react.default.createElement(
                          _icons.UpCircleOutlined,
                          {
                            onClick: function onClick() {
                              return move === null || move === void 0
                                ? void 0
                                : move(index, index - 1);
                            },
                          },
                        )
                      : '',
                    hasMove && fields.length - 1 > index
                      ? /*#__PURE__*/ _react.default.createElement(
                          _icons.DownCircleOutlined,
                          {
                            onClick: function onClick() {
                              return move === null || move === void 0
                                ? void 0
                                : move(index, index + 1);
                            },
                          },
                        )
                      : '',
                  ),
                ),
              );
            }),
          ),
        ),
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            style: {
              marginTop: 10,
            },
          },
          footerRender
            ? footerRender === null || footerRender === void 0
              ? void 0
              : footerRender({
                  add: add,
                  length: fields.length,
                })
            : /*#__PURE__*/ _react.default.createElement(
                _button.default,
                {
                  type: 'dashed',
                  block: true,
                  disabled: maxLength && fields.length > Number(maxLength),
                  onClick: function onClick() {
                    add();
                  },
                },
                '\u65B0\u589E',
              ),
        ),
      );
    },
  );
};

DynamicForm.defaultProps = {
  listFormSet: [],
  hasHead: true,
  footerRender: null,
  hasLabel: true,
  hasRemove: true,
  hasMove: true,
  size: 'middle',
  maxLength: 0,
};
var _default = DynamicForm;
exports.default = _default;
