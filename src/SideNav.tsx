
import * as React from 'react'
import styled from 'styled-components'
import { Provider } from './Context';
import { ISideNavProp, IOnItemSelectionArg, ISideNavContext } from './types';
import { template as defaultTemplate  } from './templates/Basic';
import { baseTheme as defaultTheme } from './theme'

const Container = styled.div`
    width: 100%;
    height: 100%;
`

interface ISideNavState {
    selectedPath: string | undefined
    defaultSelectedPath: string | undefined
}

export class SideNav extends React.Component<ISideNavProp, ISideNavState> {

    public state: ISideNavState = { selectedPath: undefined, defaultSelectedPath: undefined }

    constructor(props: ISideNavProp) {
        super(props)
        if ( this.props.defaultSelectedPath ) {
            this.state = { selectedPath: this.props.defaultSelectedPath, defaultSelectedPath: this.props.defaultSelectedPath }
        }
    }

    public render() {
        const selectedPath = this.state.defaultSelectedPath !== undefined ? this.state.selectedPath : this.props.selectedPath
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