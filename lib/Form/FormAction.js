'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

require('antd/es/col/style');

var _col = _interopRequireDefault(require('antd/es/col'));

require('antd/es/form/style');

var _form = _interopRequireDefault(require('antd/es/form'));

require('antd/es/space/style');

var _space = _interopRequireDefault(require('antd/es/space'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _aCn = require('@jzo/a-cn');

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
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

var FormAction = function FormAction(props) {
  var itemLayout = props.itemLayout,
    actionsRender = props.actionsRender,
    formInstance = props.formInstance,
    actionsPosition = props.actionsPosition,
    style = props.style,
    children = props.children;
  var span = itemLayout.span,
    gutter = itemLayout.gutter,
    layout = itemLayout.layout;

  var actionRender = /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      style:
        layout !== 'vertical'
          ? style
          : Object.assign(_objectSpread({}, style), {
              marginTop: 30,
            }),
    },
    /*#__PURE__*/ _react.default.createElement(
      _space.default,
      null,
      actionsRender.map(function(_ref) {
        var type = _ref.type,
          hide = _ref.hide,
          name = _ref.name,
          disabled = _ref.disabled,
          confirmText = _ref.confirmText,
          loading = _ref.loading,
          _onOk = _ref.onOk,
          children = _ref.children,
          rest = _objectWithoutProperties(_ref, [
            'type',
            'hide',
            'name',
            'disabled',
            'confirmText',
            'loading',
            'onOk',
            'children',
          ]);

        var btnProps = _objectSpread(
          {
            type: type,
            hide: hide,
            name: name,
            disabled: disabled,
            confirmText: confirmText,
            loading: loading,
            children: children,
            onOk: function onOk(done) {
              _onOk === null || _onOk === void 0
                ? void 0
                : _onOk(formInstance, done);
            },
          },
          rest,
        );

        return /*#__PURE__*/ _react.default.createElement(
          _aCn.AuthBtn,
          btnProps,
          ' ',
          name || children,
        );
      }),
    ),
  );

  if (actionsPosition === 'default' && layout !== 'inline') {
    var _itemLayout$labelCol;

    var wrapperCol =
      layout === 'horizontal'
        ? Object.assign(
            {
              offset:
                (_itemLayout$labelCol = itemLayout.labelCol) === null ||
                _itemLayout$labelCol === void 0
                  ? void 0
                  : _itemLayout$labelCol.span,
            },
            itemLayout.wrapperCol,
          )
        : itemLayout.wrapperCol;
    return /*#__PURE__*/ _react.default.createElement(
      _col.default,
      {
        span: span,
      },
      /*#__PURE__*/ _react.default.createElement(
        _form.default.Item,
        {
          wrapperCol: wrapperCol,
        },
        actionRender,
      ),
    );
  } else {
    return actionRender;
  }
};

FormAction.propTypes = {
  /**
   * 布局对象
   */
  itemLayout: _propTypes.default.object,

  /**
   * 提交回调
   */
  actionsRender: _propTypes.default.array,
  actionsPosition: _propTypes.default.string,
};
var _default = FormAction;
exports.default = _default;
