
// import * as React from 'react'
// import { ISideNavContext, INavProp } from "react-sidenav/types";
// import { ReactElement, cloneElement } from "react";
// import { isNavType } from "react-sidenav/nav/isNavType";
// import { createNavItemProp } from "react-sidenav/nav/createNavItemProp";
// import { NavItem } from "react-sidenav/nav/NavItem";


// export const mapNavChildren = (props: INavProp, context: ISideNavContext, children: React.ReactNode) => {
//     // const childrenArr = React.Children.toArray(children)
//     // const nonNavChildren = childrenArr.filter( child => !isNavType(child as ReactElement<any>))
//     // const navChildren = childrenArr.filter(isNavType)
//     //                       .map( (child: ReactElement<INavProp>, idx: number) => {
//     //                         const navItemProps = createNavItemStateProp(
//     //                                                 props,
//     //                                                 context.theme,
//     //                                                 context.template,
//     //                                                 context.selectedPath,
//     //                                                 undefined,
//     //                                                 context.scheme)
//     //                             const childrenProp = child.props as { children?: React.ReactNode }
//     //                             return React.createElement(NavItem, { context, ...navItemProps }, ...React.Children.toArray(childrenProp.children)  )
//     //                       })

// }