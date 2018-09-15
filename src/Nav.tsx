
import * as React from 'react'
import { ReactElement, Children, ReactChild } from 'react'

import { Consumer } from './Context'

import styled from 'styled-components'
import { OnItemSelectionListener } from './types/OnItemSelectionListener';
import { ISideNavContext } from './types/ISideNavContext'
import { ISideNavStateProp } from './types';

export type ContainerProp = {
    isSelected: boolean
}

export const NavItemContainer = styled.div`
    cursor: pointer;
`

export interface INavProp<P = {}> {
    id?: string
    payload?: P /** the payload, passed when onClick is called */
    onClick?: OnItemSelectionListener
    className?: string
}

export interface INavRendererProp<P ={}> extends INavProp {

}

export interface NavState {
    isExpanded?: boolean
}


interface INavViewProp extends INavProp {
    context: ISideNavContext
    parentId?: string    
}
class NavView extends React.PureComponent<INavViewProp> {
    
    private dispatchOnClick = () => {

        const arg = {
            id: this.props.id, 
            path: this.props.id,
            payload: this.props.payload
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
    public render() {
        const { className, children, context, id } = this.props
        const Template = this.props.context.navTemplate

        const navStateProp: ISideNavStateProp = {
            theme: context.theme,
            isSelectedPath: id !== undefined && context.selectedPath === id, // FIXME, parent should be considered
            isExpanded: undefined,
            navProp: this.props
        }
        console.log(navStateProp.isSelectedPath)
        return (
            <div 
                onClick={this.dispatchOnClick} 
                className={className}>
                <Template { ...navStateProp }>
                    { children }
                </Template>
            </div>
        )
    }
}


export class Nav extends React.PureComponent<INavProp, NavState> {

    public renderNavView = (context:ISideNavContext) => {
       
        // const hasNavChild = Children.toArray(
        //                         this.props.children).reduce( (foundChild: boolean, child: ReactChild) => {
        //                             const el = child as ReactElement<any>
        //                             if ( !foundChild && el.type === Nav  ) {
        //                                 return true
        //                             }
        //                             return foundChild
        //                         }, false)

        return (
            <NavView
                id={this.props.id}                
                className={this.props.className}
                payload={this.props.payload}
                onClick={this.props.onClick} 
                context={context}>
                { this.props.children }
            </NavView>
        )
    }

    public render() {

        return (
            <Consumer>
                { this.renderNavView }
            </Consumer>
        )
        return
    }

}
