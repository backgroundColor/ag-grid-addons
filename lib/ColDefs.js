"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColDefs = function () {
  function ColDefs() {
    (0, _classCallCheck3.default)(this, ColDefs);
  }

  (0, _createClass3.default)(ColDefs, [{
    key: "createColDefs",
    value: function createColDefs(props) {
      var colsHeader = [];
      if (props) {
        props.map(function (col) {
          colsHeader.push(col);
        });
        return colsHeader;
      }
    }
  }]);
  return ColDefs;
}();

exports.default = ColDefs;