
import * as React from 'react'
import { INavViewProp } from 'react-sidenav/types/INavViewProp';
import { isExpanded } from 'react-sidenav/nav/isExpanded';
import { NavView } from 'react-sidenav/nav/NavView';
import { ChildrenTemplate, theme } from 'react-sidenav/templates/Basic';
import { ISideNavStateProp } from 'react-sidenav/types';
import { createPath } from 'react-sidenav/nav/createPath';

interface INavChildrenState {
    isExpanded: boolean
}

export class NavViewWithChildren extends React.Component<INavViewProp & { nav: React.ReactChild }, INavChildrenState > {

    constructor(props: INavViewProp & { nav: React.ReactChild }) {
        super(props)
        this.state = {
            isExpanded: Boolean(isExpanded(this.props.id, this.props.context.selectedPath))
        }
    }

    public onClick = () => {

        this.setState((state: INavChildrenState) => {
            return { isExpanded: !state.isExpanded }
        })
    }


    public render() {

        const childrenNodes: React.ReactChild[] = React.Children.toArray(this.props.children)
        const parentNode = this.props.nav || null

        const { id, context } = this.props
        const path = createPath(this.props)
        const navStateProp: ISideNavStateProp = {
            theme: context.theme || theme,
            selected: id !== undefined && context.selectedPath === path, // FIXME, parent should be considered
            expanded: undefined,
            navProp: this.props,
            level: this.props.parentId ? 1 : 0 // 1 level for now
        }
        // { [ ...childrenWithoutNav, ...navViewChildren ] }
        const ChildrenContainer = this.props.context.template.children || ChildrenTemplate

        return (
            <>
                <NavView
                    {...this.props}
                    onClick={this.onClick}>
                    { parentNode }
                </NavView>
                <ChildrenContainer
                    {...navStateProp}
                    selected={undefined}
                    expanded={this.state.isExpanded}>
                    { childrenNodes }
                </ChildrenContainer>
            </>
        )
    }
}