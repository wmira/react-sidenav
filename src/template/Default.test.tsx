
import * as React from 'react'
import { mount } from 'enzyme';

import { SideNav } from '../SideNav'
import{ Nav, NavText, NavIcon  } from '../'
import { Scheme } from 'react-sidenav/types/Scheme';

describe('<Default Template/>', () => {
    it('does not render NavText when scheme is compact', () => {
        const wrapper = mount((
            <SideNav
                scheme={Scheme.compact}
                defaultSelectedPath='2'>
                <Nav id="1">
                    <NavIcon><span id='icon'/></NavIcon>
                    <NavText><span id='text'/></NavText>
                </Nav>
            </SideNav>
        ))
        expect(wrapper.find('#icon').length).toBe(1)
        expect(wrapper.find('#text').length).toBe(0)
    })

})
