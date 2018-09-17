
import * as React from 'react'
import styled from 'styled-components'
import { Provider } from './Context';
import { ISideNavProp, IOnItemSelectionArg, ISideNavContext } from './types';
import { template as defaultTemplate, theme as defaultTheme  } from './templates/Basic';


const Container = styled.div`
    width: 100%;
    height: 100%;
`

interface ISideNavState {
    selectedPath: string | undefined
}

export class SideNav extends React.Component<ISideNavProp, ISideNavState> {

    public state: ISideNavState = { selectedPath: undefined }

    constructor(props: ISideNavProp) {
        super(props)
        if ( this.props.defaultSelectedPath ) {
            this.setState({ selectedPath: this.props.defaultSelectedPath })
        }
    }

    public render() {
        const selectedPath = this.props.selectedPath || this.props.defaultSelectedPath
        const propsTemplate = { ...this.props.template }
        const template = { ...defaultTemplate, ...propsTemplate }
        const theme = { ...defaultTheme, ...this.props.theme }
        const value: ISideNavContext = {
            selectedPath,
            onItemSelection: this.onItemSelection,
            template,
            theme
        }
        return (
            <Provider
                value={value}>
                <Container>{ this.props.children || null }</Container>
            </Provider>
        )
    }

    private onItemSelection = (arg: IOnItemSelectionArg) => {

        if ( this.state.selectedPath ) {
            this.setState({ selectedPath: arg.path }, () => {
                this.dispatchItemSelection(arg)
            })
        } else {
            this.dispatchItemSelection(arg)
        }
    }

    private dispatchItemSelection = (arg: IOnItemSelectionArg) => {
        if ( this.props.onItemSelection ) {
            this.props.onItemSelection(arg)
        }
    }
}