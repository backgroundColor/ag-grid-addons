'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageNumChange = function (_React$Component) {
  _inherits(PageNumChange, _React$Component);

  function PageNumChange(props) {
    _classCallCheck(this, PageNumChange);

    var _this = _possibleConstructorReturn(this, (PageNumChange.__proto__ || Object.getPrototypeOf(PageNumChange)).call(this, props));

    _this.pageSizeChange = _this.pageSizeChange.bind(_this);
    return _this;
  }

  _createClass(PageNumChange, [{
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
      return _react2.default.createElement(
        'div',
        { className: 'page-size-container' },
        _react2.default.createElement(
          'div',
          { className: 'ag-page-size' },
          _react2.default.createElement(
            'select',
            { id: 'pageNumChange', defaultValue: selectItem, onChange: this.pageSizeChange },
            this.props.pagesize && this.props.pagesize instanceof Array && this.props.pagesize.length !== 0 ? this.props.pagesize.sort().map(function (item, index) {
              return _react2.default.createElement(
                'option',
                { key: 'size' + index, value: item },
                item
              );
            }) : ''
          ),
          _react2.default.createElement(
            'label',
            { className: 'select-arrow', id: 'forChangeBox' },
            _react2.default.createElement(
              'svg',
              { width: '22px', height: '20px', version: '1.1', fill: '#656D78' },
              _react2.default.createElement('path', { d: 'M7 8 L 10 13 L 13 8 Z' })
            )
          )
        ),
        '\u6761/\u9875',
        _react2.default.createElement(
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
}(_react2.default.Component);

exports.default = PageNumChange;