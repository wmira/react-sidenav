
// import * as React from 'react'

// import styled from 'styled-components'
// import { InlineItems } from 'react-containers'
// import Icon from 'react-icons-kit'
// const { fileEmpty } = require('react-icons-kit/icomoon/fileEmpty')

// import { SideNav as BaseSideNav } from '../SideNav'
// // import { NavItem } from '../NavItem'
// import { Nav } from '../Nav'


// export const SideNav = styled(BaseSideNav)`    
//     width: 180px;
//     height: 100%;    
//     background: #263238;
//     color: rgba(255,255,255,.75);
//     font-size: 0.9em;
//     overflow-y: auto;
// `



// export default class SubNavigation extends React.Component<any, any> {

//     constructor(props: {}) {
//         super(props)
//         this.state = {
//             selectedId: 'item1'
//         }
//     }

//     private onItemSelection = (id: string) => {
//         console.log('setting state ', id)
//         this.setState({ selectedId: id })
//     }

//     render() {
//         return (
//             <SideNav selectedItem={this.state.selectedId} onItemSelection={this.onItemSelection}>
//                 {/* <Nav id='item1'> 
//                     <NavItem >
//                         <InlineItems><Icon icon={fileEmpty} /> Item 1</InlineItems>
//                     </NavItem>
//                 </Nav>
//                 <Nav id='item2'>
//                     <NavItem>
//                         <InlineItems>Item 2</InlineItems>
//                     </NavItem>
//                     <Nav id='item3'>
//                         <NavItem>
//                             <InlineItems>Child Item 1</InlineItems>
//                         </NavItem>
//                     </Nav>
//                     <Nav id='item4'>
//                         <NavItem>
//                             <InlineItems>Child Item 2</InlineItems>
//                         </NavItem>
//                     </Nav>
//                 </Nav>
//                 <Nav id='item3'>
//                     <NavItem>
//                         <InlineItems>Item 3</InlineItems>
//                     </NavItem>
//                 </Nav>  */}
//             </SideNav>
//         )
//     }
// }