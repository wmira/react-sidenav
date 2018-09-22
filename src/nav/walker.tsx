import { ReactChild, ReactElement, createElement, ReactNode, Children } from "react";
import { INavItemProp } from "react-sidenav/types/INavItemProp";
import { Nav } from "react-sidenav/nav/Nav";
import { NavItem } from "react-sidenav/nav/NavItem";
import { isNavType } from "react-sidenav/nav/isNavType";
import { PATH_SEPARATOR } from "react-sidenav/constants";

export const walkChild = (children: ReactChild[], elements:Array<ReactElement<INavItemProp>>, pathId: string, level: number, collectNonNav: boolean) => {
    for ( const child of children ) {
        const reactElement = child as ReactElement<any>
        if ( reactElement.type === Nav ) {
            const props = reactElement.props as INavItemProp & { children?: ReactNode }
            const nonNav = Children.toArray(props.children).filter( (c: ReactElement<any>) => !isNavType(c) )
            const path = pathId ? `${pathId}${PATH_SEPARATOR}${props.id}` : props.id
            const navItemElement: ReactElement<INavItemProp> = createElement(NavItem,  { key: path, id: props.id, level, pathId: path, navProp: props, children: nonNav })
            elements.push(navItemElement)
            walkChild( Children.toArray(props.children)  || [], elements,  path, level + 1, false )
        } else {
            if ( collectNonNav ) {
                elements.push(child as ReactElement<any>)
            }
        }
    }
}

export const walk = (children: ReactChild[]): Array<ReactElement<any>> => {
    const elements: Array<ReactElement<INavItemProp>> = []
    walkChild(children, elements, undefined, 0, true)
    return elements

}