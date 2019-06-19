import * as React from 'react'

import styled from 'styled-components'
import { SideNav, Nav, NavContext, ViewMode } from 'react-sidenav'
import {globe as dashboardIcon} from 'react-icons-kit/entypo/globe'
import {credit_card as transactionsIcon} from 'react-icons-kit/ikons/credit_card'
// import {users as usersIcon} from 'react-icons-kit/entypo/users'
// import {codepen as salesIcon} from 'react-icons-kit/icomoon/codepen'
import {ic_move_to_inbox as leadsIcon} from 'react-icons-kit/md/ic_move_to_inbox'
import {ic_grain as statsIcon} from 'react-icons-kit/md/ic_grain'
import { Icon } from 'react-icons-kit'

const Container = styled.div`
  background: #FFF;  
  height: 360px;
  width: 60px;
  color: #FFF;
  border: 1px solid #E5E5E5;
  font-family: 'Open Sans', sans-serif;
  background: #08090D;
  position: relative;
`

const FlexCont = styled.div<{selected: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 4px;
  color: ${ props => props.selected ? '#F62203': 'inherit' };
  cursor: pointer;
  transition: all 0.3s ease-in-out;  

`
const IconCont = styled.div<{selected: boolean}>`
  color: ${ props => props.selected ? '#F62203': 'inherit' };
  line-height: 16px;
`

interface INavItemProp {
  icon: any  
}
const NavItem: React.FC<INavItemProp> = (props) => {
  const context = React.useContext(NavContext)

  return (
    <FlexCont selected={context.selected} >
      <IconCont selected={context.selected} ><Icon size={32} icon={props.icon}/></IconCont>      
    </FlexCont>
  )
}


export const Compact = () => {
  
  return (
    <Container>
      <SideNav 
        mode={ViewMode.compact}
        defaultSelectedPath="1">
        <Nav id="1">
          <NavItem icon={dashboardIcon}/>
          <Nav id="3">
            <div>Item 1</div>
          </Nav>        
          <Nav id="4">
            <div>Item 2</div>
          </Nav>
        </Nav>
        <Nav id="2">
          <NavItem icon={transactionsIcon}/>
          <Nav id="3">
            <div>Item 3</div>
          </Nav>        
          <Nav id="4">
            <div>Item 4</div>
          </Nav> 
        </Nav>
        
        <Nav id="5">
          <NavItem icon={leadsIcon}/>
        </Nav>
        <Nav id="6">
          <NavItem icon={statsIcon}/>
        </Nav>
      </SideNav>
    </Container>
  )
}

