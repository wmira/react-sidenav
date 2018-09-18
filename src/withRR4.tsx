import * as React from 'react'

import { SideNav } from 'react-sidenav'

import { ISideNavProp, IOnItemSelectionArg } from "react-sidenav/types";
import { withRouter, RouteComponentProps } from 'react-router'
import { PATH_SEPARATOR } from './constants'
type SideNavWithRR4Prop = ISideNavProp & RouteComponentProps
export const withRR4 = () => {
    class BaseSideNavWithRR4 extends React.Component<SideNavWithRR4Prop, { selectedPath: string }> {

        constructor(props: SideNavWithRR4Prop) {
            super(props)
            const path = this.props.location.pathname
            if ( path ) {
                const pathArr = path.split("/")
                const index = path.startsWith("/") ? 1 : 0
                const initialPath = pathArr[index]
                this.state = { selectedPath: initialPath }
            } else {
                this.state = { selectedPath: this.props.selectedPath }
            }
        }

        public onItemSelection = (arg: IOnItemSelectionArg) => {
            const path = arg.path.split(PATH_SEPARATOR).join('/')

            this.props.history.push(`/${path}`)
            if ( this.props.onItemSelection ) {
                this.props.onItemSelection(arg)
            }
        }

        public componentDidUpdate(prevProps: SideNavWithRR4Prop) {
            if ( this.props.selectedPath !== prevProps.selectedPath ) {
                this.setState({ selectedPath: this.props.selectedPath })
            }
        }

        public render() {
            const {
                defaultSelectedPath,
                template,
                theme } = this.props

            return (
                <SideNav
                    onItemSelection={this.onItemSelection}
                    selectedPath={this.state.selectedPath}
                    defaultSelectedPath={defaultSelectedPath}
                    template={template}
                    theme={theme}>
                    { this.props.children }
                </SideNav>

            )
        }
    }

    return withRouter(BaseSideNavWithRR4)
}