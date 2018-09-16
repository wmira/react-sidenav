
import * as React from 'react'
import styled from 'styled-components'
import { Provider } from './Context';
import { ISideNavProp, IOnItemSelectionArg, ISideNavContext } from './types';
import { template as defaultTemplate } from './templates/Basic';


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
        const propsTemplate = { ...this.props.template }        
        const template = { ...defaultTemplate, propsTemplate }

        const value: ISideNavContext = {
            selectedPath, 
            onItemSelection: this.onItemSelection,
            template,        
        }
        return (
            <Provider 
                value={value}>
                <Container>{ this.props.children || null }</Container>
            </Provider>
        )
    }
}