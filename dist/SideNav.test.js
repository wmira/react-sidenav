'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _enzyme = require('enzyme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('SideNav', function () {

    it('can automatically manage state of the items when defaultSelected is passed and default is selected', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
            _index2.default,
            { defaultSelected: 'nav' },
            _react2.default.createElement(
                _index.Nav,
                { id: 'nav' },
                _react2.default.createElement(
                    _index.NavIcon,
                    null,
                    _react2.default.createElement(
                        'span',
                        { className: 'iconCls' },
                        'icon'
                    )
                ),
                _react2.default.createElement(
                    _index.NavText,
                    null,
                    _react2.default.createElement(
                        'span',
                        { className: 'textCls' },
                        'icon'
                    )
                )
            ),
            _react2.default.createElement(
                _index.Nav,
                { id: 'nav2' },
                _react2.default.createElement(
                    _index.NavIcon,
                    null,
                    _react2.default.createElement(
                        'span',
                        { className: 'iconCls' },
                        'icon'
                    )
                ),
                _react2.default.createElement(
                    _index.NavText,
                    null,
                    _react2.default.createElement(
                        'span',
                        { className: 'textCls' },
                        'icon'
                    )
                )
            )
        ));

        expect(wrapper.state().selected).toEqual('nav');
        var navItems = wrapper.find('.__rsnav___item');
        expect(navItems.length).toBe(2);
        var nav2 = navItems.at(1);
        nav2.simulate('click');

        expect(wrapper.state().selected).toEqual('nav2');
    });

    it('behaves as a stateless component when default selected is not passed.', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
            _index2.default,
            { selected: 'nav' },
            _react2.default.createElement(
                _index.Nav,
                { id: 'nav' },
                _react2.default.createElement(
                    _index.NavIcon,
                    null,
                    _react2.default.createElement(
                        'span',
                        { className: 'iconCls' },
                        'icon'
                    )
                ),
                _react2.default.createElement(
                    _index.NavText,
                    null,
                    _react2.default.createElement(
                        'span',
                        { className: 'textCls' },
                        'icon'
                    )
                )
            ),
            _react2.default.createElement(
                _index.Nav,
                { id: 'nav2' },
                _react2.default.createElement(
                    _index.NavIcon,
                    null,
                    _react2.default.createElement(
                        'span',
                        { className: 'iconCls' },
                        'icon'
                    )
                ),
                _react2.default.createElement(
                    _index.NavText,
                    null,
                    _react2.default.createElement(
                        'span',
                        { className: 'textCls' },
                        'icon'
                    )
                )
            )
        ));

        expect(wrapper.state().selected).toEqual(undefined);
        var navItems = wrapper.find(_index.Nav);
        expect(navItems.length).toBe(2);
        var nav2 = navItems.at(1);
        nav2.simulate('click');

        //this will not have state still
        expect(wrapper.state().selected).toEqual(undefined);
    });

    it('when re-rendered with a new props, the selected is updated', function (done) {
        var onClick = function onClick(id) {

            wrapper.setProps({ selected: id }, function () {
                expect(wrapper.prop('selected')).toEqual('nav2');
                done();
            });
        };
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
            _index2.default,
            { selected: 'nav', onItemSelection: onClick },
            _react2.default.createElement(
                _index.Nav,
                { id: 'nav' },
                _react2.default.createElement(
                    _index.NavIcon,
                    null,
                    _react2.default.createElement(
                        'span',
                        { className: 'iconCls' },
                        'icon'
                    )
                ),
                _react2.default.createElement(
                    _index.NavText,
                    null,
                    _react2.default.createElement(
                        'span',
                        { className: 'textCls' },
                        'icon'
                    )
                )
            ),
            _react2.default.createElement(
                _index.Nav,
                { id: 'nav2' },
                _react2.default.createElement(
                    _index.NavIcon,
                    null,
                    _react2.default.createElement(
                        'span',
                        { className: 'iconCls' },
                        'icon'
                    )
                ),
                _react2.default.createElement(
                    _index.NavText,
                    null,
                    _react2.default.createElement(
                        'span',
                        { className: 'textCls' },
                        'icon'
                    )
                )
            )
        ));

        var navItems = wrapper.find('.__rsnav___item');
        expect(navItems.length).toBe(2);
        var nav2 = navItems.at(1);
        nav2.simulate('click');
    });
});