'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = timeFormat;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function timeFormat(params) {
  return params.value ? (0, _moment2.default)(params.value).format('YYYY-MM-DD HH:mm:ss') : params.value;
}