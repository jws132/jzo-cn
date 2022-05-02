'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/row/style');

var _row = _interopRequireDefault(require('antd/es/row'));

require('antd/es/col/style');

var _col = _interopRequireDefault(require('antd/es/col'));

require('antd/es/card/style');

var _card = _interopRequireDefault(require('antd/es/card'));

var _react = _interopRequireDefault(require('react'));

var _FormItem = _interopRequireDefault(require('../FormItem'));

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

function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

var FormGroup = function FormGroup(props) {
  //表单分组
  var containerRender = function containerRender(_ref) {
    var container = _ref.container,
      fields = _ref.fields,
      formLyoutProps = _ref.formLyoutProps;
    var fieldNode =
      (fields === null || fields === void 0 ? void 0 : fields.length) > 0
        ? itemRender({
            fields: fields,
            formLyoutProps: formLyoutProps,
          })
        : null;
    return container
      ? /*#__PURE__*/ _react.default.createElement(
          _card.default,
          _extends({}, container.props, {
            title:
              container === null || container === void 0
                ? void 0
                : container.title,
          }),
          fieldNode,
        )
      : fieldNode;
  };

  var itemRender = function itemRender(_ref2) {
    var fields = _ref2.fields,
      formLyoutProps = _ref2.formLyoutProps;
    var gutter = formLyoutProps.gutter,
      column = formLyoutProps.column,
      totalSpan = formLyoutProps.totalSpan;
    var fieldsList = [];
    var formGroupList = [];
    fields.forEach(function(fieldConfig, index) {
      var container = fieldConfig.container,
        fields = fieldConfig.fields,
        itemColumn = fieldConfig.column;

      if (container && fields) {
        formGroupList.push(
          containerRender(
            _objectSpread(
              {
                formLyoutProps: formLyoutProps,
              },
              fieldConfig,
            ),
          ),
        );
      } else {
        var span = Math.min(
          Number.isNaN(Number(itemColumn)) ? 1 : itemColumn,
          column,
        ); // 列占比数

        var colSpan = Math.ceil(totalSpan / column) * span;
        fieldsList.push(
          /*#__PURE__*/ _react.default.createElement(
            _col.default,
            {
              span: colSpan,
              key: fieldConfig.dataIndex || fieldConfig.name || Math.random(),
            },
            /*#__PURE__*/ _react.default.createElement(
              _FormItem.default,
              _extends(
                {
                  fields: fieldConfig,
                },
                formLyoutProps,
              ),
            ),
          ),
        );
      }
    });
    return fieldsList.length > 0
      ? /*#__PURE__*/ _react.default.createElement(
          _row.default,
          {
            gutter: gutter,
          },
          fieldsList,
        )
      : formGroupList;
  };

  return containerRender(props);
};

var _default = FormGroup;
exports.default = _default;
