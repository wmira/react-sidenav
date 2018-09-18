
import * as React from 'react'

import { withRR4, Nav, INavTheme } from 'react-sidenav'
import { IExampleProp } from 'react-sidenav/playground/IExampleProp';


const SideNav = withRR4()

const theme: INavTheme = {
    selectionColor: 'red'
}


export const WithRR4 = (props:  IExampleProp ) => {

    return (
        <SideNav
            theme={theme}
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
}