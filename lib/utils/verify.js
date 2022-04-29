'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.isDrivingLicenseNumber = exports.isBankCard = exports.isAmount = exports.chineseAndEnglish_bracket = exports.chineseAndEnglish_ = exports.chineseAndEnglish = exports.amount = void 0;
exports.isEmojiCharacter = isEmojiCharacter;
exports.isIdentityCodeValid = isIdentityCodeValid;
exports.patternUserName = exports.patternTel = exports.patternSql = exports.patternSpaceAll = exports.patternSpace = exports.patternPwd = exports.patternPrice = exports.patternPrecision3 = exports.patternPrecision2 = exports.patternPositiveInteger = exports.patternPhoneOrTel = exports.patternPhone = exports.patternLoginName = exports.patternEmail = exports.patternDiscount = exports.patternBankCard = exports.notContainSpace = exports.isTel = exports.isPhoneAndTel = exports.isPhone = void 0;

/* eslint-disable */
var patternPhone = /^((13[0-9])|(14[1]|[4-9])|(15([0-3]|[5-9]))|(16[2]|[5-7])|(17[0-3]|[5-8])|(18[0-9])|(19[1|8|9]))\d{8}$/; // /^1[0-9]{10}$/; // 手机

exports.patternPhone = patternPhone;
var patternTel = /^(0[0-9]{2,3}\-?)?([2-9][0-9]{6,7})(\-?[0-9]{1,4})?$/; // 固话

exports.patternTel = patternTel;
var patternPhoneOrTel = /^(0[0-9]{2,3}\-?)?([2-9][0-9]{6,7})(\-?[0-9]{1,4})?$|^1[0-9]{10}$/; // 手机或固话

exports.patternPhoneOrTel = patternPhoneOrTel;
var patternPrice = /^(([0-9]|([1-9][0-9]{0,7}))((\.[0-9]{1,2})?))$/; //(整数<9位,小数<3位)

exports.patternPrice = patternPrice;
var patternPrecision2 = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/; // 只能输入两位小数，并且要求大于0

exports.patternPrecision2 = patternPrecision2;
var patternPrecision3 = /^(([1-9][0-9]*)|(([0]\.\d{1,3}|[1-9][0-9]*\.\d{1,3})))$/; // 只能输入三位小数，并且要求大于0

exports.patternPrecision3 = patternPrecision3;
var patternPositiveInteger = /^\+?[1-9]\d*$/; // 正整数

exports.patternPositiveInteger = patternPositiveInteger;
var patternBankCard = /^([0-9]{16,20})$/;
exports.patternBankCard = patternBankCard;
var chineseAndEnglish = /^([a-zA-Z]|([\u4e00-\u9fa5])){1,10}$/; //中英文10个字符

exports.chineseAndEnglish = chineseAndEnglish;
var chineseAndEnglish_ = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/; // 中英文、数字、下划线

exports.chineseAndEnglish_ = chineseAndEnglish_;
var chineseAndEnglish_bracket = /^[a-zA-Z0-9_\u4e00-\u9fa5\(\)\（\）]+$/; // 中英文、数字、下划线、中英文的括号

exports.chineseAndEnglish_bracket = chineseAndEnglish_bracket;
var patternDiscount = /^((0\.[1-9]{1})|(([1-9]{1})(\.\d{1})?))$/; // 折扣，0~10之间，只能输入一位小数

exports.patternDiscount = patternDiscount;
var patternSpace = /\s/; // 存在单空格

exports.patternSpace = patternSpace;
var patternSpaceAll = /^\s+$/g; // 全是空格

exports.patternSpaceAll = patternSpaceAll;
var patternEmail = /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/; // eamil

exports.patternEmail = patternEmail;
var patternPwd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/; // 密码校验

exports.patternPwd = patternPwd;
var amount = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
exports.amount = amount;
var patternUserName = /^([a-zA-Z0-9_-（）()]|([\u4e00-\u9fa5])){1,30}$/; //用户名显示 中英文数字 -_()（）

exports.patternUserName = patternUserName;
var patternLoginName = /^([a-zA-Z0-9_-]|([\u4e00-\u9fa5])){1,30}$/; //用户名显示 中英文数字 -_()（）

