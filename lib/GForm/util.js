'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.allMatch = allMatch;
exports.equal = equal;
exports.formateDate = formateDate;
exports.normalizeDate = normalizeDate;
exports.toCDB = toCDB;

var _moment = _interopRequireDefault(require('moment'));

var _lodash = require('lodash');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
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

_moment.default.locale('zh-cn');
/**
 *
 * @inputs [1,2]
 * @value 1
 * @return true
 */

function equal(inputs, value) {
  if (!value) {
    return false;
  }

  if (inputs === '*') {
    return true;
  }

  for (var i = 0; i <= inputs.length; i++) {
    var input = inputs[i];

    if ((0, _lodash.isEqual)(input, value)) {
      return true;
    }
  }

  return false;
}
/**
 * @rules: [[1,2], [2,3]]
 * @values: [1,4]
 * @result: false
 */

function allMatch(inputs, values) {
  return !inputs.some(function(input, index) {
    return !equal(input, values[index]);
  });
} // 全角转化为半角

function toCDB(str) {
  var tmp = '';

  for (var i = 0; i < str.length; i += 1) {
    if (str.charCodeAt(i) === 12288) {
      tmp += String.fromCharCode(str.charCodeAt(i) - 12256);
    } else if (str.charCodeAt(i) > 65280 && str.charCodeAt(i) < 65375) {
      tmp += String.fromCharCode(str.charCodeAt(i) - 65248);
    } else {
      tmp += String.fromCharCode(str.charCodeAt(i));
    }
  }

  return tmp;
} // 转化日期格式

function formateDate(value) {
  var formatter =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : 'YYYY-MM-DD';

  if (!value) {
    return;
  }

  if (value instanceof Array) {
    var _value = _slicedToArray(value, 2),
      start = _value[0],
      end = _value[1];

    start = start ? start.format(formatter) : start;
    end = end ? end.format(formatter) : end;
    return [start, end];
  }

  return value.format(formatter);
} // 字符串转moment

function normalizeDate(value) {
  var formatter =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : 'YYYY-MM-DD';
  if (!value) return undefined;

  if (value instanceof Array) {
    var _value2 = _slicedToArray(value, 2),
      start = _value2[0],
      end = _value2[1];

    if (start && typeof start === 'string') {
      start = (0, _moment.default)(start, formatter);
    }

    if (end && typeof end === 'string') {
      end = (0, _moment.default)(end, formatter);
    }

    return [start, end];
  }

  if (typeof value === 'string') {
    return (0, _moment.default)(value, formatter);
  }

  return value;
}
