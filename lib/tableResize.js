'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function tableResize() {
  var that = this;
  var onSrceenResize = function onSrceenResize(obj, type, callback) {
    if (obj === null || typeof obj === 'undefined') {
      return;
    }
    if (obj.addEventListener) {
      obj.addEventListener(type, callback, false);
    } else {
      obj['on' + type] = callback;
    }
  };
  var onContainerResize = function onContainerResize(callback) {
    var center = document.querySelector('#center');
    var MutationObserver = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver;
    var observer = new MutationObserver(function (mutations) {
      callback();
    });
    var config = { attributes: true, childList: true, characterData: true };
    observer.observe(center, config); // 监听ag-grid内部的center，响应时间最短，不用设置setTimtout
  };

  onSrceenResize(window, 'resize', function () {
    that.api.sizeColumnsToFit();
    // console.log('resize ....')
  });
  onContainerResize(function () {
    that.api.sizeColumnsToFit();
  });
}

exports.default = tableResize;