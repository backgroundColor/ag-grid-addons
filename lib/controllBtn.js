'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function controllBtn(params, data) {
  var btnContainer = document.createElement('span');
  if (data instanceof Array) {
    var _loop = function _loop(i, len) {
      var btn = document.createElement('a');
      btn.style.display = 'inline-block';
      btn.style.margin = '0px 5px';
      btn.style.textDecoration = 'none';
      btn.style.color = '#2db7f5';
      for (var key in data[i]) {
        if (key === 'onclick') {
          btn.onclick = function () {
            data[i]['onclick'](params);
          };
        } else {
          btn[key] = data[i][key];
        }
      }
      // btn.onclick = function () {
      //   // console.log(params)
      //   data[0]['onclick'](params)
      // }
      btnContainer.appendChild(btn);
    };

    for (var i = 0, len = data.length; i < len; i++) {
      _loop(i, len);
    }
  } else {
    console.error('请确保传入的数据为数组格式！！');
    return;
  }
  return btnContainer;
}

exports.default = controllBtn;