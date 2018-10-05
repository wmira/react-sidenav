
import * as React from 'react'
import { mount } from 'enzyme';


import { Nav } from './';
import { withRR4 } from './withRR4'
import { MemoryRouter as Router, MemoryRouter } from 'react-router-dom'
import { SideNav } from 'react-sidenav/SideNav';

describe('withRR4', () => {
    it('selects the path when initial path is one from the nav item', () => {
        const SideNavWithRR4 = withRR4()

        const wrapper = mount((
            <MemoryRouter
                initialEntries={["/def"]}
                initialIndex={0}
                >
                <SideNavWithRR4
                    defaultSelectedPath='abc'>
                    <Nav id="abc">Nav</Nav>
                    <Nav id="def">Nav</Nav>
                </SideNavWithRR4>
            </MemoryRouter>
        ))

        const state = wrapper.find(SideNav).get(0)
        expect(state.props.selectedPath).toBe('def')

    })
})