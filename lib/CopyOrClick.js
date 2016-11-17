'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function copyOrClick(callback) {
  // const centerRow = document.querySelector('#centerRow')
  // const centerRow = document.body
  var centerRow = document.querySelector('.ag-fresh');
  var that = this;
  var rowclick = function rowclick(params) {
    callback(params);
  };
  var getPointXy = function getPointXy(e) {
    e = e || window.event;
    var x = e.pageX || e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft);
    var y = e.pageY || e.clientY + (document.documentElement.scrollTop || document.body.scrollTop);
    return { 'x': x, 'y': y };
  };
  var listenerState = true;
  var copyEvent = function copyEvent(event) {
    var currPointer = getPointXy(event);
    this.onmousemove = function (e) {
      var pointer = getPointXy(e);
      // console.log(pointer)
      if (Math.abs(currPointer.x - pointer.x) > 5 || Math.abs(currPointer.y - pointer.y) > 12) {
        that.gridOptions.api.removeEventListener('rowClicked', rowclick); // 先移除rowclick事件
        console.log('cancel rowclick');
        this.onmousemove = null;
        listenerState = false; // 判断滚动的距离是否应该监听rowclick
      } else {
        listenerState = true;
      }
    };
    this.onmouseup = function (event) {
      this.onmousemove = null;
      var movePonter = getPointXy(event);
      if (Math.abs(currPointer.x - movePonter.x) < 5 && Math.abs(currPointer.y - movePonter.y) < 12 && listenerState === true) {
        that.gridOptions.api.addEventListener('rowClicked', rowclick);
        listenerState = true;
      } else {
        that.gridOptions.api.removeEventListener('rowClicked', rowclick);
        listenerState = true; // 判断滚动的距离是否应该监听rowclick
      }
    };
  };
  window.addEventListener('keydown', function (event) {
    if (event.keyCode === 17) {
      that.gridOptions.api.removeEventListener('rowClicked', rowclick);
      centerRow.removeEventListener('mousedown', copyEvent);
    }
  });
  window.addEventListener('keyup', function (event) {
    that.gridOptions.api.addEventListener('rowClicked', rowclick);
    centerRow.addEventListener('mousedown', copyEvent);
  });
  centerRow.addEventListener('mousedown', copyEvent);
}

exports.default = copyOrClick;