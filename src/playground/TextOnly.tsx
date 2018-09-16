import * as React from 'react'

import { SideNav } from "react-sidenav/SideNav";
import { Nav } from "react-sidenav/nav/Nav";
import { IExampleProp } from 'react-sidenav/playground/IExampleProp';

export const TextOnly = (props:  IExampleProp ) => (
    <SideNav
        selectedPath={props.selectionPath}
        onItemSelection={props.onItemSelection}>

        <Nav id='1'>
            Item 1
            <Nav id={'1'}>
                Item 1.1
            </Nav>
            <Nav id={'2'}>
                Item 1.2
            </Nav>
        </Nav>

        <Nav id='2'>Item 2</Nav>
        <Nav id='3'>Item 3</Nav>
        <Nav id='4'>Item 4</Nav>
    </SideNav>
)