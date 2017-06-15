'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Nav = exports.NavText = exports.NavIcon = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n     padding: 8px 12px;\n     cursor: pointer;\n     position: relative;\n     background: ', ';\n     color: ', ';\n\n     &:hover {\n        color: ', ' !important;\n        background: ', ' !important;\n     }\n'], ['\n     padding: 8px 12px;\n     cursor: pointer;\n     position: relative;\n     background: ', ';\n     color: ', ';\n\n     &:hover {\n        color: ', ' !important;\n        background: ', ' !important;\n     }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    vertical-align: middle;\n    display: inline-flex;\n    width: 42px;\n'], ['\n    vertical-align: middle;\n    display: inline-flex;\n    width: 42px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    vertical-align: middle;\n    display: inline-flex;\n    padding-right: 16px;\n'], ['\n    vertical-align: middle;\n    display: inline-flex;\n    padding-right: 16px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    &:before {\n        border-style: solid;\n        border-width: 0.15em 0.15em 0 0;\n        content: \'\';\n        display: inline-block;\n        height: ', ';\n        left: 0;\n        position: relative;\n        top: 0.15em;\n        transform: rotate(', ');\n        vertical-align: top;\n        width: ', ';\n    }\n'], ['\n    &:before {\n        border-style: solid;\n        border-width: 0.15em 0.15em 0 0;\n        content: \'\';\n        display: inline-block;\n        height: ', ';\n        left: 0;\n        position: relative;\n        top: 0.15em;\n        transform: rotate(', ');\n        vertical-align: top;\n        width: ', ';\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NavIcon = exports.NavIcon = function NavIcon() {
    throw new Error('Should not render');
};
var NavText = exports.NavText = function NavText() {
    throw new Error('Should not render');
};

var findComponent = function findComponent(ComponentToFind) {
    return function (children) {
        return _react.Children.toArray(children).reduce(function (found, next) {
            if (found === null && next !== null && next.type === ComponentToFind) {
                return next;
            }
            return found;
        }, null);
    };
};

var findIcon = findComponent(NavIcon);
var findText = findComponent(NavText);
var identity = function identity() {};

var NavItemStyled = _styledComponents2.default.div(_templateObject, function (props) {
    return props.isHighlighted ? props.highlightBgColor : 'inherit';
}, function (props) {
    return props.isHighlighted ? props.highlightColor : 'inherit';
}, function (props) {
    return props.hoverColor || props.highlightColor || 'inherit';
}, function (props) {
    return props.hoverBgColor || props.highlightBgColor || 'inherit';
});

var NavIconCont = _styledComponents2.default.div(_templateObject2);
var NavTextCont = _styledComponents2.default.div(_templateObject3);

var hasChildNav = function hasChildNav(children) {
    return _react.Children.toArray(children).reduce(function (partial, next) {
        return partial === false ? next.type === Nav : partial;
    }, false);
};

var CollapsedIndicator = _styledComponents2.default.div(_templateObject4, function (props) {
    return props.size;
}, function (props) {
    return !props.collapsed ? '135deg' : '45deg';
}, function (props) {
    return props.size;
});

var collectStyleAndClsName = function collectStyleAndClsName(comp) {
    var _ref = comp && comp.props ? comp.props : {},
        _ref$className = _ref.className,
        className = _ref$className === undefined ? undefined : _ref$className,
        _ref$style = _ref.style,
        style = _ref$style === undefined ? {} : _ref$style;

    return { className: className, style: style };
};

