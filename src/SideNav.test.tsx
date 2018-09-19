
import * as React from 'react'
import { mount } from 'enzyme';

import { SideNav } from './SideNav'
import { Nav } from 'react-sidenav/nav/Nav';
import { ISideNavProp } from 'react-sidenav/types';


describe('<SideNav/>', () => {
    it('manages state internally if defaultSelectionPath is passed', () => {
        const wrapper = mount((
            <SideNav
                defaultSelectedPath='2'>
                <Nav id="1" />
            </SideNav>
        ))

        wrapper.find(Nav).simulate("click")
        expect(wrapper.state("selectedPath")).toBe("1")
    })
    it("calls onItemSelected listener when path is clicked", () => {
        const listener = jest.fn();
        const wrapper = mount((
            <SideNav
                onItemSelection={listener}
                selectedPath='1'>
                <Nav id="1" />
            </SideNav>
        ))

        wrapper.find(Nav).simulate("click")

        expect(listener.mock.calls.length).toBe(1)
        const arg = listener.mock.calls[0][0]

        expect(arg.path).toBe("1")
        expect(arg.id).toBe("1")
        expect(arg.payload).toBe(undefined)
    })

    it("calls onItemSelected with payload if Nav has payload", () => {
        const listener = jest.fn();
        const wrapper = mount((
            <SideNav
                onItemSelection={listener}
                selectedPath='1'>
                <Nav id="1" payload={"banana"}/>
            </SideNav>
        ))

        wrapper.find(Nav).simulate("click")

        expect(listener.mock.calls.length).toBe(1)
        const arg = listener.mock.calls[0][0]

        expect(arg.path).toBe("1")
        expect(arg.id).toBe("1")
        expect(arg.payload).toBe("banana")
    })

    it("will use defaultSelectedPath initially, then use internal state in subsequent call", () => {
        const listener = jest.fn();
        const wrapper = mount<ISideNavProp, { selectedPath: string }>((
            <SideNav
                onItemSelection={listener}
                defaultSelectedPath='2'>
                <Nav id="1" payload={"banana"}/>
            </SideNav>
        ))

        expect(wrapper.state('selectedPath')).toBe('2')
        wrapper.find(Nav).simulate("click")

        expect(listener.mock.calls.length).toBe(1)
        const arg = listener.mock.calls[0][0]

        expect(arg.path).toBe("1")
        expect(arg.id).toBe("1")
        expect(arg.payload).toBe("banana")
        expect(wrapper.state('selectedPath')).toBe('1')
    })
})
