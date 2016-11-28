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

require('./ag-grid-addons.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  InputFilter: {
    displayName: 'InputFilter'
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: 'src/InputFilter.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/InputFilter.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
  };
}

var InputFilter = _wrapComponent('InputFilter')(function (_React$Component) {
  (0, _inherits3.default)(InputFilter, _React$Component);

  function InputFilter(props) {
    (0, _classCallCheck3.default)(this, InputFilter);

    var _this = (0, _possibleConstructorReturn3.default)(this, (InputFilter.__proto__ || (0, _getPrototypeOf2.default)(InputFilter)).call(this, props));

    _this.state = {
      value: ''
    };
    _this.onButtonPressed = _this.onButtonPressed.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(InputFilter, [{
    key: 'doesFilterPass',
    value: function doesFilterPass(params) {
      var passed = true;
      var that = this;
      this.state.value.toLowerCase().split(' ').forEach(function (filterWord) {
        var value = that.props.valueGetter(params);
        if (value.toString().toLowerCase().indexOf(filterWord) < 0) {
          passed = false;
        }
      });
      return passed;
    }
  }, {
    key: 'getModel',
    value: function getModel() {
      return {
        value: this.state.value
      };
    }
  }, {
    key: 'setModel',
    value: function setModel(model) {
      this.setState({
        value: model.value
      });
    }
    // called by agGrid

  }, {
    key: 'isFilterActive',
    value: function isFilterActive() {
      return this.state.value !== '' && this.state.value !== null && this.state.value !== undefined;
    }
  }, {
    key: 'onButtonPressed',
    value: function onButtonPressed(e) {
      var newState = { value: e.target.value.trim() };
      this.setState(newState, this.props.filterChangedCallback);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'div',
        { className: 'filter-box' },
        _react3.default.createElement(
          'div',
          { className: 'filter-box-title' },
          _react3.default.createElement(
            'b',
            null,
            this.props.colDef.headerName,
            '\u67E5\u8BE2'
          )
        ),
        _react3.default.createElement(
          'div',
          { className: 'filter-box-container' },
          _react3.default.createElement('input', { type: 'text',
            placeholder: this.props.colDef.headerName,
            value: this.state.value, ref: 'serchInput',
            onChange: this.onButtonPressed })
        )
      );
    }
  }]);
  return InputFilter;
}(_react3.default.Component));

InputFilter.props = {
  filterChangedCallback: Function,
  valueGetter: Function,
  colDef: Object
};
exports.default = InputFilter;