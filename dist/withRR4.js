'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.withRR4 = exports.pathReducer = exports.pathToArray = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SideNav = require('./SideNav');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * converts a path /some/path to some id
 *
 * @param {*} path
 */
var pathToArray = exports.pathToArray = function pathToArray() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    //remove first char
    var sanitizedPath = path.indexOf('/') === 0 ? path.substring(1) : path;
    return sanitizedPath.split('/');
};

var pathReducer = exports.pathReducer = function pathReducer(acc, partial) {
    return acc + '/' + partial;
};

var withRR4 = function withRR4() {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
        _inherits(SideNavWithRR4, _React$Component);

        function SideNavWithRR4(props) {
            _classCallCheck(this, SideNavWithRR4);

            var _this = _possibleConstructorReturn(this, (SideNavWithRR4.__proto__ || Object.getPrototypeOf(SideNavWithRR4)).call(this, props));

            _this.setPathAsSelectedId = function (pathname, defaultSelection) {
                var pathArr = pathToArray(pathname);
                var pathArrToUse = pathArr.length === 0 ? [defaultSelection] : pathArr;

                var pathAsId = pathArrToUse.reduce(pathReducer);
                _this.setState({ selected: pathAsId });
            };

            _this.onHistoryChanged = function (e) {
                var pathname = e.pathname;

                _this.setPathAsSelectedId(pathname, _this.props.default);
            };

            _this.onItemSelection = function (itemId) {
                var history = _this.context.router.history;

                //do not push history if the resulting click is the same as the current id

                var selected = _this.state.selected;


                if (itemId !== selected) {
                    history.push('/' + itemId);
                }
            };

            _this.state = { selected: null };
            return _this;
        }

        _createClass(SideNavWithRR4, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                var history = this.context.router.history;

                history.listen(this.onHistoryChanged);
                var pathname = history.location.pathname;

                this.setPathAsSelectedId(pathname, this.props.default);
            }
        }, {
            key: 'render',
            value: function render() {
                var _props = this.props,
                    children = _props.children,
                    others = _objectWithoutProperties(_props, ['children']);

                return _react2.default.createElement(
                    _SideNav.SideNav,
                    _extends({}, others, { onItemSelection: this.onItemSelection, selected: this.state.selected }),
                    children
                );
            }
        }]);

        return SideNavWithRR4;
    }(_react2.default.Component), _class.propTypes = {
        children: _propTypes2.default.node,
        default: _propTypes2.default.string //if the path does not match, then use this as the selected
    }, _class.contextTypes = {
        router: _propTypes2.default.shape({
            history: _propTypes2.default.object.isRequired,
            route: _propTypes2.default.object.isRequired
        })
    }, _temp;
};
exports.withRR4 = withRR4;