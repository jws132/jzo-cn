'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.getDataList = void 0;

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

/**
 * 数据扁平化处理
 * @param {*} treeData
 * @param {*} keyField
 * @param {*} nameField
 * @param {*} childrenField
 */
var getDataList = function getDataList(
  treeData,
  keyField,
  nameField,
  childrenField,
) {
  var dataList = [];

  function generateList(data) {
    var parentNode =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    data === null || data === void 0
      ? void 0
      : data.forEach(function(node) {
          var key = ''.concat(node[keyField]);
          var title = node[nameField];
          dataList.push(
            _objectSpread(
              {
                key: key,
                title: title,
                parentId: parentNode[keyField],
              },
              node,
            ),
          );

          if (node[childrenField]) {
            generateList(node[childrenField], node);
          }
        });
  }

  generateList(treeData);
  return dataList;
};

exports.getDataList = getDataList;
