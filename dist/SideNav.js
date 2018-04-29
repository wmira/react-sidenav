'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SideNav = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Nav = require('./Nav');

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contextTypes = {
    highlightColor: _propTypes2.default.string,
    highlightBgColor: _propTypes2.default.string,
    hoverBgColor: _propTypes2.default.string,
    hoverColor: _propTypes2.default.string
};

var noop = function noop() {};

var SideNav = exports.SideNav = function (_Component) {
    _inherits(SideNav, _Component);

    function SideNav(props) {
        _classCallCheck(this, SideNav);

        var _this = _possibleConstructorReturn(this, (SideNav.__proto__ || Object.getPrototypeOf(SideNav)).call(this, props));

        _this.onNavClick = function (id) {
            var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var _this$props$onItemSel = _this.props.onItemSelection,
                onItemSelection = _this$props$onItemSel === undefined ? noop : _this$props$onItemSel;


            if (_this.state.defaultSelected) {
                //lets manage it
                _this.setState({ selected: id }, function () {
                    onItemSelection(id, parent);
                });
            } else {
                onItemSelection(id, parent);
            }
        };

        _this.state = {
            selected: props.defaultSelected,
            defaultSelected: props.defaultSelected
        };
        return _this;
    }

    _createClass(SideNav, [{
        key: 'getChildContext',
        value: function getChildContext() {
            var _props = this.props,
                highlightColor = _props.highlightColor,
                highlightBgColor = _props.highlightBgColor,
                hoverBgColor = _props.hoverBgColor,
                hoverColor = _props.hoverColor;

            return { highlightColor: highlightColor, highlightBgColor: highlightBgColor, hoverBgColor: hoverBgColor, hoverColor: hoverColor };
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var children = this.props.children;

            return _react2.default.createElement(
                'div',
                null,
                _react.Children.toArray(children).map(function (child) {
                    if (child && child.type === _Nav2.default) {
                        var currentSelected = _this2.state.defaultSelected ? _this2.state.selected : _this2.props.selected;
                        return (0, _react.cloneElement)(child, {
                            highlightedId: currentSelected,
                            onClick: _this2.onNavClick
                        });
                    }
                    return child;
                })
            );
        }
    }]);

    return SideNav;
}(_react.Component);

SideNav.childContextTypes = contextTypes;
SideNav.propTypes = _extends({}, contextTypes, {
    selected: _propTypes2.default.string,
    defaultSelected: _propTypes2.default.string,
    onItemSelection: _propTypes2.default.func
});
exports.default = SideNav;