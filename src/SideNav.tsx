
import * as React from 'react'
import { Component, Children } from 'react'
import { SideNavProps } from './SideNavProps'

import { SideNavContainer } from './Containers'
import { NavItem } from './NavItem'

export class SideNav extends Component<SideNavProps> {

    constructor(props: SideNavProps) {
        super(props)
    }

    render() {     
        console.log(this.props.children)   
        return (
            <SideNavContainer className={this.props.className}>
                { this.props.children || null }
            </SideNavContainer>
        )
    }
}