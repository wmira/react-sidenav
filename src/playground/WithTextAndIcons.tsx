
//
import * as React from 'react'

import { SideNav } from "react-sidenav/SideNav";
import { Nav } from "react-sidenav/nav/Nav";
import { IExampleProp } from 'react-sidenav/playground/IExampleProp';

import { Icon } from 'react-icons-kit'
import {
    ic_dashboard,
    ic_face,
    ic_assignment,
    ic_insert_chart
} from 'react-icons-kit/md'

import {
    template as baseTemplate,
    NavIcon,
    NavText,
    theme as baseTheme
} from  'react-sidenav/templates/NavIconText'
import { INavTheme, ISideNavStateProp, INavProp } from 'react-sidenav/types';
import styled from 'styled-components';

const NavTemplate = styled(baseTemplate.nav)`
    border-left: ${ (props: ISideNavStateProp) => props.selected ? `4px solid ${props.theme.selectionColor}` : '4px solid transparent' };
    padding: ${ (props: ISideNavStateProp) => props.level === 0 ? '12px 14px' : '12px 22px' };

`

const template = {
    ...baseTemplate,
    nav: NavTemplate
}

const theme: INavTheme = {
    ...baseTheme,
    color: '#AEB7C2',
    selectionColor: '#00AAFF',
    selectionIconColor: '#00AAFF',
    selectionBgColor: '#252c35',
    bgColor: '#2B333E',
    hoverBgColor: '#252c35',
    hoverColor: '#00AAFF',

}

export const WithTextAndIcons = (props:  IExampleProp ) => (
    <SideNav
        theme={theme}
        template={template}
        selectedPath={props.selectionPath}
        onItemSelection={props.onItemSelection}>

        <Nav id='1'>
            <NavIcon><Icon size={20} icon={ic_dashboard}/> </NavIcon>
            <NavText> Dashboard </NavText>
        </Nav>
        <Nav id='2'>
            <NavIcon><Icon size={20} icon={ic_face}/> </NavIcon>
            <NavText> Customers </NavText>
        </Nav>
        <Nav id='3'>
            <NavIcon><Icon size={20} icon={ic_assignment}/> </NavIcon>
            <NavText> Orders </NavText>
        </Nav>
        <Nav id='4'>
            <NavIcon><Icon size={20} icon={ic_insert_chart}/> </NavIcon>
            <NavText> Statistics </NavText>
        </Nav>
    </SideNav>
)