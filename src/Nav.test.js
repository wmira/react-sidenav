
import React from 'react';
import { Nav, NavIcon, NavText } from './index';
import { mount } from 'enzyme';

describe('Nav', () => {

    it('should take children of NavIcon and NavText and renders it but not NavIcon', () => {
        const wrapper = mount(
            <Nav id='nav'>
                <NavIcon><span className='iconCls'>icon</span></NavIcon>
                <NavText><span className='textCls'>icon</span></NavText>
            </Nav>
        );
        expect(wrapper.find('.iconCls').length).toBe(1);
        expect(wrapper.find('.textCls').length).toBe(1);
    });

    it('onClick will be called when Nav is clicked and id is passed', () => {
        const listener = jest.fn();
        const wrapper = mount(
            <Nav id='nav' onClick={listener}>
                <NavIcon><span className='iconCls'>icon</span></NavIcon>
                <NavText><span className='textCls'>icon</span></NavText>
            </Nav>
        );
        wrapper.find(Nav).simulate('click');
        expect(listener).toHaveBeenCalled();
        expect(listener.mock.calls[0][0]).toEqual('nav');
    });

    it('can render sub navigation', () => {
        const wrapper = mount(
            <Nav id='nav'>
                <NavIcon><span className='iconCls'>icon</span></NavIcon>
                <NavText><span className='textCls'>icon</span></NavText>
                <Nav id='subNav'>
                    <NavIcon><span className='iconCls'>icon</span></NavIcon>
                    <NavText><span className='textCls'>icon</span></NavText>
                </Nav>
            </Nav>
        );
        wrapper.find(Nav).simulate('click');
        expect(wrapper.find('.__rsnav___item').length).toBe(1);
        expect(wrapper.find('.__rsnav___itemchild').length).toBe(1);
    });
});