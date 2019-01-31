
import * as React from 'react'
import { INavItemProp } from "react-sidenav/types/INavItemProp";
import { ISideNavContext } from "react-sidenav/types";
import { isExpanded } from 'react-sidenav/nav/isExpanded';
import { createNavItemProp } from 'react-sidenav/nav/createNavItemProp';
import { NavItem } from 'react-sidenav/nav/NavItem';
import { PATH_SEPARATOR } from 'react-sidenav/constants';
import { NavRenderer } from 'react-sidenav/nav/NavRenderer';
import { template as DefaultTemplate } from 'react-sidenav/template/Default';

interface INavChildrenState {
    isExpanded: boolean
    isHovered: boolean
}

type NavItemWithChildrenProp = INavItemProp & { parentPathId: string, nonNavChildren: any, context: ISideNavContext }
export class NavItemWithChildren extends React.Component<NavItemWithChildrenProp> {

    public state = { isExpanded: false, isHovered: false }
    constructor(props: NavItemWithChildrenProp) {
        super(props)
        this.state = {
            isExpanded: Boolean(isExpanded(props.pathId, this.props.context.selectedPath)),
            isHovered: false
        }
    }

    public onClick = () => {

        this.setState((state: INavChildrenState) => {
            return { isExpanded: !state.isExpanded }
        })
    }
    public onMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {

        e.stopPropagation()
        this.toggleHovered()

    }
    public onMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {

        e.stopPropagation()
        this.toggleHovered()

    }
    public toggleHovered = () => {
        if ( this.props.context.expandOnHover ) {
            this.setState((state: INavChildrenState) => {
                return { ...state, isHovered: !state.isHovered }
            })
        }

    }
    public toggleExpand = () => {
        this.setState((state: INavChildrenState) => {
            return { isExpanded: !state.isExpanded }
        })
    }
    public render() {
        const { props } = this
        const { context } = props

        const ChildrenContainer = context.template.children || DefaultTemplate.children!

        return (
            <>
                <NavItem
                    {...this.props}
                    onClick={this.onClick}
                    parentPathId={this.props.pathId}
                    expanded={this.state.isExpanded || this.state.isHovered}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseEnter}
                    isLeaf={false}
                >
                        { this.props.nonNavChildren }
                </NavItem>
                <ChildrenContainer
                    {...this.props }
                    expanded={this.state.isExpanded || this.state.isHovered}>

                        { React.Children.toArray(this.props.children).map( (childArg: any, idx: number) => {
                            const child = childArg as React.ReactElement<any>
                            const navItemProp = createNavItemProp(child.props,
                                                                props.theme,
                                                                props.template,
                                                                context.selectedPath,
                                                                PATH_SEPARATOR,
                                                                this.props.parentPathId)
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
