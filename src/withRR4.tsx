import * as React from 'react'

import { SideNav } from './SideNav'

import { ISideNavProp, INavSelectionArg } from "react-sidenav/types";
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { createLocation } from 'history'
import { PATH_SEPARATOR } from './constants'

interface IBaseProp {
    basePath?: string
    onHistoryChange?: (arg: INavSelectionArg) => void
}
type SideNavWithRR4Prop = ISideNavProp & RouteComponentProps<{}> & IBaseProp
export const withRR4 = () => {

    class BaseSideNavWithRR4 extends React.Component<SideNavWithRR4Prop, { init: boolean, selectedPath: string }> {
        public state = { selectedPath: '', init: false }
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

              this.setState({ selectedPath, init: true })
            } else {
              this.setState({ init: true })
            }

        }

        public onItemSelection = (arg: INavSelectionArg) => {
            const { location } = this.props
            const { payload } = arg
            const withToPayload = payload as { to: string }


            if ( payload && withToPayload.to ) {
                this.props.history.push(createLocation(withToPayload.to, null, undefined, location))

            } else {
                const basePath = this.props.basePath || '/'
                const path = arg.path.split(PATH_SEPARATOR).join('/')
                this.props.history.push(createLocation(`${basePath}${path}`, null, undefined, location))
            }
        }

        public componentDidUpdate(prevProps: SideNavWithRR4Prop) {
            if ( this.props.selectedPath !== prevProps.selectedPath ) {
                this.setState({ selectedPath: this.props.selectedPath || '' })
            }
        }

        public render() {

            if ( !this.state.init ) {
              return null
            }
            const {
                defaultSelectedPath,
                template,
                theme } = this.props

            const { selectedPath } = this.state
            const defaultSelection = selectedPath ? selectedPath : defaultSelectedPath
            return (
                <SideNav
                  onItemSelection={this.onItemSelection}
                  defaultSelectedPath={defaultSelection}
                  template={template}
                  theme={theme}>
                  { this.props.children }
                </SideNav>

            )
        }

    }

    return withRouter(BaseSideNavWithRR4)
}