var Nav = exports.Nav = function (_Component) {
    _inherits(Nav, _Component);

    function Nav(props) {
        _classCallCheck(this, Nav);

        var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));

        _this.onNavItemClicked = function () {
            var _this$props = _this.props,
                _this$props$onClick = _this$props.onClick,
                onClick = _this$props$onClick === undefined ? identity : _this$props$onClick,
                onNavClick = _this$props.onNavClick;

            _this.setState({
                collapsed: !_this.state.collapsed
            }, function () {
                onNavClick(_this.props.id, null);
                onClick(_this.props.id, null);
                if (_this.subNavEl && !_this.s) {
                    _this.subNavEl.style.maxHeight = !_this.state.collapsed ? null : '0px';
                }
            });
        };

        _this.childClicked = function (childId) {
            var onNavClick = _this.props.onNavClick;

            onNavClick(childId, _this.props.id);
            _this.props.onClick(childId, _this.props.id);
        };

        _this.setSubNavRef = function (subNavEl) {
            _this.subNavEl = subNavEl;
        };

        _this.renderSubNavIndicator = function () {
            var renderSubNavIndicator = _this.props.renderSubNavIndicator;

            if (renderSubNavIndicator) {
                var subNavInd = renderSubNavIndicator(_this.state.collapsed);
                if (!subNavInd && typeof console !== 'undefined') {
                    console.warn('subNavIndicator returned undefined or null');
                }
                return subNavInd || null;
            }
            return _react2.default.createElement(CollapsedIndicator, { collapsed: _this.state.collapsed, size: _this.props.collapseIndicatorSize });
        };

        _this.state = {
            collapsed: !props.expanded
        };
        return _this;
    }

    _createClass(Nav, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                hoverBgColor = _props.hoverBgColor,
                hoverColor = _props.hoverColor,
                highlightColor = _props.highlightColor,
                highlightBgColor = _props.highlightBgColor,
                children = _props.children,
                highlightedId = _props.highlightedId,
                _props$onNavClick = _props.onNavClick,
                onNavClick = _props$onNavClick === undefined ? identity : _props$onNavClick,
                id = _props.id;

            var icon = findIcon(children);
            var text = findText(children);
            var itemProps = {
                hoverBgColor: hoverBgColor || this.context.hoverBgColor,
                hoverColor: hoverColor || this.context.hoverColor,
                onClick: this.onNavItemClicked,
                onNavClick: onNavClick,
                isHighlighted: id === highlightedId,
                highlightColor: highlightColor || this.context.highlightColor,
                highlightBgColor: highlightBgColor || this.context.highlightBgColor
            };

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    NavItemStyled,
                    _extends({ className: '__rsnav___item' }, itemProps),
                    _react2.default.createElement(
                        NavIconCont,
                        collectStyleAndClsName(icon),
                        icon && icon.props ? icon.props.children : null
                    ),
                    _react2.default.createElement(
                        NavTextCont,
                        collectStyleAndClsName(text),
                        text && text.props ? text.props.children : null
                    ),
                    hasChildNav(children) ? _react2.default.createElement(
                        'div',
                        {
                            style: {
                                position: 'absolute',
                                right: '16px',
                                bottom: '4px'
                            }
                        },
                        this.renderSubNavIndicator(),
                        ' '
                    ) : null
                ),
                _react2.default.createElement(
                    'div',
                    {
                        ref: this.setSubNavRef,
                        style: {
                            maxHeight: this.state.collapsed ? 0 : null,
                            transition: 'all 0.2s ease-in-out'
                        }
                    },
                    _react.Children.toArray(children).filter(function (child) {
                        return child.type === Nav && !_this2.state.collapsed;
                    }).map(function (child, idx) {
                        var sicon = findIcon(child.props.children);
                        var stext = findText(child.props.children);
                        var isItemHighlighted = highlightedId === id + '/' + child.props.id;

                        return _react2.default.createElement(
                            NavItemStyled,
                            _extends({
                                className: '__rsnav___itemchild',
                                key: idx
                            }, itemProps, {
                                onClick: function onClick() {
                                    child.props.onNavClick(), _this2.childClicked(id + '/' + child.props.id);
                                },
                                isHighlighted: isItemHighlighted
                            }),
                            _react2.default.createElement(
                                NavIconCont,
                                collectStyleAndClsName(sicon),
                                null
                            ),
                            _react2.default.createElement(
                                NavTextCont,
                                collectStyleAndClsName(stext),
                                stext ? stext.props.children : null
                            )
                        );
                    })
                )
            );
        }
    }]);

    return Nav;
}(_react.Component);

Nav.contextTypes = {
    highlightColor: _propTypes2.default.string,
    highlightBgColor: _propTypes2.default.string,
    hoverBgColor: _propTypes2.default.string,
    hoverColor: _propTypes2.default.string
};
Nav.propTypes = {
    children: _propTypes2.default.node,
    highlightColor: _propTypes2.default.string,
    highlightBgColor: _propTypes2.default.string,
    isHighlighted: _propTypes2.default.bool,
    id: _propTypes2.default.oneOfType([_propTypes2.default.string.isRequired, _propTypes2.default.number.isRequired]),
    onClick: _propTypes2.default.func,
    onNavClick: _propTypes2.default.func,
    highlightedId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    renderSubNavIndicator: _propTypes2.default.func,
    hoverBgColor: _propTypes2.default.string,
    hoverColor: _propTypes2.default.string,
    expanded: _propTypes2.default.bool,
    collapseIndicatorSize: _propTypes2.default.string
};
Nav.defaultProps = {
    onNavClick: identity,
    collapseIndicatorSize: '0.25em'
};
exports.default = Nav;