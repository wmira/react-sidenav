
import * as React from 'react'
import { INavItemProp } from "react-sidenav/types/INavItemProp";
import { ISideNavContext } from "react-sidenav/types";
import { isExpanded } from 'react-sidenav/nav/isExpanded';
import { createNavItemProp } from 'react-sidenav/nav/createNavItemProp';
import { NavItem } from 'react-sidenav/nav/NavItem';
import { PATH_SEPARATOR } from 'react-sidenav/constants';
import { NavRenderer } from 'react-sidenav/nav/NavRenderer';

interface INavChildrenState {
    isExpanded: boolean
}

type NavItemWithChildrenProp = INavItemProp & { parentPathId: string, nonNavChildren: any, context: ISideNavContext }
export class NavItemWithChildren extends React.Component<NavItemWithChildrenProp> {

    public state = { isExpanded: false }
    constructor(props: NavItemWithChildrenProp) {
        super(props)
        this.state = {
            isExpanded: Boolean(isExpanded(props.pathId, this.props.context.selectedPath))
        }
    }

    public onClick = () => {

        this.setState((state: INavChildrenState) => {
            return { isExpanded: !state.isExpanded }
        })
    }
    public render() {
        const { props } = this
        const { context } = props

        const ChildrenContainer = context.template.children

        return (
            <>
                <NavItem
                    {...this.props}
                    onClick={this.onClick}
                    parentPathId={this.props.pathId}
                    expanded={this.state.isExpanded}
                    isLeaf={false}
                >
                        { this.props.nonNavChildren }
                </NavItem>
                <ChildrenContainer
                    {...this.props }
                    expanded={this.state.isExpanded}>

                        { React.Children.toArray(this.props.children).map( (child: React.ReactElement<any>, idx: number) => {
                            const navItemProp = createNavItemProp(child.props, props.theme, props.template, context.selectedPath, PATH_SEPARATOR, this.props.parentPathId)
                            return (
                                <NavRenderer
                                    {...navItemProp}
                                    parentPathId={this.props.pathId}
                                    key={idx}>
                                    { child.props.children }
                                </NavRenderer>
                            )
                        })}
                </ChildrenContainer>
            </>
        )
    }
}
