
/** make sure we export properly */
import SideNav, { SideNav as SNav, Nav, NavIcon, NavText } from './index';

describe('checking exports ', () => {
    it('exports SideNav, { SideNav, Nav, NavIcon, NavText }', () => {
        expect(SideNav).toBeDefined();
        expect(SNav).toBeDefined();
        expect(Nav).toBeDefined();
        expect(NavIcon).toBeDefined();
        expect(NavText).toBeDefined();
    });
});