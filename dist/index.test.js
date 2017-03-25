'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('checking exports ', function () {
    it('exports SideNav, { SideNav, Nav, NavIcon, NavText }', function () {
        expect(_index2.default).toBeDefined();
        expect(_index.SideNav).toBeDefined();
        expect(_index.Nav).toBeDefined();
        expect(_index.NavIcon).toBeDefined();
        expect(_index.NavText).toBeDefined();
    });
});
/** make sure we export properly */