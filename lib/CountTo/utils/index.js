'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.requestAnimationFrame = exports.cancelAnimationFrame = void 0;
var lastTime = 0;
var prefixes = 'webkit moz ms o'.split(' '); // 各浏览器前缀

var requestAnimationFrame;
exports.requestAnimationFrame = requestAnimationFrame;
var cancelAnimationFrame;
exports.cancelAnimationFrame = cancelAnimationFrame;
var isServer = typeof window === 'undefined';

if (isServer) {
  exports.requestAnimationFrame = requestAnimationFrame = function requestAnimationFrame() {
    return;
  };

  exports.cancelAnimationFrame = cancelAnimationFrame = function cancelAnimationFrame() {
    return;
  };
} else {
  exports.requestAnimationFrame = requestAnimationFrame =
    window.requestAnimationFrame;
  exports.cancelAnimationFrame = cancelAnimationFrame =
    window.cancelAnimationFrame;
  var prefix; // 通过遍历各浏览器前缀，来得到requestAnimationFrame和cancelAnimationFrame在当前浏览器的实现形式

  for (var i = 0; i < prefixes.length; i++) {
    if (requestAnimationFrame && cancelAnimationFrame) {
      break;
    }

    prefix = prefixes[i];
    exports.requestAnimationFrame = requestAnimationFrame =
      requestAnimationFrame || window[prefix + 'RequestAnimationFrame'];
    exports.cancelAnimationFrame = cancelAnimationFrame =
      cancelAnimationFrame ||
      window[prefix + 'CancelAnimationFrame'] ||
      window[prefix + 'CancelRequestAnimationFrame'];
  } // 如果当前浏览器不支持requestAnimationFrame和cancelAnimationFrame，则会退到setTimeout

  if (!requestAnimationFrame || !cancelAnimationFrame) {
    exports.requestAnimationFrame = requestAnimationFrame = function requestAnimationFrame(
      callback,
    ) {
      var currTime = new Date().getTime(); // 为了使setTimteout的尽可能的接近每秒60帧的效果

      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function() {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

    exports.cancelAnimationFrame = cancelAnimationFrame = function cancelAnimationFrame(
      id,
    ) {
      window.clearTimeout(id);
    };
  }
}
