'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _MoneyInput = _interopRequireDefault(require('./MoneyInput'));

var _MoneyShow = _interopRequireDefault(require('./MoneyShow'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function set() {
  var decimal =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var MoneyInput = (0, _MoneyInput.default)(decimal);
  var MoneyShow = (0, _MoneyShow.default)(decimal);
  return {
    MoneyInput: MoneyInput,
    MoneyShow: MoneyShow,
  };
}

var _default = {
  set: set,
};
exports.default = _default;
