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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  PageNumChange: {
    displayName: 'PageNumChange'
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

var PageNumChange = _wrapComponent('PageNumChange')(function (_React$Component) {
  (0, _inherits3.default)(PageNumChange, _React$Component);

  function PageNumChange(props) {
    (0, _classCallCheck3.default)(this, PageNumChange);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PageNumChange.__proto__ || (0, _getPrototypeOf2.default)(PageNumChange)).call(this, props));

    _this.pageSizeChange = _this.pageSizeChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(PageNumChange, [{
    key: 'pageSizeChange',
    value: function pageSizeChange(e) {
      this.props.onChange(e.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var selectItem = function () {
        return _this2.props.pagesize && _this2.props.pagesize instanceof Array && _this2.props.pagesize.length !== 0 ? _this2.props.pagesize[0] : '';
      }();
      return _react3.default.createElement(
        'div',
        { className: 'page-size-container' },
        _react3.default.createElement(
          'div',
          { className: 'ag-page-size' },
          _react3.default.createElement(
            'select',
            { id: 'pageNumChange', defaultValue: selectItem, onChange: this.pageSizeChange },
            this.props.pagesize && this.props.pagesize instanceof Array && this.props.pagesize.length !== 0 ? this.props.pagesize.sort().map(function (item, index) {
              return _react3.default.createElement(
                'option',
                { key: 'size' + index, value: item },
                item
              );
            }) : ''
          ),
          _react3.default.createElement(
            'label',
            { className: 'select-arrow', id: 'forChangeBox' },
            _react3.default.createElement(
              'svg',
              { width: '22px', height: '20px', version: '1.1', fill: '#656D78' },
              _react3.default.createElement('path', { d: 'M7 8 L 10 13 L 13 8 Z' })
            )
          )
        ),
        '\u6761/\u9875',
        _react3.default.createElement(
          'span',
          null,
          '\xA0\xA0\u5171',
          this.props.total,
          '\u6761'
        )
      );
    }
  }]);
  return PageNumChange;
}(_react3.default.Component));

exports.default = PageNumChange;