
import * as React from 'react'
import styled from 'styled-components'

import { Container } from 'react-sidenav/playground/Container';
import { IOnItemSelectionArg } from 'react-sidenav/types';
import { IExampleProp } from 'react-sidenav/playground/IExampleProp';
import { Scheme } from 'react-sidenav/types/Scheme';

const SideNavCnt = styled.div`
    padding: 12px 0px;
    height: 100%;
    width: 100%;
`

export interface ISideNavViewProp {
    className?: string
    sidenav: React.ComponentType<IExampleProp>
    children?: () => React.ReactElement<any>
    scheme?: Scheme
}

interface IApState {
    selectionPath?: string
    selectedId?: string
}
export class SideNavView extends React.Component<ISideNavViewProp ,IApState> {

    public state = { selectionPath: '1' }

    public onItemSelection = (arg: IOnItemSelectionArg) => {

        this.setState({ selectionPath: arg.path, selectedId: arg.id })
    }

    public render() {
        const SideNavEl = this.props.sidenav

        return (
            <Container>
                <SideNavCnt className={this.props.className}>
                    <SideNavEl
                        scheme={this.props.scheme}
                        selectionPath={this.state.selectionPath}
                        onItemSelection={this.onItemSelection}/>
                </SideNavCnt>
            </Container>
        )
    }


}



// import styled from 'styled-components'
// import { InlineItems, Center } from 'react-containers'
// import { Icon } from 'react-icons-kit'
// const { fileEmpty } = require('react-icons-kit/icomoon/fileEmpty')
// const { stack } = require('react-icons-kit/icomoon/stack')

// import { SideNav as BaseSideNav } from '../SideNav'
// import { Nav, NavItemContainer as BaseNavItemContainer, ContainerProp } from '../Nav'
// import { SideNavProps } from '../types';


// export const SideNav = styled<SideNavProps>(BaseSideNav)`
//     width: 180px;
//     height: 100%;
//     background: #EDF2F4;
//     color: #2B2D42;
//     font-size: 0.9em;
// `


// const Item = (props: { children: React.ReactNode}) => (
//     <InlineItems><Center>{ props.children }</Center></InlineItems>
// )

// export const ItemText = styled.span`
//     font-weight: bold;
//     padding-left: 6px;
// `

// const NavItem = styled(BaseNavItemContainer)`

//     padding: 8px 12px;
//     background: ${ (props:ContainerProp) => props.isSelected ? '#D90429': 'transparent'};
//     color: ${ ( props: ContainerProp) => props.isSelected ? '#FFF' : 'inherit'};
//     transition: all 250ms ease-out;
//     &:hover {
//         background: #D90429;
//         color: #FFF;
//     }
// `

// export const NavItem2 = styled(BaseNavItemContainer)`
//     margin: 4px 12px;
//     padding: 8px 12px;
//     text-align: center;
//     background: ${ (props:ContainerProp) => props.isSelected ? '#d2d4d5': 'transparent'};
//     transition: all 250ms ease-out;
//     &:hover {
//         background: #d2d4d5;
//     }
// `

// export const NavItem3 = styled(BaseNavItemContainer)`
//     margin: 4px 12px;
//     padding: 8px 12px;
//     border-bottom: 1px solid ${ (props:ContainerProp) => props.isSelected ? '#1985A1': 'transparent'};
//     transition: all 250ms ease-out;
//     &:hover {
//         border-bottom: 1px solid ${ (props:ContainerProp) => props.isSelected ? '#1985A1': 'transparent'};
//     }
// `
// export const SimpleText = styled(BaseNavItemContainer)`
//     padding: 8px 12px;
//     text-align: left;
//     text-decoration: ${ (props: ContainerProp) => props.isSelected ? 'underline' : 'none '};
//     transition: all 250ms ease-in;

//     &:hover {
//         text-decoration: underline;
//     }
// `

// export default class BasicSideNav extends React.PureComponent<{ itemContainer?: React.ReactType, sideNavContainer?: BaseSideNav }, { selectedId: string }> {

//     public state: { selectedId: string }

//     constructor(props: {}) {
//         super(props)
//         this.state = {
//             selectedId: 'item1'
//         }
//     }

//     private onItemSelection = (id: string) => {
//         this.setState({ selectedId: id })
//     }

//     render() {
//         const SideNavToUse: React.ReactType<SideNavProps> = (this.props.sideNavContainer ? this.props.sideNavContainer : SideNav) as React.ReactType<SideNavProps>
//         const NavItemToUse = (this.props.itemContainer ? this.props.itemContainer : NavItem )
//         return (
//             <SideNavToUse
//                 selectedItem={this.state.selectedId}
//                 onItemSelection={this.onItemSelection}
//                 itemContainer={NavItemToUse}>
//                 <Nav id='item1'>
//                     <Item>
//                         <Icon icon={fileEmpty} />
//                         <ItemText>Item 1</ItemText>
//                     </Item>
//                 </Nav>
//                 <Nav id='item2'>
//                     <Item>
//                         <Icon icon={stack} />
//                         <ItemText>Item 2</ItemText>
//                     </Item>
//                 </Nav>
//             </SideNavToUse>
//         )
//     }
// }

// export class SideNavTextItem extends React.PureComponent<{ }, { selectedId: string }> {

//     public state: { selectedId: string }

//     constructor(props: {}) {
//         super(props)
//         this.state = {
//             selectedId: 'item1'
//         }
//     }

//     private onItemSelection = (id: string) => {
//         this.setState({ selectedId: id })
//     }

//     render() {

//         return (
//             <SideNav
//                 selectedItem={this.state.selectedId}
//                 itemContainer={SimpleText}
//                 onItemSelection={this.onItemSelection}>
//                 <Nav id='item1'>
//                     <ItemText>Item 1</ItemText>
//                 </Nav>
//                 <Nav id='item2'>
//                     <ItemText>Item 2</ItemText>
//                 </Nav>
//             </SideNav>
//         )
//     }
// }