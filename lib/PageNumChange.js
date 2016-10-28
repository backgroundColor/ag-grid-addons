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
  pageNumChange: {
    displayName: 'pageNumChange'
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: 'src/PageNumChange.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/PageNumChange.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
  };
}

var pageNumChange = _wrapComponent('pageNumChange')(function (_React$Component) {
  (0, _inherits3.default)(pageNumChange, _React$Component);

  function pageNumChange() {
    (0, _classCallCheck3.default)(this, pageNumChange);
    return (0, _possibleConstructorReturn3.default)(this, (pageNumChange.__proto__ || (0, _getPrototypeOf2.default)(pageNumChange)).apply(this, arguments));
  }

  (0, _createClass3.default)(pageNumChange, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'div',
        { className: 'agtable-pagenum-change' },
        _react3.default.createElement(
          'select',
          { onChange: this.props.onChange,
            defaultValue: this.props.pagesize },
          this.props.options.map(function (num) {
            return _react3.default.createElement(
              'option',
              { key: num },
              num
            );
          })
        ),
        '\u6761/\u9875  \u5171',
        _react3.default.createElement(
          'span',
          null,
          this.props.total
        ),
        '\u6761'
      );
    }
  }]);
  return pageNumChange;
}(_react3.default.Component));

exports.default = pageNumChange;
//# sourceMappingURL=PageNumChange.js.map