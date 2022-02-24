import {
  Select,
  DatePicker,
  Input,
  Checkbox,
  Radio,
  Switch,
  TreeSelect,
  TimePicker,
  InputNumber,
} from 'antd';
import { isNumber, isEqual, isUndefined } from 'lodash';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import moment from 'moment';
const { RangePicker: TimePickerRange } = TimePicker;
const { Option } = Select;
const { TextArea, Password } = Input;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const CheckboxGroup = Checkbox.Group;
const { RangePicker, MonthPicker, YearPicker } = DatePicker;

// 目前支持的form表单类型
export const mapTypeToComponent = {
  input: {
    WrappedComponent: Input,
    defaultProps: {
      allowClear: true,
      placeholder: '请输入',
    },
  },
  inputnumber: {
    WrappedComponent: InputNumber,
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
    WrappedComponent: Select,
    defaultProps: {
      placeholder: '请选择',
      allowClear: true,
    },
    SubComponent: Option,
  },
  selectgroup: {
    WrappedComponent: Select,
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
      locale,
      style: {
        width: '100%',
      },
      format: 'HH:mm',
    },
  },
  datepicker: {
    WrappedComponent: DatePicker,
    defaultProps: {
      placeholder: '请选择',
      locale,
      style: {
        width: '100%',
      },
    },
  },
  monthpicker: {
    WrappedComponent: MonthPicker,
    defaultProps: {
      placeholder: '请选择',
      locale,
      style: {
        width: '100%',
      },
    },
  },
  rangepicker: {
    WrappedComponent: RangePicker,
    defaultProps: {
      locale,
      ranges: {
        今天: [moment(), moment()],
        最近一周: [moment().subtract('days', 6), moment()],
        本月: [moment().startOf('month'), moment()],
        '3个月': [moment(), moment().add(0.25, 'year')],
        '6个月': [moment(), moment().add(0.5, 'year')],
        '1年': [moment(), moment().add(1, 'year')],
        无限期: [moment(), moment('20991231', 'YYYYMMDD')],
      },
      style: {
        width: '100%',
      },
    },
  },
  timepicker: {
    WrappedComponent: TimePicker,
    defaultProps: {
      locale,
      format: 'HH:mm',
      style: {
        width: '100%',
      },
    },
  },
  checkbox: {
    WrappedComponent: Checkbox,
    defaultProps: {
      placeholder: '请选择',
    },
  },
  checkboxgroup: {
    WrappedComponent: CheckboxGroup,
    SubComponent: Checkbox,
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
      autoSize: { minRows: 2, maxRows: 6 },
    },
  },
  radiogroup: {
    WrappedComponent: RadioGroup,
    SubComponent: Radio,
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
    WrappedComponent: Switch,
  },
  treeselect: {
    WrappedComponent: TreeSelect,
  },
  yearpicker: {
    WrappedComponent: YearPicker,
    defaultProps: {
      placeholder: '请选择',
      style: { width: '100%' },
    },
  },
};

/**
 * 首字母大写
 * @param {*} str
 */
export const replaceFirstUper = str => {
  str = str.toLowerCase();
  return str.replace(/\b(\w)|\s(\w)/g, function(m) {
    return m.toUpperCase();
  });
};

/**
 * 判断是否又子类数据
 * @param {*} str
 */
export const isSubclass = arr => {
  const arrSub = ['checkboxGroup', 'select'];
  return arrSub.includes(arr);
};

// 表单通用格式
export const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
};

