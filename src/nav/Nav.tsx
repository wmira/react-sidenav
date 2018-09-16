import * as React from 'react'
import { ReactChild, Children } from 'react'
import { INavProp, ISideNavContext } from '../types'

import { isNavType } from './isNavType'
import { NavView } from './NavView';
import { mapNavChildren } from './mapNavChildren';
import { Consumer } from '../Context';
import { NavViewWithChildren } from 'react-sidenav/nav/NavViewWithChildren';

export class Nav extends React.PureComponent<INavProp> {

    public renderNavView = (context: ISideNavContext) => {
        const { children } = this.props

        const childrenWithoutNav: ReactChild[] = Children.toArray(children)
                                    .filter( child => !isNavType(child as React.ReactElement<any>))
        const navViewChildren = mapNavChildren(context, this.props )
        const hasChildren = navViewChildren.length > 0
        
        const argProps = {
            id: this.props.id,
            className: this.props.className,
            payload: this.props.payload,
            onClick: this.props.onClick,
            context: context
        }

        if ( hasChildren ) {
            return(                
                <NavViewWithChildren {...argProps}>    
                    { [ ...childrenWithoutNav, ...navViewChildren ] }
                </NavViewWithChildren>                
            )
        } else {            
            return (
                <NavView {...argProps}>
                    { childrenWithoutNav }                
                </NavView>
            )
        }
        
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

// const navChildren: ReactChild[] = Children.toArray(children)
        //                     .filter( child => isNavType(child as React.ReactElement<any>))
        //                     .map( (child: React.ReactElement<INavProp & { children?: React.ReactNode }>) => {                                
        //                         return (
        //                             <NavView
        //                                 key={`${this.props.id}|${child.props.id}`}
        //                                 parentId={this.props.id}
        //                                 id={child.props.id} 
        //                                 payload={this.props.payload}  
        //                                 context={context}
        //                                 onClick={this.props.onClick} 
        //                             >{ child.props.children }</NavView>
        //                         )
        //                     })