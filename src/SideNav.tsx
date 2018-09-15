
import * as React from 'react'
import styled from 'styled-components'
import { Provider } from './Context';
import { ISideNavProp, OnItemSelectionListener, IOnItemSelectionArg } from './types';
import { BasicTemplate, BasicTheme } from './BasicTemplate';


const Container = styled.div`
    width: 100%;
    height: 100%;
`

export class SideNav extends React.Component<ISideNavProp> {


    constructor(props: ISideNavProp) {
        super(props)
    }

    private onItemSelection = (arg: IOnItemSelectionArg) => {

        if ( this.props.onItemSelection ) {
            this.props.onItemSelection(arg)
        }
    }

    public render() {  
        const { selectedPath } = this.props
        const value = {
            selectedPath, 
            onItemSelection: this.onItemSelection,
            navTemplate: this.props.navTemplate || BasicTemplate,
            theme: this.props.theme || BasicTheme
        }
        return (
            <Provider 
                value={value}>
                <Container>{ this.props.children || null }</Container>
            </Provider>
        )
    }
}