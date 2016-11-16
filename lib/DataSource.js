'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DataFactory = function () {
  function DataFactory() {
    (0, _classCallCheck3.default)(this, DataFactory);
  }

  (0, _createClass3.default)(DataFactory, [{
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