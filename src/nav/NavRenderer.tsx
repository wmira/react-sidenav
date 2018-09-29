
import * as React from 'react'
import { INavItemProp, ISideNavContext } from "react-sidenav/types";
import { isNavType } from 'react-sidenav/nav/isNavType';
import { createNavItemProp } from 'react-sidenav/nav/createNavItemProp';
import { PATH_SEPARATOR } from 'react-sidenav/constants';
import { NavItem } from 'react-sidenav/nav/NavItem';
import { NavItemWithChildren } from 'react-sidenav/nav/NavItemWithChildren';
import { Consumer } from 'react-sidenav/Context';

export class NavRenderer extends React.Component<INavItemProp> {

    public renderNavView = (context: ISideNavContext) => {
        const childrenArr = React.Children.toArray(this.props.children)

        const nonNavChildren = childrenArr.filter( child => !isNavType(child as React.ReactElement<any>))
        const navChildren = childrenArr.filter(isNavType)

        const navItemProp = createNavItemProp(
                                this.props.navProp,
                                context.theme,
                                context.template,
                                context.selectedPath,
                                PATH_SEPARATOR,
                                this.props.parentPathId,
                                context.scheme)

        const parentPathId = this.props.navProp.id

        if ( navChildren.length === 0  ) {
            return (
                <NavItem {...navItemProp} context={context} isLeaf={true}>{ this.props.children }</NavItem>
            )
        } else {
            return (
                <NavItemWithChildren
                    nonNavChildren={nonNavChildren}
                    {...navItemProp}
                    parentPathId={parentPathId}
                    context={context}
                    isLeaf={false}
                >
                    { navChildren }
                </NavItemWithChildren>
            )
        }
        return null

    }

    public render() {

        return (
            <Consumer >
                { this.renderNavView }
            </Consumer>
        )
    }
}