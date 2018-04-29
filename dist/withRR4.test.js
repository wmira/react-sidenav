'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _index = require('./index');

var _enzyme = require('enzyme');

var _withRR = require('./withRR4');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SideNav = (0, _index.withRR4)();

describe('withRR4 test', function () {

    var createSideNav = function createSideNav() {
        var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';

        return _react2.default.createElement(
            _reactRouter.MemoryRouter,
            { initialEntries: [initial] },
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    SideNav,
                    { 'default': 'dashboard', highlightBgColor: 'blue', highlightColor: 'white' },
                    _react2.default.createElement(
                        _index.Nav,
                        { id: 'dashboard' },
                        _react2.default.createElement(
                            _index.NavText,
                            null,
                            '  Dashboard '
                        )
                    ),
                    _react2.default.createElement(
                        _index.Nav,
                        { id: 'sales' },
                        _react2.default.createElement(
                            _index.NavText,
                            null,
                            ' Sales '
                        ),
                        _react2.default.createElement(
                            _index.Nav,
                            { id: 'list' },
                            _react2.default.createElement(
                                _index.NavText,
                                null,
                                ' List Sales '
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _index.Nav,
                        { id: 'products' },
                        _react2.default.createElement(
                            _index.NavText,
                            null,
                            '  Products '
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_reactRouter.Route, { exact: true, path: '/', render: function render() {
                            return _react2.default.createElement(
                                'div',
                                { className: 'dashboard' },
                                'Dashboard'
                            );
                        } }),
                    _react2.default.createElement(_reactRouter.Route, { path: '/sales', render: function render() {
                            return _react2.default.createElement(
                                'div',
                                { className: 'sales' },
                                'Sales'
                            );
                        } }),
                    _react2.default.createElement(_reactRouter.Route, { path: '/products', render: function render() {
                            return _react2.default.createElement(
                                'div',
                                { className: 'products' },
                                'Products'
                            );
                        } })
                )
            )
        );
    };
    it('selects an item when visiting an entry using default ', function () {
        var SideNavElement = createSideNav();
        var wrapper = (0, _enzyme.mount)(SideNavElement);
        expect(wrapper.find('.dashboard').length).toBe(1);
    });
    it('selects an item when visiting an entry not using default', function () {
        var SideNavElement = createSideNav('/sales');
        var wrapper = (0, _enzyme.mount)(SideNavElement);
        expect(wrapper.find('.sales').length).toBe(1);
    });
    it('selecting an item changes the route automatically', function (done) {
        var SideNavElement = createSideNav('/');
        var wrapper = (0, _enzyme.mount)(SideNavElement);
        var nav = wrapper.find('.__rsnav___item').at(1); //select sales

        nav.simulate('click');
        setTimeout(function () {
            expect(wrapper.instance().history.location.pathname).toBe('/sales');
            done();
        }, 0);
    });

    it('pathToArray exclude / when path starts with /', function () {
        var path = '/a/b';
        var arrPath = (0, _withRR.pathToArray)(path);
        expect(arrPath[0]).toBe('a');
        expect(arrPath[1]).toBe('b');
        expect(arrPath.length).toBe(2);
    });
});