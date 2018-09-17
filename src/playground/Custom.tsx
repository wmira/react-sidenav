import * as React from 'react'

import { SideNav } from "react-sidenav/SideNav";
import { Nav } from "react-sidenav/nav/Nav";
import { IExampleProp } from 'react-sidenav/playground/IExampleProp';
import styled from 'styled-components';
import { ISideNavStateProp, INavProp, ITemplateComponents } from 'react-sidenav/types';
import {
    template as baseTemplate,
    theme as baseTheme,
    NavTemplate as BaseNavTemplate
} from 'react-sidenav/templates/Basic';


const NavTemplate = styled(BaseNavTemplate)`
    background: ${ (props: ISideNavStateProp) => props.selected ? props.theme.selectionBgColor : 'inherit' };
`
const template: ITemplateComponents = {
    ...baseTemplate,
    nav: NavTemplate,

}

const theme = {
    ...baseTheme,
    selectionColor: '#FFF',
    selectionBgColor: '#028090',
    hoverBgColor: '#028090',
    hoverColor: '#FFF'
}

const Item = styled.div`
    display: flex;
`
const Icon = styled.i`
    width: 44px;
`
const Label = styled.div`
    line-height: 28px;
`

const NavItem = (props: {label: string, icon: string }) => {
    return (
        <Item>
            <Icon className={`fab fa-2x ${props.icon}`}/>
            <Label>{ props.label }</Label>
        </Item>
    )
}
export const Custom = (props:  IExampleProp ) => (
    <SideNav
        theme={theme}
        template={template}
        selectedPath={props.selectionPath}
        onItemSelection={props.onItemSelection}>

        <Nav id='1'>
            <NavItem icon={'fa-angular'} label={'Angular'}/>
            <Nav id={'1'}>
                Item 1.1
            </Nav>
            <Nav id={'2'}>
                Item 1.2
            </Nav>

        </Nav>
        <Nav id='2'>
            <NavItem icon={'fa-react'} label={'React'}/>
        </Nav>
        <Nav id='3'>
            <NavItem icon={'fa-ember'} label={'Ember'}/>
        </Nav>
        <Nav id='4'>
            <NavItem icon={'fa-vuejs'} label={'Vuejs'}/>
        </Nav>
    </SideNav>
)