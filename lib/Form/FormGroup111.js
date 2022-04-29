'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function(obj) {
            return typeof obj;
          }
        : function(obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}

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

var _react = _interopRequireWildcard(require('react'));

var _lodash = require('lodash');

var _index = require('./utils/index');

var _GFormItem = _interopRequireDefault(require('../GFormItem'));

var _FormAction = _interopRequireDefault(require('./FormAction'));

var _FormContext = _interopRequireDefault(require('./utils/FormContext'));

var _excluded = ['name', 'dependency', 'fieldKey'];

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(
    nodeInterop,
  ) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

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

function _readOnlyError(name) {
  throw new TypeError('"' + name + '" is read-only');
}

var FormGroup = function FormGroup(props) {
  var itemLayout = props.itemLayout,
    layout = props.layout,
    formInstance = props.formInstance,
    actionsPosition = props.actionsPosition;
  var span = itemLayout.span,
    gutter = itemLayout.gutter,
    offset = itemLayout.offset;
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
    var fieldNode = fields ? containerRender(ctx, fields) : children;
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
    var itemProps = {
      itemLayout: itemLayout,
      layout: layout,
      formInstance: formInstance,
    };
    fields.forEach(function(fieldConfig, index) {
      var fieldKey =
        fieldConfig.dataIndex ||
        fieldConfig.name ||
        ''.concat(getGroup, '-field-').concat(index);
      var fieldElem;

      if (fieldConfig.container || fieldConfig.fields) {
        fieldElem = /*#__PURE__*/ _react.default.createElement(
          FormGroup,
          _extends(
            {},
            fieldConfig,
            {
              key: fieldKey,
            },
            itemProps,
          ),
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
    var name = _ref.name,
      dependency = _ref.dependency,
      fieldKey = _ref.fieldKey,
      restProps = _objectWithoutProperties(_ref, _excluded);

    var el = _objectSpread(
      {
        name: name,
        dependency: dependency,
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
        var isAllMatched = (0, _index.allMatch)(inputs, values);

        if (type === 'visible') {
          el.visible = isAllMatched ? output : false;
          break;
        }

        if (type === 'disabled') {
          el.disabled = isAllMatched ? output : defaultOutput;
          break;
        }
      }
    }

    if (layout === 'inline') {
      return /*#__PURE__*/ _react.default.createElement(_GFormItem.default, {
        itemSet: el,
      });
    }

    actionsPosition;
    return /*#__PURE__*/ _react.default.createElement(
      _col.default,
      {
        span: span,
        offset: offset,
        key: fieldKey,
        style: {
          display: el.visible === false ? 'none' : '',
        },
      },
      /*#__PURE__*/ _react.default.createElement(_GFormItem.default, {
        itemSet: el,
      }),
    );
  };

  var renderChildren = function renderChildren(ctx, props, conf) {
    debugger;
    var fields = props.fields,
      container = props.container,
      actionsRender = props.actionsRender;
    var itemLayout = conf.itemLayout;
    var span = itemLayout.span,
      gutter = itemLayout.gutter;
    var children =
      fields || container ? groupRender(ctx, props) : props.children;
    debugger;
    var actionsElem;

    if (actionsRender) {
      actionsElem = /*#__PURE__*/ _react.default.createElement(
        _FormAction.default,
        {
          key: 'form-action',
          itemLayout: itemLayout,
          formInstance: formInstance,
          actionsRender: actionsRender,
          actionsPosition: actionsPosition,
        },
      );
    }

    var isNeedWrapCols = (0, _index.needWrapCols)(span);

    if (!isNeedWrapCols) {
      if (actionsElem) {
        return /*#__PURE__*/ _react.default.createElement(
          _react.default.Fragment,
          null,
          children,
          actionsElem,
        );
      } else {
        return children;
      }
    }

    var finalChildren = [];
    var groupFieldsElem = [];
    var groupRowIndex = 0;

    _react.default.Children.forEach(children, function(child) {
      var childElem;

      if (child.type === FormGroup) {
        if (groupFieldsElem.length) {
          var _rowKey = ''.concat(getGroup, '-row-').concat(groupRowIndex);

          childElem = /*#__PURE__*/ _react.default.createElement(
            _row.default,
            {
              gutter: gutter,
              key: _rowKey,
            },
            groupFieldsElem,
          );
          groupFieldsElem = [];
          groupRowIndex += 1;
        }

        finalChildren.push(childElem);
        finalChildren.push(child);
      } else if (child.type === _FormAction.default) {
        actionsElem = child;
        child.props.actionsPosition, _readOnlyError('actionsPosition');
      } else {
        groupFieldsElem.push(child);
      }
    });

    var rowKey = ''.concat(getGroup, '-row-').concat(groupRowIndex);
    var isDefaultPosition = !actionsPosition || actionsPosition === 'default';

    if (!actionsElem) {
      finalChildren.push(
        /*#__PURE__*/ _react.default.createElement(
          _row.default,
          {
            gutter: gutter,
            key: rowKey,
          },
          groupFieldsElem,
        ),
      );
    } else {
      if (isDefaultPosition) {
        finalChildren.push(
          /*#__PURE__*/ _react.default.createElement(
            _row.default,
            {
              gutter: gutter,
              key: rowKey,
            },
            groupFieldsElem,
            actionsElem,
          ),
        );
      } else {
        finalChildren.push(
          /*#__PURE__*/ _react.default.createElement(
            _row.default,
            {
              gutter: gutter,
              key: rowKey,
            },
            groupFieldsElem,
          ),
        );
        finalChildren.push(actionsElem);
      }
    }

    return finalChildren;
  };

  var fieldGroupContext = {
    formInstance: formInstance,
    layout: layout,
    itemLayout: itemLayout,
  };
  return renderChildren(formInstance, props, fieldGroupContext);
};

var _default = FormGroup;
exports.default = _default;
