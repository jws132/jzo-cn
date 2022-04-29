'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.allMatch = allMatch;
exports.defaultValidateMessages = exports.dateComponentType = void 0;
exports.equal = equal;
exports.generateOption = exports.formateDate = exports.formatValues = exports.formItemLayout = void 0;
exports.getItemLayout = getItemLayout;
exports.mapTypeToComponent = exports.isSubclass = exports.isEmojiCharacter = exports.getItemSpan = void 0;
exports.needWrapCols = needWrapCols;
exports.toCDB = exports.replaceFirstUper = void 0;

require('antd/es/tree-select/style');

var _treeSelect = _interopRequireDefault(require('antd/es/tree-select'));

require('antd/es/switch/style');

var _switch = _interopRequireDefault(require('antd/es/switch'));

require('antd/es/input-number/style');

var _inputNumber = _interopRequireDefault(require('antd/es/input-number'));

require('antd/es/date-picker/style');

var _datePicker = _interopRequireDefault(require('antd/es/date-picker'));

require('antd/es/checkbox/style');

var _checkbox = _interopRequireDefault(require('antd/es/checkbox'));

require('antd/es/radio/style');

var _radio = _interopRequireDefault(require('antd/es/radio'));

require('antd/es/input/style');

var _input = _interopRequireDefault(require('antd/es/input'));

require('antd/es/select/style');

var _select = _interopRequireDefault(require('antd/es/select'));

require('antd/es/time-picker/style');

var _timePicker = _interopRequireDefault(require('antd/es/time-picker'));

var _lodash = require('lodash');

var _zh_CN = _interopRequireDefault(
  require('antd/lib/date-picker/locale/zh_CN'),
);

var _moment = _interopRequireDefault(require('moment'));

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

var TimePickerRange = _timePicker.default.RangePicker;
var Option = _select.default.Option;
var TextArea = _input.default.TextArea,
  Password = _input.default.Password;
var RadioGroup = _radio.default.Group;
var RadioButton = _radio.default.Button;
var CheckboxGroup = _checkbox.default.Group;
var RangePicker = _datePicker.default.RangePicker,
  MonthPicker = _datePicker.default.MonthPicker,
  YearPicker = _datePicker.default.YearPicker; // 目前支持的form表单类型

var mapTypeToComponent = {
  input: {
    WrappedComponent: _input.default,
    defaultProps: {
      allowClear: true,
      placeholder: '请输入',
    },
  },
  inputnumber: {
    WrappedComponent: _inputNumber.default,
    defaultProps: {
      precision: 0,
      min: 0,
      style: {
        width: '100%',
      },
      placeholder: '请输入',
    },
  },
  password: {
    WrappedComponent: Password,
    defaultProps: {
      placeholder: '请输入',
      autoComplete: 'new-password',
    },
  },
  // numrange: {
  //   WrappedComponent: NumRange,
  // },
  // ossupload: {
  //   WrappedComponent: OssUpload,
  // },
  select: {
    WrappedComponent: _select.default,
    defaultProps: {
      placeholder: '请选择',
      allowClear: true,
    },
    SubComponent: Option,
  },
  selectgroup: {
    WrappedComponent: _select.default,
    defaultProps: {
      placeholder: '请选择',
      allowClear: true,
    },
    SubComponent: Option,
  },
  // addr: {
  //   WrappedComponent: Address,
  // },
  timepickerrange: {
    WrappedComponent: TimePickerRange,
    defaultProps: {
      locale: _zh_CN.default,
      style: {
        width: '100%',
      },
      format: 'HH:mm',
    },
  },
  datepicker: {
    WrappedComponent: _datePicker.default,
    defaultProps: {
      placeholder: '请选择',
      locale: _zh_CN.default,
      style: {
        width: '100%',
      },
    },
  },
  monthpicker: {
    WrappedComponent: MonthPicker,
    defaultProps: {
      placeholder: '请选择',
      locale: _zh_CN.default,
      style: {
        width: '100%',
      },
    },
  },
  rangepicker: {
    WrappedComponent: RangePicker,
    defaultProps: {
      locale: _zh_CN.default,
      ranges: {
        今天: [(0, _moment.default)(), (0, _moment.default)()],
        最近一周: [
          (0, _moment.default)().subtract('days', 6),
          (0, _moment.default)(),
        ],
        本月: [(0, _moment.default)().startOf('month'), (0, _moment.default)()],
        '3个月': [
          (0, _moment.default)(),
          (0, _moment.default)().add(0.25, 'year'),
        ],
        '6个月': [
          (0, _moment.default)(),
          (0, _moment.default)().add(0.5, 'year'),
        ],
        '1年': [(0, _moment.default)(), (0, _moment.default)().add(1, 'year')],
        无限期: [
          (0, _moment.default)(),
          (0, _moment.default)('20991231', 'YYYYMMDD'),
        ],
      },
      style: {
        width: '100%',
      },
    },
  },
  timepicker: {
    WrappedComponent: _timePicker.default,
    defaultProps: {
      locale: _zh_CN.default,
      format: 'HH:mm',
      style: {
        width: '100%',
      },
    },
  },
  checkbox: {
    WrappedComponent: _checkbox.default,
    defaultProps: {
      placeholder: '请选择',
    },
  },
  checkboxgroup: {
    WrappedComponent: CheckboxGroup,
    SubComponent: _checkbox.default,
    childStyle: {
      marginLeft: '10px',
    },
    defaultProps: {
      placeholder: '请选择',
    },
  },
  textarea: {
    WrappedComponent: TextArea,
    defaultProps: {
      placeholder: '请输入',
      maxLength: 128,
      autoSize: {
        minRows: 2,
        maxRows: 6,
      },
    },
  },
  radiogroup: {
    WrappedComponent: RadioGroup,
    SubComponent: _radio.default,
    childStyle: {
      marginLeft: '10px',
    },
    defaultProps: {
      placeholder: '请选择',
    },
  },
  radiogroupbutton: {
    WrappedComponent: RadioGroup,
    SubComponent: RadioButton,
    defaultProps: {
      placeholder: '请选择',
    },
  },
  switch: {
    WrappedComponent: _switch.default,
  },
  treeselect: {
    WrappedComponent: _treeSelect.default,
  },
  yearpicker: {
    WrappedComponent: YearPicker,
    defaultProps: {
      placeholder: '请选择',
      style: {
        width: '100%',
      },
    },
  },
};
/**
 * 首字母大写
 * @param {*} str
 */

