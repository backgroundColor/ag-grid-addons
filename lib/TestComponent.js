"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _redboxReact2 = require("redbox-react");

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _reactTransformCatchErrors3 = require("react-transform-catch-errors");

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _react2 = require("react");

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = require("react-transform-hmr");

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  TestComponent: {
    displayName: "TestComponent"
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: "src/TestComponent.jsx",
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: "src/TestComponent.jsx",
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
  };
}

var TestComponent = _wrapComponent("TestComponent")(function (_React$Component) {
  (0, _inherits3.default)(TestComponent, _React$Component);

  function TestComponent() {
    (0, _classCallCheck3.default)(this, TestComponent);
    return (0, _possibleConstructorReturn3.default)(this, (TestComponent.__proto__ || (0, _getPrototypeOf2.default)(TestComponent)).apply(this, arguments));
  }

  (0, _createClass3.default)(TestComponent, [{
    key: "sum",
    value: function sum(a, b) {
      return a + b;
    }
  }, {
    key: "render",
    value: function render() {
      return _react3.default.createElement(
        "div",
        { className: "wrapper" },
        "The sum of 13 and 37 would be ",
        this.sum(13, 37)
      );
    }
  }]);
  return TestComponent;
}(_react3.default.Component));

exports.default = TestComponent;