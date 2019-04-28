import * as React from 'react'
import styled from 'styled-components'
import { SideNav, Nav, NavContext } from 'react-sidenav'

import {globe as dashboardIcon} from 'react-icons-kit/entypo/globe'
import {credit_card as transactionsIcon} from 'react-icons-kit/ikons/credit_card'
import {users as usersIcon} from 'react-icons-kit/entypo/users'

import { Icon } from 'react-icons-kit'

const Container = styled.div`
  background: #2d353c;
  width: 220px;
  height: 420px;
  color: #a8acb1;  
`

const FlexCont = styled.div<{selected: boolean}>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 12px;
  color: ${ props => props.selected ? '#FFF': 'inherit' };
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: ${ props => props.selected ? '#242a31': 'inherit'};
  &:hover {
    background: #242a31;
  }
`
const IconCont = styled.div<{selected: boolean}>`
  color: ${ props => props.selected ? '#00acac': 'inherit' };
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
`

export const WithIcons = () => {
  
  return (
    <Container>
      <NavTitle>Navigation</NavTitle>
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
      </SideNav>
    </Container>
  )
}