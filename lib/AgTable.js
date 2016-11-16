'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = require('react-transform-hmr');

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _agGridReact = require('ag-grid-react');

require('ag-grid/dist/styles/ag-grid.css');

require('ag-grid/dist/styles/theme-fresh.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  AgTable: {
    displayName: 'AgTable'
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: 'src/AgTable.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/AgTable.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
  };
}

var AgTable = _wrapComponent('AgTable')(function (_React$Component) {
  (0, _inherits3.default)(AgTable, _React$Component);

  function AgTable() {
    (0, _classCallCheck3.default)(this, AgTable);
    return (0, _possibleConstructorReturn3.default)(this, (AgTable.__proto__ || (0, _getPrototypeOf2.default)(AgTable)).apply(this, arguments));
  }

  (0, _createClass3.default)(AgTable, [{
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
      return _react3.default.createElement(
        'div',
        { style: { height: '90%' },
          className: 'ag-fresh ag-container' },
        _react3.default.createElement(_agGridReact.AgGridReact, this.props)
      );
    }
  }]);
  return AgTable;
}(_react3.default.Component));

exports.default = AgTable;