exports.mapTypeToComponent = mapTypeToComponent;

var replaceFirstUper = function replaceFirstUper(str) {
  str = str.toLowerCase();
  return str.replace(/\b(\w)|\s(\w)/g, function(m) {
    return m.toUpperCase();
  });
};
/**
 * 判断是否又子类数据
 * @param {*} str
 */

exports.replaceFirstUper = replaceFirstUper;

var isSubclass = function isSubclass(arr) {
  var arrSub = ['checkboxGroup', 'select'];
  return arrSub.includes(arr);
}; // 表单通用格式

exports.isSubclass = isSubclass;
var formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 18,
    },
  },
};
exports.formItemLayout = formItemLayout;

function getItemLayout(_ref) {
  var _ref$itemLayout = _ref.itemLayout,
    itemLayout = _ref$itemLayout === void 0 ? {} : _ref$itemLayout,
    _ref$layout = _ref.layout,
    layout = _ref$layout === void 0 ? 'horizontal' : _ref$layout,
    matchedPonint = _ref.matchedPonint;
  var offset = itemLayout.offset,
    gutter = itemLayout.gutter,
    labelCol = itemLayout.labelCol,
    wrapperCol = itemLayout.wrapperCol;
  var finalSpan = getItemSpan(itemLayout, matchedPonint);
  var finalOffset = offset;
  var finalGutter = gutter;
  var finalWrapperCol;
  var finalLabelCol;

  if (layout === 'vertical' || layout === 'horizontal') {
    finalOffset = finalOffset || 0;
    finalGutter = finalGutter || 24; // 只有水平布局需要设置 wrapperCol 和 labelCol

    if (layout === 'horizontal') {
      finalLabelCol = labelCol || {
        span: 8,
      };
      finalWrapperCol = wrapperCol || {
        span: finalSpan === 24 ? 12 : 16,
      };
    }
  }

  return {
    wrapperCol: finalWrapperCol,
    labelCol: finalLabelCol,
    span: finalSpan,
    offset: finalOffset,
    gutter: finalGutter || 0,
  };
}

