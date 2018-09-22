
//
import * as React from 'react'

import { SideNav } from "react-sidenav/SideNav";
import { Nav } from "react-sidenav/nav/Nav";
import { IExampleProp } from 'react-sidenav/playground/IExampleProp';


import { withBaseIcon } from 'react-icons-kit'
import {
    ic_dashboard,
    ic_face,
    ic_assignment,
    ic_insert_chart
} from 'react-icons-kit/md'
import { INavTheme } from 'react-sidenav/types';
import styled from 'styled-components';


const theme: INavTheme = {
    color: '#AEB7C2',
    selectionColor: '#00AAFF',
    selectionIconColor: '#FFF',
    selectionBgColor: '#252c35',
    bgColor: '#2B333E',
    hoverBgColor: '#252c35',
    hoverColor: '#00AAFF',

}
const BaseIcon = withBaseIcon({ size: 20 })
// to center the children
const Icon = styled(BaseIcon)`
    margin-right: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
`
export const WithTextAndIcons = (props:  IExampleProp ) => (
    <SideNav
        theme={theme}
        selectedPath={props.selectionPath}
        onItemSelection={props.onItemSelection}>

        <Nav id='1'>
            Dashboard
            <Icon icon={ic_dashboard}/>
        </Nav>
        <Nav id='2'>
            Customers
            <Icon icon={ic_face}/>
        </Nav>
        <Nav id='3'>

            Orders
            <Icon  icon={ic_assignment}/>
        </Nav>
        <Nav id='4'>

            Statistics
            <Icon icon={ic_insert_chart}/>
        </Nav>
    </SideNav>
)