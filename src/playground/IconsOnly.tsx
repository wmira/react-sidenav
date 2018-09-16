// import * as React from 'react'

// import { SideNav } from "react-sidenav/SideNav";
// import { Nav } from "react-sidenav/nav/Nav";
// import { IExampleProp } from 'react-sidenav/playground/IExampleProp';
// import styled from 'styled-components';
// import { ISideNavStateProp, INavProp, ITemplate } from 'react-sidenav/types';
// import {
//     template as baseTemplate,
//     NavTemplate as BaseNavTemplate
// } from 'react-sidenav/templates/Basic';


// const NavTemplate = styled(BaseNavTemplate)`
//     border-left: ${ (props: ISideNavStateProp & INavProp) => props.selected ? '3px solid #028090' : '3px solid transparent' };
//     background: ${ (props: ISideNavStateProp & INavProp) => props.selected ? '' ;
// `
// const template: ITemplate = {
//     ...baseTemplate,
//     nav: NavTemplate,
//     theme: {
//         ...baseTemplate.theme,
//         selectionColor: 'inherit',
//         hoverBgColor: '#028090',
//         hoverColor: '#FFF'
//     }
// }

// export const Custom = (props:  IExampleProp ) => (
//     <SideNav
//         template={template}
//         selectedPath={props.selectionPath}
//         onItemSelection={props.onItemSelection}>

//         <Nav id='1'>
//             Item 1
//             <Nav id={'1'}>
//                 Item 1.1
//             </Nav>
//             <Nav id={'2'}>
//                 Item 1.2
//             </Nav>

//         </Nav>
//         <Nav id='2'>Item 2</Nav>
//         <Nav id='3'>Item 3</Nav>
//         <Nav id='4'>Item 4</Nav>
//     </SideNav>
// )