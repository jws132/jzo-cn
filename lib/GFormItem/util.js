'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.generateOption = exports.mapTypeToComponent = exports.validEmoji = void 0;

require('antd/es/tree-select/style');

var _treeSelect = _interopRequireDefault(require('antd/es/tree-select'));

require('antd/es/switch/style');

var _switch = _interopRequireDefault(require('antd/es/switch'));

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

var _zh_CN = _interopRequireDefault(
  require('antd/lib/date-picker/locale/zh_CN'),
);

var _moment = _interopRequireDefault(require('moment'));

var _NumRange = _interopRequireDefault(require('../Field/NumRange'));

var _RoleTree = _interopRequireDefault(require('./RoleTree'));

var _InputNum = _interopRequireDefault(require('./InputNum'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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

_moment.default.locale('zh-cn');

var TimePickerRange = _timePicker.default.RangePicker;
var Option = _select.default.Option;
var TextArea = _input.default.TextArea,
  Password = _input.default.Password;
var RadioGroup = _radio.default.Group;
var RadioButton = _radio.default.Button;
var CheckboxGroup = _checkbox.default.Group;
var RangePicker = _datePicker.default.RangePicker,
  MonthPicker = _datePicker.default.MonthPicker,
  YearPicker = _datePicker.default.YearPicker; // 输入项表情限制

function isEmojiCharacter(substring) {
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
} // 目前支持的form表单类型

var mapTypeToComponent = {
  input: {
    WrappedComponent: _input.default,
    defaultProps: {
      allowClear: true,
      placeholder: '请输入',
    },
  },
  inputnumber: {
    WrappedComponent: _InputNum.default,
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
  numrange: {
    WrappedComponent: _NumRange.default,
  },
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
  roletree: {
    WrappedComponent: _RoleTree.default,
  },
};
exports.mapTypeToComponent = mapTypeToComponent;

var validEmoji = function validEmoji(rule, value) {
  if (value && isEmojiCharacter(value)) return Promise.reject('禁止输入表情');
  return Promise.resolve();
};
/***
 * 枚举转换
 */

exports.validEmoji = validEmoji;

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

exports.generateOption = generateOption;
