
import * as React from 'react'
import { Component } from 'react'

import { NavItemProps } from './SideNavProps'
import { NavItemContainer } from './Containers'

export class NavText extends Component {

}

export class NavIcon extends Component {

}

export class NavItem extends Component<NavItemProps> {

    public render() {
        const render: any = this.props.render
        return (
            <NavItemContainer className={this.props.className}>
                {this.props.children}
            </NavItemContainer>
        )
    }
}