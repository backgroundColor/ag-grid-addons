'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _agGridReact = require('ag-grid-react');

require('ag-grid/dist/styles/ag-grid.css');

require('ag-grid/dist/styles/theme-fresh.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AgTable = function (_React$Component) {
  _inherits(AgTable, _React$Component);

  function AgTable() {
    _classCallCheck(this, AgTable);

    return _possibleConstructorReturn(this, (AgTable.__proto__ || Object.getPrototypeOf(AgTable)).apply(this, arguments));
  }

  _createClass(AgTable, [{
    key: 'componentDidMount',

    // constructor () {
    //   super()
    //   this.gridOptions = {
    //     onGridReady: (params) => { console.log(params) }
    //   }
    // }
    value: function componentDidMount() {
      // for (let key in this.gridOptions) {
      //   this.props.gridOptions[key] = this.gridOptions[key]
      // }
      console.log(this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { height: '90%' },
          className: 'ag-fresh ag-container' },
        _react2.default.createElement(_agGridReact.AgGridReact, this.props)
      );
    }
  }]);

  return AgTable;
}(_react2.default.Component);

exports.default = AgTable;