export function getItemLayout({
  itemLayout = {},
  layout = 'horizontal',
  matchedPonint,
}) {
  const { offset, gutter, labelCol, wrapperCol } = itemLayout;
  const finalSpan = getItemSpan(itemLayout, matchedPonint);
  let finalOffset = offset;
  let finalGutter = gutter;

  let finalWrapperCol;
  let finalLabelCol;

  if (layout === 'vertical' || layout === 'horizontal') {
    finalOffset = finalOffset || 0;
    finalGutter = finalGutter || 24;

    // 只有水平布局需要设置 wrapperCol 和 labelCol
    if (layout === 'horizontal') {
      finalLabelCol = labelCol || { span: 8 };

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

export const getItemSpan = ({
  itemLayout = {},
  matchedPonint,
  fieldItemLayout = {},
}) => {
  if (fieldItemLayout && fieldItemLayout.span) {
    return isNumber(fieldItemLayout.span)
      ? fieldItemLayout.span
      : fieldItemLayout.span[matchedPonint];
  }

  const { cols = 1, span } = itemLayout;
  let finalSpan;

  if (span) {
    finalSpan = isNumber(span) ? span : span[matchedPonint];
  } else {
    const finalCols = isNumber(cols) ? cols : cols[matchedPonint];
    finalSpan = 24 / finalCols;
  }

  return finalSpan;
};

export function needWrapCols(span) {
  return span !== 24;
}

/***
 * 枚举转换
 */
export const generateOption = enums => {
  if (!enums || typeof enums !== 'object') {
    console.error('enums is not an object');
    return [];
  }
  return Array.isArray(enums)
    ? enums
    : Object.keys(enums).map(value => ({
        value: /^\d+$/.test(value) ? Number(value) : value,
        label: enums[value],
      }));
};

/**
 *
 * @inputs [1,2]
 * @value 1
 * @return true
 */
export function equal(inputs, value) {
  if (!value) {
    return false;
  }
  if (inputs === '*') {
    return true;
  }
  for (let i = 0; i <= inputs.length; i++) {
    const input = inputs[i];
    if (isEqual(input, value)) {
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
export function allMatch(inputs, values) {
  return !inputs.some((input, index) => !equal(input, values[index]));
}

export const formatValues = fieldsValue => {
  Object.keys(fieldsValue).forEach(function(key) {
    var value = fieldsValue[key];
    if (typeof value === 'string') {
      value = value.replace(/(^\s*)|(\s*$)/g, ''); // 去空格
      fieldsValue[key] = toCDB(value); // 统一转半角
    }
  });
  return fieldsValue;
};

// 全角转化为半角
export const toCDB = str => {
  let tmp = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str.charCodeAt(i) === 12288) {
      tmp += String.fromCharCode(str.charCodeAt(i) - 12256);
    } else if (str.charCodeAt(i) > 65280 && str.charCodeAt(i) < 65375) {
      tmp += String.fromCharCode(str.charCodeAt(i) - 65248);
    } else {
      tmp += String.fromCharCode(str.charCodeAt(i));
    }
  }
  return tmp;
};

// 输入项表情限制
export const isEmojiCharacter = substring => {
  let flag = false;
  for (let i = 0; i < substring.length; i += 1) {
    const hs = substring.charCodeAt(i);
    if (hs >= 0xd800 && hs <= 0xdbff) {
      if (substring.length > 1) {
        const ls = substring.charCodeAt(i + 1);
        const uc = (hs - 0xd800) * 0x400 + (ls - 0xdc00) + 0x10000;
        if (uc >= 0x1d000 && uc <= 0x1f77f) {
          flag = true;
        }
      }
    } else if (substring.length > 1) {
      const ls = substring.charCodeAt(i + 1);
      if (ls === 0x20e3) {
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
};

// 转化日期格式
export const formateDate = (value, formatter = 'YYYY-MM-DD') => {
  if (!value) {
    return;
  }
  if (value instanceof Array) {
    let [start, end] = value;
    start = start ? start.format(formatter) : start;
    end = end ? end.format(formatter) : end;
    return [start, end];
  }
  return value.format(formatter);
};

export const dateComponentType = {
  monthpicker: 'YYYY-MM',
  rangepicker: 'YYYY-MM-DD',
  datepicker: 'YYYY-MM-DD',
  yearpicker: 'YYYY',
  timepickerrange: 'HH:mm',
  timepicker: 'HH:mm',
};

export const defaultValidateMessages = {
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