exports.patternLoginName = patternLoginName;
var patternSql = /^((?!%|#).)*$/; // 数据库敏感字符

/*ant-design from 不允许空格*/

exports.patternSql = patternSql;

var notContainSpace = function notContainSpace(rule, value, callback) {
  if (patternSpace.test(value.trim())) {
    callback('不允许使用空格');
  } else {
    callback();
  }
}; // 验证是否是手机号

exports.notContainSpace = notContainSpace;

var isPhone = function isPhone(str) {
  return !!patternPhone.test(str);
}; // 验证是否是固话

exports.isPhone = isPhone;

var isTel = function isTel(str) {
  return !!patternTel.test(str);
}; // 验证是否是手机号和固话

exports.isTel = isTel;

var isPhoneAndTel = function isPhoneAndTel(str) {
  return isPhone(str) || isTel(str);
}; // 驾驶证号

exports.isPhoneAndTel = isPhoneAndTel;

var isDrivingLicenseNumber = function isDrivingLicenseNumber(str) {
  return /^[0-9a-zA-Z]{15}$/.test(str) || /^[0-9a-zA-Z]{18}$/.test(str);
}; // 金额

exports.isDrivingLicenseNumber = isDrivingLicenseNumber;

var isAmount = function isAmount(str) {
  return !!/^\d+(\.\d{1,2})?$/.test(str);
}; // 验证是否是银行卡

exports.isAmount = isAmount;

var isBankCard = function isBankCard(str) {
  return !!patternBankCard.test(str);
}; // 身份证有些是15位的

exports.isBankCard = isBankCard;

function isValidityBrithBy15IdCard(idCard15) {
  var year = idCard15.substring(6, 8);
  var month = idCard15.substring(8, 10);
  var day = idCard15.substring(10, 12);
  var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day)); // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法

  if (
    temp_date.getYear() != parseFloat(year) ||
    temp_date.getMonth() != parseFloat(month) - 1 ||
    temp_date.getDate() != parseFloat(day)
  ) {
    return false;
  }

  return true;
}
/**
 * 校验身份证合法性
 * @param {String} code
 * @returns {Boolean} true:合法，false:非法
 */

function isIdentityCodeValid(code) {
  code = code.toUpperCase();
  var reg,
    city = {
      11: '北京',
      12: '天津',
      13: '河北',
      14: '山西',
      15: '内蒙古',
      21: '辽宁',
      22: '吉林',
      23: '黑龙江 ',
      31: '上海',
      32: '江苏',
      33: '浙江',
      34: '安徽',
      35: '福建',
      36: '江西',
      37: '山东',
      41: '河南',
      42: '湖北 ',
      43: '湖南',
      44: '广东',
      45: '广西',
      46: '海南',
      50: '重庆',
      51: '四川',
      52: '贵州',
      53: '云南',
      54: '西藏 ',
      61: '陕西',
      62: '甘肃',
      63: '青海',
      64: '宁夏',
      65: '新疆',
      71: '台湾',
      81: '香港',
      82: '澳门',
      91: '国外 ',
    };

  if (!city[code.substr(0, 2)]) {
    return false;
  }

  if (code.length == 15) {
    reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;

    if (reg.test(code)) {
      return isValidityBrithBy15IdCard(code);
    }

    return false;
  } else if (code.length == 18) {
    reg = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[A-Z])$/;

    if (!reg.test(code)) {
      return false;
    } else {
      code = code.split(''); //∑(ai×Wi)(mod 11)
      //加权因子

      var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; //校验位

      var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
      var sum = 0;
      var ai = 0;
      var wi = 0;

      for (var i = 0; i < 17; i++) {
        ai = code[i];
        wi = factor[i];
        sum += ai * wi;
      }

      if (parity[sum % 11] != code[17]) {
        return false;
      }

      return true;
    }
  }

  return false;
} //输入项表情限制

function isEmojiCharacter(substring) {
  for (var i = 0; i < substring.length; i++) {
    var hs = substring.charCodeAt(i);

    if (0xd800 <= hs && hs <= 0xdbff) {
      if (substring.length > 1) {
        var ls = substring.charCodeAt(i + 1);
        var uc = (hs - 0xd800) * 0x400 + (ls - 0xdc00) + 0x10000;

        if (0x1d000 <= uc && uc <= 0x1f77f) {
          return true;
        }
      }
    } else if (substring.length > 1) {
      var ls = substring.charCodeAt(i + 1);

      if (ls == 0x20e3) {
        return true;
      }
    } else {
      if (0x2100 <= hs && hs <= 0x27ff) {
        return true;
      } else if (0x2b05 <= hs && hs <= 0x2b07) {
        return true;
      } else if (0x2934 <= hs && hs <= 0x2935) {
        return true;
      } else if (0x3297 <= hs && hs <= 0x3299) {
        return true;
      } else if (
        hs == 0xa9 ||
        hs == 0xae ||
        hs == 0x303d ||
        hs == 0x3030 ||
        hs == 0x2b55 ||
        hs == 0x2b1c ||
        hs == 0x2b1b ||
        hs == 0x2b50
      ) {
        return true;
      }
    }
  }
}
