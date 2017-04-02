
import React from 'react';
import SideNav, { Nav, NavIcon, NavText } from './index';
import { mount } from 'enzyme';

describe('SideNav', () => {

    it('can automatically manage state of the items when defaultSelected is passed and default is selected', () => {
        const wrapper = mount(
            <SideNav defaultSelected='nav'>
                <Nav id='nav'>
                    <NavIcon><span className='iconCls'>icon</span></NavIcon>
                    <NavText><span className='textCls'>icon</span></NavText>
                </Nav>
                <Nav id='nav2'>
                    <NavIcon><span className='iconCls'>icon</span></NavIcon>
                    <NavText><span className='textCls'>icon</span></NavText>
                </Nav>
            </SideNav>
        );

        expect(wrapper.state().selected).toEqual('nav');
        const navItems = wrapper.find('.__rsnav___item');
        expect(navItems.length).toBe(2);
        const nav2 = navItems.at(1);
        nav2.simulate('click');

        expect(wrapper.state().selected).toEqual('nav2');

    });

    it('behaves as a stateless component when default selected is not passed.', () => {
        const wrapper = mount(
            <SideNav selected='nav'>
                <Nav id='nav'>
                    <NavIcon><span className='iconCls'>icon</span></NavIcon>
                    <NavText><span className='textCls'>icon</span></NavText>
                </Nav>
                <Nav id='nav2'>
                    <NavIcon><span className='iconCls'>icon</span></NavIcon>
                    <NavText><span className='textCls'>icon</span></NavText>
                </Nav>
            </SideNav>
        );

        expect(wrapper.state().selected).toEqual(undefined);
        const navItems = wrapper.find(Nav);
        expect(navItems.length).toBe(2);
        const nav2 = navItems.at(1);
        nav2.simulate('click');

        //this will not have state still
        expect(wrapper.state().selected).toEqual(undefined);

    });

    it('when re-rendered with a new props, the selected is updated', (done) => {
        const onClick = (id) => {

            wrapper.setProps({selected: id}, () => {
                expect(wrapper.prop('selected')).toEqual('nav2');
                done();
            });

        };
        const wrapper = mount(
            <SideNav selected='nav' onItemSelection={onClick}>
                <Nav id='nav'>
                    <NavIcon><span className='iconCls'>icon</span></NavIcon>
                    <NavText><span className='textCls'>icon</span></NavText>
                </Nav>
                <Nav id='nav2'>
                    <NavIcon><span className='iconCls'>icon</span></NavIcon>
                    <NavText><span className='textCls'>icon</span></NavText>
                </Nav>
            </SideNav>
        );

        const navItems = wrapper.find('.__rsnav___item');
        expect(navItems.length).toBe(2);
        const nav2 = navItems.at(1);
        nav2.simulate('click');

    });
});