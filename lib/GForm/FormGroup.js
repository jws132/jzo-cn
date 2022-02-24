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

var _lodash = require('lodash');

var _util = require('./util');

var _GFormItem = _interopRequireDefault(require('../GFormItem'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
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

var FormGroup = function FormGroup(props) {
  var gutter = props.gutter,
    formItemProps = props.formItemProps;
  var getGroup = (0, _lodash.uniqueId)('groupName_');

  var groupRender = function groupRender(ctx, props) {
    var container = props.container,
      fields = props.fields,
      children = props.children;
    var containerNode = container
      ? /*#__PURE__*/ _react.default.createElement(
          _card.default,
          container.props,
        )
      : /*#__PURE__*/ _react.default.createElement(
          _react.default.Fragment,
          null,
        );
    var fieldNode =
      (fields === null || fields === void 0 ? void 0 : fields.length) > 0
        ? containerRender(ctx, fields)
        : children;
    return /*#__PURE__*/ _react.default.cloneElement(
      containerNode,
      _objectSpread(
        _objectSpread({}, containerNode.props),
        {},
        {
          style: Object.assign({}, containerNode.props.style, {
            //display: container.visible === false ? 'none' : '',
          }),
        },
      ),
      fieldNode,
    );
  };

  var containerRender = function containerRender(ctx, fields) {
    var fieldsElems = [];
    fields.forEach(function(fieldConfig, index) {
      var fieldKey =
        fieldConfig.dataIndex ||
        fieldConfig.name ||
        ''.concat(getGroup, '-field-').concat(index);
      var fieldElem;

      if (fieldConfig.container || fieldConfig.itemSet) {
        fieldElem = /*#__PURE__*/ _react.default.createElement(
          FormGroup,
          _extends({}, fieldConfig, {
            key: fieldKey,
          }),
        );
      } else {
        fieldElem = fieldRender(
          ctx,
          _objectSpread(
            _objectSpread({}, fieldConfig),
            {},
            {
              fieldKey: fieldKey,
            },
          ),
        );
      }

      fieldsElems.push(fieldElem);
    });
    return fieldsElems;
  };

  var fieldRender = function fieldRender(ctx, _ref) {
    var dependency = _ref.dependency,
      fieldKey = _ref.fieldKey,
      colSpan = _ref.colSpan,
      restProps = _objectWithoutProperties(_ref, [
        'dependency',
        'fieldKey',
        'colSpan',
      ]);

    debugger;

    var itemSet = _objectSpread(
      {
        colSpan: colSpan,
      },
      restProps,
    );

    if (dependency) {
      var deps = Object.keys(dependency);

      for (var i = 0; i < deps.length; i++) {
        var type = deps[i] || null;

        var _ref2 = dependency[type] || {},
          _ref2$relates = _ref2.relates,
          relates = _ref2$relates === void 0 ? [] : _ref2$relates,
          _ref2$inputs = _ref2.inputs,
          inputs = _ref2$inputs === void 0 ? [] : _ref2$inputs,
          output = _ref2.output,
          defaultOutput = _ref2.defaultOutput;

        var values = relates.map(function(relatedFieldNameList) {
          return ctx.getFieldValue(relatedFieldNameList);
        });
        var isAllMatched = (0, _util.allMatch)(inputs, values);

        if (type === 'visible') {
          itemSet.visible = isAllMatched ? output : false;
          break;
        }

        if (type === 'disabled') {
          itemSet.disabled = isAllMatched ? output : defaultOutput;
          break;
        }
      }
    }

    return /*#__PURE__*/ _react.default.createElement(
      _col.default,
      {
        span: colSpan,
        key: fieldKey,
        style: {
          display: itemSet.visible === false ? 'none' : '',
        },
      },
      /*#__PURE__*/ _react.default.createElement(
        _GFormItem.default,
        _extends(
          {
            itemSet: itemSet,
          },
          formItemProps,
        ),
      ),
    );
  };

  var renderChildren = function renderChildren(props) {
    var form = props.form,
      fields = props.fields,
      container = props.container;
    var children =
      fields || container ? groupRender(form, props) : props.children;
    return /*#__PURE__*/ _react.default.createElement(
      _row.default,
      {
        gutter: gutter,
      },
      children,
    );
  };

  return renderChildren(props);
};

var _default = FormGroup;
exports.default = _default;
