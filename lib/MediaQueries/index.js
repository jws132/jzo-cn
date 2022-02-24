'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _reactMedia = _interopRequireDefault(require('react-media'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var BREAK_POINTS = {
  xs: {
    maxWidth: 575,
  },
  sm: {
    minWidth: 576,
    maxWidth: 767,
  },
  md: {
    minWidth: 768,
    maxWidth: 991,
  },
  lg: {
    minWidth: 992,
    maxWidth: 1199,
  },
  xl: {
    minWidth: 1200,
    maxWidth: 1599,
  },
  xxl: {
    minWidth: 1600,
  },
};

var MediaQueries = function MediaQueries(_ref) {
  var children = _ref.children;
  var matchedPoint = '';
  return /*#__PURE__*/ _react.default.createElement(
    _reactMedia.default,
    {
      queries: BREAK_POINTS,
    },
    function(matches) {
      var points = Object.keys(matches);

      for (var i = 0, len = points.length; i < len; i += 1) {
        var point = points[i];

        if (matches[point]) {
          matchedPoint = point;
          return children(point);
        }
      }

      return children(matchedPoint);
    },
  );
};

var _default = MediaQueries;
exports.default = _default;
