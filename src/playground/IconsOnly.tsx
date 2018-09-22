
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
    selectionColor: '#FFF',
    selectionBgColor: '#00AAFF',
    bgColor: '#2B333E',
    hoverBgColor: '#252c35',
    hoverColor: '#00AAFF',

}
const BaseIcon = withBaseIcon({ size: 32 })
// to center the children
const Icon = styled(BaseIcon)`
    margin-right: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
`

const Notice = styled.div`
    position: absolute;
    margin: auto;
    right: 16px;
    bottom: 0px;
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #6470C9;
    width: 20px;
    height: 20px;
    color: #FFF;
    border-radius: 50%;
    font-size: 0.80em;
    font-weight: bold;
`

export const IconsOnly = (props:  IExampleProp ) => (
    <SideNav
        theme={theme}
        selectedPath={props.selectionPath}
        onItemSelection={props.onItemSelection}>

        <Nav id='1'>
            <Icon icon={ic_dashboard}/>
        </Nav>
        <Nav id='2'>
            <Icon icon={ic_face}/>
        </Nav>
        <Nav id='3'>
            <Icon icon={ic_assignment}/>
            <Notice>17</Notice>
        </Nav>
        <Nav id='4'>
            <Icon  icon={ic_insert_chart}/>
        </Nav>
    </SideNav>
)