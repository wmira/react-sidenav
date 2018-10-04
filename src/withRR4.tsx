import * as React from 'react'

import { SideNav } from './SideNav'

import { ISideNavProp, INavSelectionArg } from "react-sidenav/types";
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { PATH_SEPARATOR } from './constants'

type SideNavWithRR4Prop = ISideNavProp & RouteComponentProps<{}> & { onHistoryChange?: (arg: INavSelectionArg) => void }
export const withRR4 = () => {
    class BaseSideNavWithRR4 extends React.Component<SideNavWithRR4Prop, { selectedPath: string }> {
        public state = { selectedPath: '' }
        constructor(props: SideNavWithRR4Prop) {
            super(props)
        }

        public componentDidMount() {
            const { location } = this.props
            if ( location && location.pathname ) {
                const pathsArr = location.pathname.split('/')
                                    .filter( path => path)

                const selectedPath = pathsArr.reduce((partial, path, index) => {
                    if ( index + 1 === pathsArr.length ) {
                        return `${partial}${path}`
                    }
                    return `${partial}${PATH_SEPARATOR}${path}`
                }, "")
                this.setState({ selectedPath })
            }
        }

        public onItemSelection = (arg: INavSelectionArg) => {
            const { match } = this.props
            const { payload } = arg
            const withToPayload = payload as { to: string }
            const slash = match.url.endsWith('/') ? '' : '/'
            if ( payload && withToPayload.to ) {
                this.props.history.push(`${match.url}${slash}${withToPayload.to}`)
            } else {
                const path = arg.path.split(PATH_SEPARATOR).join('/')
                this.props.history.push(`${match.url}${slash}${path}`)

            }
            if ( this.props.onItemSelection ) {
                this.props.onItemSelection(arg)
            }
            if ( this.props.onHistoryChange ) {
                this.props.onHistoryChange(arg)
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