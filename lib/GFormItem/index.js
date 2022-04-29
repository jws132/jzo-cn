'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/select/style');

var _select = _interopRequireDefault(require('antd/es/select'));

require('antd/es/form/style');

var _form = _interopRequireDefault(require('antd/es/form'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _util = require('./util');

var _InputNum = _interopRequireDefault(require('./InputNum'));

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

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) ||
        arr['@@iterator'];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

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

var FormItem = _form.default.Item;
var OptGroup = _select.default.OptGroup;

function GFormItem(_ref) {
  var itemSet = _ref.itemSet,
    labelBasicSpan = _ref.labelBasicSpan,
    layout = _ref.layout;
  var _itemSet$type = itemSet.type,
    type = _itemSet$type === void 0 ? 'input' : _itemSet$type,
    title = itemSet.title,
    label = itemSet.label,
    dataIndex = itemSet.dataIndex,
    name = itemSet.name,
    _itemSet$hideInForm = itemSet.hideInForm,
    hideInForm = _itemSet$hideInForm === void 0 ? false : _itemSet$hideInForm,
    _itemSet$validOptions = itemSet.validOptions,
    validOptions =
      _itemSet$validOptions === void 0 ? {} : _itemSet$validOptions,
    _itemSet$optionsData = itemSet.optionsData,
    optionsData = _itemSet$optionsData === void 0 ? [] : _itemSet$optionsData,
    _itemSet$models = itemSet.models,
    models = _itemSet$models === void 0 ? [] : _itemSet$models,
    renderChild = itemSet.renderChild,
    _itemSet$valueEnum = itemSet.valueEnum,
    valueEnum = _itemSet$valueEnum === void 0 ? {} : _itemSet$valueEnum,
    _itemSet$disabled = itemSet.disabled,
    disabled = _itemSet$disabled === void 0 ? false : _itemSet$disabled,
    _itemSet$props = itemSet.props,
    props = _itemSet$props === void 0 ? {} : _itemSet$props,
    _itemSet$itemProps = itemSet.itemProps,
    itemProps = _itemSet$itemProps === void 0 ? {} : _itemSet$itemProps,
    column = itemSet.column;

  if (hideInForm) {
    return null;
  }

  var newOptionsData = (0, _react.useMemo)(
    function() {
      if (JSON.stringify(valueEnum) !== '{}') {
        return (0, _util.generateOption)(valueEnum);
      }

      return optionsData;
    },
    [optionsData, valueEnum],
  ); // 组件类型

  var componentType = type.toLowerCase();
  (0, _react.useEffect)(function() {
    // 校验配置，全局控制输入不能有emoji
    if (['input', 'password', 'textarea'].includes(componentType)) {
      var _validOptions$rules = validOptions.rules,
        rules = _validOptions$rules === void 0 ? [] : _validOptions$rules;
      var newRules = [];
      var commonRules = [
        function() {
          return {
            validator: _util.validEmoji,
          };
        },
      ];
      var whitespaceRules = {
        whitespace: true,
      }; // 是否有必填校验

      var hasEmptyRule = rules.some(function(element) {
        return element.required;
      });
      hasEmptyRule && newRules.push(whitespaceRules);
      validOptions.rules = [].concat(rules || [], newRules);
    }
  }, []);

  var newValidOptions = _objectSpread(
    {
      validateFirst: true,
    },
    validOptions,
  );

  var children = null;

  if (componentType === 'custom' && renderChild) {
    // 自定义组件
    children =
      _typeof(renderChild) === 'object'
        ? /*#__PURE__*/ _react.default.cloneElement(
            renderChild,
            _objectSpread({}, props),
          )
        : renderChild;
  } else {
    var _ref2 = _util.mapTypeToComponent[componentType] || {},
      WrappedComponent = _ref2.WrappedComponent,
      _ref2$defaultProps = _ref2.defaultProps,
      defaultProps = _ref2$defaultProps === void 0 ? {} : _ref2$defaultProps,
      childStyle = _ref2.childStyle,
      SubComponent = _ref2.SubComponent; // 是否有子组件

    var isOptionFields = [
      'select',
      'selectgroup',
      'radiogroup',
      'radiogroupbutton',
      'checkboxgroup',
    ].includes(componentType);

    var _models = _slicedToArray(models, 3),
      _models$ = _models[0],
      valueKey = _models$ === void 0 ? 'value' : _models$,
      _models$2 = _models[1],
      labelKey = _models$2 === void 0 ? 'label' : _models$2,
      uniqueKey = _models[2];

    var newProps = _objectSpread(
      _objectSpread({}, defaultProps),
      {},
      {
        disabled: disabled,
      },
      props,
    );

    if (WrappedComponent) {
      children = /*#__PURE__*/ _react.default.createElement(
        WrappedComponent,
        newProps,
        isOptionFields
          ? newOptionsData.map(function(v) {
              if (componentType === 'selectgroup') {
                var _v$children;

                return /*#__PURE__*/ _react.default.createElement(
                  OptGroup,
                  {
                    label: v[labelKey],
                    key: v[uniqueKey] || v[valueKey] || v[labelKey],
                  },
                  (_v$children = v.children) === null || _v$children === void 0
                    ? void 0
                    : _v$children.map(function(child) {
                        return /*#__PURE__*/ _react.default.createElement(
                          SubComponent,
                          {
                            key: String(child[uniqueKey] || child[valueKey]),
                            value: child[valueKey],
                            style: childStyle,
                            disabled: child.disabled,
                          },
                          child[labelKey],
                        );
                      }),
                );
              }

              return /*#__PURE__*/ _react.default.createElement(
                SubComponent,
                {
                  key: String(v[valueKey]),
                  value: v[valueKey],
                  style: childStyle,
                  disabled: v.disabled,
                },
                v[labelKey],
              );
            })
          : null,
      );
    }
  }

  return /*#__PURE__*/ _react.default.createElement(
    FormItem,
    _extends(
      {
        name: dataIndex || name,
        label: title || label,
      },
      newValidOptions,
      itemProps,
    ),
    children,
  );
}

GFormItem.propTypes = {
  itemSet: _propTypes.default.object,
  // 表单字段配置项
  gutter: _propTypes.default.oneOfType([
    _propTypes.default.object,
    _propTypes.default.number,
  ]),
  // 输入项之间的间隔
  labelBasicSpan: _propTypes.default.number,
  // label占比
  layout: _propTypes.default.string, // label占比
};
GFormItem.defaultProps = {
  itemSet: {},
  gutter: 0,
  labelBasicSpan: 8,
  layout: 'horizontal',
};
GFormItem.InputNumer = _InputNum.default;
var _default = GFormItem;
exports.default = _default;
