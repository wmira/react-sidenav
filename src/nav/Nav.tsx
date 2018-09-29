import * as React from 'react'
import { INavProp, ISideNavContext } from '../types'
import { Consumer } from 'react-sidenav/Context';
import { createNavItemProp } from 'react-sidenav/nav/createNavItemProp';

import { PATH_SEPARATOR } from 'react-sidenav/constants';
import { NavRenderer } from 'react-sidenav/nav/NavRenderer';


export class Nav extends React.PureComponent<INavProp> {

    public renderNavView = (context: ISideNavContext) => {

        const navItemProp = createNavItemProp(this.props, context.theme, context.template, context.selectedPath, PATH_SEPARATOR)

        // we need 1 more layer so pass in our actual prop
        return (
            <NavRenderer {...navItemProp}> { this.props.children }</NavRenderer>
        )
    }

    public render() {

        return (
            <Consumer >
                { this.renderNavView }
            </Consumer>
        )
    }
}