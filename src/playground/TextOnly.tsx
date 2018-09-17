import * as React from 'react'

import { SideNav } from "react-sidenav/SideNav";
import { Nav } from "react-sidenav/nav/Nav";
import { IExampleProp } from 'react-sidenav/playground/IExampleProp';

export const TextOnly = (props:  IExampleProp ) => (
    <SideNav
        selectedPath={props.selectionPath}
        onItemSelection={props.onItemSelection}>

        <Nav id='1'>
            <span>Item 1</span>
            <Nav id={'1'}>
                Item 1.1
            </Nav>
            <Nav id={'2'}>
                Item 1.2
            </Nav>
        </Nav>

        <Nav id='2'>
            <span>Item 2</span>
        </Nav>
        <Nav id='3'>
            <span>Item 3</span>
        </Nav>
        <Nav id='4'>
            <span>Item 4</span>
        </Nav>
    </SideNav>
)