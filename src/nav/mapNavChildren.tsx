
import * as React from 'react'
import { ReactChildren, Children, ReactChild, ReactElement } from "react";
import { isNavType } from "./isNavType";
import { INavProp, ISideNavContext } from "../types";
import { NavView } from './NavView';

export const mapNavChildren = (context: ISideNavContext, props: INavProp & { children?: React.ReactNode }): ReactElement<INavProp>[] => {
    
    const navChildren: ReactElement<INavProp>[] = Children.toArray(props.children)
                        .filter( child => isNavType(child as React.ReactElement<any>))
                        .map<ReactElement<INavProp>>( (child: React.ReactElement<INavProp & { children?: React.ReactNode }>) => {                                
                            return (
                                <NavView
                                    key={`${props.id}|${child.props.id}`}
                                    parentId={props.id}
                                    id={child.props.id} 
                                    payload={props.payload}  
                                    context={context}
                                    onClick={props.onClick} 
                                >{ child.props.children }</NavView>
                            )
                        })
    return navChildren
}
