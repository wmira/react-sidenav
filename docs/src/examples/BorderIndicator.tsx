import * as React from 'react'

import styled from 'styled-components'
import { SideNav, Nav, NavContext } from 'react-sidenav'
import {globe as dashboardIcon} from 'react-icons-kit/entypo/globe'
import {credit_card as transactionsIcon} from 'react-icons-kit/ikons/credit_card'
import {users as usersIcon} from 'react-icons-kit/entypo/users'
import {codepen as salesIcon} from 'react-icons-kit/icomoon/codepen'
import {ic_move_to_inbox as leadsIcon} from 'react-icons-kit/md/ic_move_to_inbox'
import {ic_grain as statsIcon} from 'react-icons-kit/md/ic_grain'
import { Icon } from 'react-icons-kit'

const Container = styled.div`
  background: #FFF;
  width: 200px;
  height: 360px;
  color: #444;
  border: 1px solid #E5E5E5;
  font-family: 'Open Sans', sans-serif;
`

const FlexCont = styled.div<{selected: boolean}>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 12px;
  background: ${ props => props.selected ? '#F5F5F5': 'inherit' };
  cursor: pointer;
  transition: all 0.3s ease-in-out;  
  border-left: 4px solid ${ props => props.selected ? '#DE0A5F' : 'transparent'};
  &:hover {
    background: #F5F5F5;
  } 
`
const IconCont = styled.div<{selected: boolean}>`
  color: ${ props => props.selected ? '#DE0A5F': 'inherit' };
  line-height: 16px;
`
const TextCont = styled.div`
  padding-left: 6px;
  line-height: 22px;
`
interface INavItemProp {
  icon: any
  title: string
}
const NavItem: React.FC<INavItemProp> = (props) => {
  const context = React.useContext(NavContext)

  return (
    <FlexCont selected={context.selected} >
      <IconCont selected={context.selected} ><Icon icon={props.icon}/></IconCont>
      <TextCont>{ props.title }</TextCont>
    </FlexCont>
  )
}

const NavTitle = styled.div`
  padding: 8px;
  font-size: 0.92em;
  color: #A5A5A5;
`

export const BorderIndicator = () => {
  
  return (
    <Container>
      <NavTitle>Main</NavTitle>
      <SideNav defaultSelectedPath="1">
        <Nav id="1">
          <NavItem icon={dashboardIcon} title={"Dashboard"}/>
        </Nav>
        <Nav id="2">
          <NavItem icon={transactionsIcon} title={"Transactions"}/>         
        </Nav>
        <Nav id="3">
          <NavItem icon={usersIcon} title={"Users"}/>
        </Nav>
        <NavTitle>Sales & Marketing</NavTitle>
        <Nav id="4">
          <NavItem icon={salesIcon} title={"Sales / Orders"}/>
        </Nav>
        <Nav id="5">
          <NavItem icon={leadsIcon} title={"Leads"}/>
        </Nav>
        <Nav id="6">
          <NavItem icon={statsIcon} title={"Statistics"}/>
        </Nav>
      </SideNav>
    </Container>
  )
}
