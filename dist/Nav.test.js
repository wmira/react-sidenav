'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

var _enzyme = require('enzyme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe.only('Nav', function () {

    it('should take children of NavIcon and NavText and renders it but not NavIcon', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
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
                    'text'
                )
            )
        ));
        expect(wrapper.find('.iconCls').length).toBe(1);
        expect(wrapper.find('.textCls').length).toBe(1);
    });

    it('onClick will be called when Nav is clicked and id is passed', function () {
        var listener = jest.fn();
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
            _index.Nav,
            { id: 'nav', onClick: listener },
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
                    'text'
                )
            )
        ));
        wrapper.find('.__rsnav___item').simulate('click');
        expect(listener).toHaveBeenCalled();
        expect(listener.mock.calls[0][0]).toEqual('nav');
    });

    it('can render sub navigation', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
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
                    'text'
                )
            ),
            _react2.default.createElement(
                _index.Nav,
                { id: 'subNav' },
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
                        'text'
                    )
                )
            )
        ));
        wrapper.find('.__rsnav___item').simulate('click');
        expect(wrapper.find('.__rsnav___item').length).toBe(1);
        expect(wrapper.find('.__rsnav___itemchild').length).toBe(1);
    });

    it('NavIcon can be optional', function () {

        //this should not throw error
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
            _index.Nav,
            { id: 'nav' },
            _react2.default.createElement(
                _index.NavText,
                null,
                _react2.default.createElement(
                    'span',
                    { className: 'textCls' },
                    'text'
                )
            )
        ));

        wrapper.find('.__rsnav___item').simulate('click');
        expect(wrapper.find('.__rsnav___item').length).toBe(1);
    });
    it('NavText can be optional', function () {

        //this should not throw error
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
            _index.Nav,
            { id: 'nav' },
            _react2.default.createElement(
                _index.NavIcon,
                null,
                _react2.default.createElement(
                    'span',
                    { className: 'textCls' },
                    'icon'
                )
            )
        ));

        wrapper.find('.__rsnav___item').simulate('click');
        expect(wrapper.find('.__rsnav___item').length).toBe(1);
    });
});