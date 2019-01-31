
import * as React from 'react'
import styled from 'styled-components'
import { Provider } from './Context';
import { ISideNavProp, INavSelectionArg, ISideNavContext, INavProp } from './types';
import{ template as defaultTemplate } from './template'
import { Scheme } from 'react-sidenav/types/Scheme';

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
        const theme = this.props.theme || {}
        const scheme = this.props.scheme || Scheme.default

        const value: ISideNavContext = {
            selectedPath: selectedPath || '',
            onItemSelection: this.onItemSelection,
            template,
            theme,
            scheme,
            expandOnHover: this.props.expandOnHover || false
        }

        return (
            <Provider value={value}>
                <Container>
                   { this.props.children }
                </Container>
            </Provider>

        )
    }

    private onItemSelection = (arg: INavSelectionArg) => {

        if ( this.state.selectedPath ) {
            this.setState({ selectedPath: arg.path }, () => {
                this.dispatchItemSelection(arg)
            })
        } else {
            this.dispatchItemSelection(arg)
        }
    }

    private dispatchItemSelection = (arg: INavSelectionArg) => {
        if ( this.props.onItemSelection ) {
            this.props.onItemSelection(arg)
        }
    }
}
