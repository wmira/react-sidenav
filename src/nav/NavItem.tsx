import * as React from 'react'
import { INavItemProp } from "react-sidenav/types/INavItemProp";
import { Consumer } from 'react-sidenav/Context';
import { ISideNavContext, INavStateProp } from 'react-sidenav/types';

type NavItemViewProp = INavItemProp & { context: ISideNavContext }
export class NavItemView extends React.PureComponent<NavItemViewProp> {

    constructor(props: NavItemViewProp) {
        super(props)

    }

    public render() {

        const { children, context, pathId } = this.props
        const { template, scheme } = this.props.context
        const Template = template.item //  isChild ? template.navChild || NavChildTemplate : ( template.nav || NavTemplate )

        const navStateProp: INavStateProp = {
            theme: context.theme || {},
            selected: context.selectedPath === pathId,
            expanded: undefined,
            navProp: this.props,
            level: this.props.level,
            template: this.props.context.template,
            pathId: this.props.pathId,
            scheme
        }

        return (
            <div onClick={this.dispatchOnClick}>
                <Template { ...navStateProp }>
                    { children || null }
                </Template>

            </div>
        )
    }

    private dispatchOnClick = () => {

        const arg = {
            id: this.props.navProp.id,
            path: this.props.pathId,
            payload: this.props.navProp.payload
        }
        if ( this.props.onClick ) {
            try {
                this.props.onClick({ ...arg })
            } catch ( e ){
                // ignored
            }
        }

        if ( this.props.context.onItemSelection  ) {
            this.props.context.onItemSelection(arg)
        }
    }
}

export class NavItem extends React.PureComponent<INavItemProp> {

    public renderNavView = (context: ISideNavContext) => {
        return (
            <NavItemView {...this.props} context={context}>
                { this.props.children }
            </NavItemView>
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