
/** make sure we export properly */
import SideNav, { SideNav as SNav, Nav, NavItem, NavText } from './index';

describe('checking exports ', () => {
    it('exports SideNav, { SideNav, Nav, NavItem, NavText }', () => {
        expect(SideNav).toBeDefined();
        expect(SideNav).toBeDefined();
    });
});