var getItemSpan = function getItemSpan(_ref2) {
  var _ref2$itemLayout = _ref2.itemLayout,
    itemLayout = _ref2$itemLayout === void 0 ? {} : _ref2$itemLayout,
    matchedPonint = _ref2.matchedPonint,
    _ref2$fieldItemLayout = _ref2.fieldItemLayout,
    fieldItemLayout =
      _ref2$fieldItemLayout === void 0 ? {} : _ref2$fieldItemLayout;

  if (fieldItemLayout && fieldItemLayout.span) {
    return (0, _lodash.isNumber)(fieldItemLayout.span)
      ? fieldItemLayout.span
      : fieldItemLayout.span[matchedPonint];
  }

  var _itemLayout$cols = itemLayout.cols,
    cols = _itemLayout$cols === void 0 ? 1 : _itemLayout$cols,
    span = itemLayout.span;
  var finalSpan;

  if (span) {
    finalSpan = (0, _lodash.isNumber)(span) ? span : span[matchedPonint];
  } else {
    var finalCols = (0, _lodash.isNumber)(cols) ? cols : cols[matchedPonint];
    finalSpan = 24 / finalCols;
  }

  return finalSpan;
};

exports.getItemSpan = getItemSpan;

function needWrapCols(span) {
  return span !== 24;
}
/***
 * 枚举转换
 */

var generateOption = function generateOption(enums) {
  if (!enums || _typeof(enums) !== 'object') {
    console.error('enums is not an object');
    return [];
  }

  return Array.isArray(enums)
    ? enums
    : Object.keys(enums).map(function(value) {
        return {
          value: /^\d+$/.test(value) ? Number(value) : value,
          label: enums[value],
        };
      });
};
/**
 *
 * @inputs [1,2]
 * @value 1
 * @return true
 */

exports.generateOption = generateOption;

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
}

var formatValues = function formatValues(fieldsValue) {
  Object.keys(fieldsValue).forEach(function(key) {
    var value = fieldsValue[key];

    if (typeof value === 'string') {
      value = value.replace(/(^\s*)|(\s*$)/g, ''); // 去空格

      fieldsValue[key] = toCDB(value); // 统一转半角
    }
  });
  return fieldsValue;
}; // 全角转化为半角

exports.formatValues = formatValues;

var toCDB = function toCDB(str) {
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
}; // 输入项表情限制

exports.toCDB = toCDB;

var isEmojiCharacter = function isEmojiCharacter(substring) {
  var flag = false;

  for (var i = 0; i < substring.length; i += 1) {
    var hs = substring.charCodeAt(i);

    if (hs >= 0xd800 && hs <= 0xdbff) {
      if (substring.length > 1) {
        var ls = substring.charCodeAt(i + 1);
        var uc = (hs - 0xd800) * 0x400 + (ls - 0xdc00) + 0x10000;

        if (uc >= 0x1d000 && uc <= 0x1f77f) {
          flag = true;
        }
      }
    } else if (substring.length > 1) {
      var _ls = substring.charCodeAt(i + 1);

      if (_ls === 0x20e3) {
        flag = true;
      }
    } else {
      if (hs >= 0x2100 && hs <= 0x27ff) {
        flag = true;
      }

      if (hs >= 0x2b05 && hs <= 0x2b07) {
        flag = true;
      }

      if (hs >= 0x2934 && hs <= 0x2935) {
        flag = true;
      }

      if (hs >= 0x3297 && hs <= 0x3299) {
        flag = true;
      }

      if (
        hs === 0xa9 ||
        hs === 0xae ||
        hs === 0x303d ||
        hs === 0x3030 ||
        hs === 0x2b55 ||
        hs === 0x2b1c ||
        hs === 0x2b1b ||
        hs === 0x2b50
      ) {
        flag = true;
      }
    }
  }

  return flag;
}; // 转化日期格式

exports.isEmojiCharacter = isEmojiCharacter;

var formateDate = function formateDate(value) {
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
};

exports.formateDate = formateDate;
var dateComponentType = {
  monthpicker: 'YYYY-MM',
  rangepicker: 'YYYY-MM-DD',
  datepicker: 'YYYY-MM-DD',
  yearpicker: 'YYYY',
  timepickerrange: 'HH:mm',
  timepicker: 'HH:mm',
};
exports.dateComponentType = dateComponentType;
var defaultValidateMessages = {
  required: '不能为空',
  whitespace: '不能全为空格',
  string: {
    len: '长度为${len}个字符',
    min: '至少输入${min}个字符',
    max: '不超过 ${max} 个字符',
    range: '长度在 ${min} - ${max} 个字符之间',
  },
  number: {
    len: '必须为 ${len}',
    min: '不能小于 ${min}',
    max: '不能大于 ${max}',
    range: '范围在 ${min} - ${max}之间',
  },
  array: {
    len: '数量为 ${len} ',
    min: '数量不能小于 ${min}',
    max: '数量不能大于 ${max}',
    range: '范围在 ${min} - ${max}之间',
  },
  pattern: {
    mismatch: '格式错误',
  },
};
exports.defaultValidateMessages = defaultValidateMessages;
