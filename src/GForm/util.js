import moment from 'moment';
import { isNumber, isEqual, isUndefined } from 'lodash';
moment.locale('zh-cn');

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

// 全角转化为半角
function toCDB(str) {
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
}

// 转化日期格式
function formateDate(value, formatter = 'YYYY-MM-DD') {
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
}

// 字符串转moment
function normalizeDate(value, formatter = 'YYYY-MM-DD') {
  if (!value) return undefined;
  if (value instanceof Array) {
    let [start, end] = value;
    if (start && typeof start === 'string') {
      start = moment(start, formatter);
    }
    if (end && typeof end === 'string') {
      end = moment(end, formatter);
    }
    return [start, end];
  }
  if (typeof value === 'string') {
    return moment(value, formatter);
  }
  return value;
}

export { toCDB, formateDate, normalizeDate };
