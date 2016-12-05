'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataFactory = function () {
  function DataFactory() {
    _classCallCheck(this, DataFactory);
  }

  _createClass(DataFactory, [{
    key: 'createDatasource',
    value: function createDatasource(url, pagesize, callback) {
      console.log('agtable data ajax run this...........');
      var datasource = {
        pageSize: pagesize,
        getRows: function getRows(params) {
          // const URL = `${}?size=${pagesize}&page=${params.endRow / pagesize}`
          fetch(URL).then(function (response) {
            if (response.status !== 200) {
              console.error('error');
              return;
            }
            return response.json();
          }).then(function (json) {
            if (json) {
              return json.body;
            }
          }).then(function (data) {
            if (data) {
              var rowsThisPage = data.items;
              var lastRow = -1;
              lastRow = data.pageInfo.total;
              callback(data.pageInfo.total, data.pageInfo.pages);
              document.querySelector('#current').onfocus = function (e) {
                var currentVal = e.target.value;
                var reg = /^\+?[1-9][0-9]*$/;
                e.target.onblur = function (e) {
                  if (!reg.test(e.target.value)) {
                    e.target.value = currentVal;
                  }
                };
              };
              params.successCallback(rowsThisPage, lastRow);
            }
          }).catch(function (err) {
            console.error(err);
            params.failCallback();
          });
        }
      };

      return datasource;
    }
  }]);

  return DataFactory;
}();

exports.default = DataFactory;