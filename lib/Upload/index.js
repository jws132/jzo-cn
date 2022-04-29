'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _FileUpload = _interopRequireDefault(require('./FileUpload'));

var _NRTUpload = _interopRequireDefault(require('./NRTUpload'));

var _excluded = ['isNRT'];

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

var Upload = function Upload(_ref) {
  var isNRT = _ref.isNRT,
    rest = _objectWithoutProperties(_ref, _excluded);

  return isNRT
    ? /*#__PURE__*/ _react.default.createElement(_NRTUpload.default, rest)
    : /*#__PURE__*/ _react.default.createElement(_FileUpload.default, rest);
};

var _default = Upload;
exports.default = _default;
