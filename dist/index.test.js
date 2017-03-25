'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('checking exports ', function () {
    it('exports SideNav, { SideNav, Nav, NavItem, NavText }', function () {
        expect(_index2.default).toBeDefined();
        expect(_index2.default).toBeDefined();
    });
});
/** make sure we export properly */