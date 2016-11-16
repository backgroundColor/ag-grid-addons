'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function copyOrClick(callback) {
  var centerRow = document.querySelector('#centerRow');
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
  window.addEventListener('keydown', function (event) {
    if (event.keyCode === 17) {
      // console.log(that.props)
      that.gridOptions.api.removeEventListener('rowClicked', rowclick);
      listenerState = false;
    }
  });
  window.addEventListener('keyup', function (event) {
    that.gridOptions.api.addEventListener('rowClicked', rowclick);
    listenerState = true;
  });
  centerRow.addEventListener('mousedown', function (event) {
    var currPointer = getPointXy(event);
    this.onmousemove = function (e) {
      var pointer = getPointXy(e);
      // console.log(pointer)
      if (Math.abs(currPointer.x - pointer.x) > 5 || Math.abs(currPointer.y - pointer.y) > 12) {
        that.gridOptions.api.removeEventListener('rowClicked', rowclick); // 先移除rowclick事件
        console.log('cancel rowclick');
        this.onmousemove = null;
        // listenerState = false // 判断滚动的距离是否应该监听rowclick
      }
    };
    // console.log(currPointer)
    this.onmouseup = function (event) {
      this.onmousemove = null;
      var movePonter = getPointXy(event);
      // console.log(movePonter)
      if (Math.abs(currPointer.x - movePonter.x) < 5 && Math.abs(currPointer.y - movePonter.y) < 12 && listenerState === true) {
        console.log(1);
        that.gridOptions.api.addEventListener('rowClicked', rowclick);
        listenerState = true;
      }
    };
  });
}

exports.default = copyOrClick;