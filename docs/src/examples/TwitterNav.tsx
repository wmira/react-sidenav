import * as React from 'react'

import styled from 'styled-components'
import { SideNav, Nav, NavContext } from 'react-sidenav'
import {homeOutline as homeIcon} from 'react-icons-kit/typicons/homeOutline'
import {home as homeSelectedIcon} from 'react-icons-kit/typicons/home'
import {hashtag as exploreIcon} from 'react-icons-kit/ikons/hashtag'
import {heartOutline as notificationIcon} from 'react-icons-kit/typicons/heartOutline'
import {heart as notificationIconSelected} from 'react-icons-kit/typicons/heart'
import {mail as messagesIcon} from 'react-icons-kit/typicons/mail'
import {bookmark as bookmarkIcon} from 'react-icons-kit/typicons/bookmark'

import { Icon } from 'react-icons-kit'

const Container = styled.div`
  background: rgb(24, 36, 48);
  width: 220px;
  height: 360px;
  color: #FFF;
  font-size: 1.3em;
  padding: 24px 0px;
`
const OuterCont = styled.div`
  display: flex;
`
const FlexCont = styled.span<{selected: boolean}>`  
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 22px;
  color: ${ props => props.selected ? 'rgb(29, 161, 242)': 'inherit' };
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin: 6px;
  border-radius: 9999px;  
  &:hover {
    background: rgba(29, 161, 242, 0.1);
    color: rgb(29, 161, 242) !important;
  }  

`
const IconCont = styled.div<{selected: boolean}>`
  color: ${ props => props.selected ? 'rgb(29, 161, 242)': 'inherit' };
  line-height: 16px;
`
const TextCont = styled.div`
  padding-left: 18px;
  line-height: 22px;  
  letter-spacing: 1px;
`
interface INavItemProp {
  icon: any
  title: string
  selectedIcon?: any
}
const NavItem: React.FC<INavItemProp> = (props) => {
  const context = React.useContext(NavContext)
  const icon = context.selected ? props.selectedIcon || props.icon : props.icon
  return (
    <OuterCont>
      <FlexCont selected={context.selected} >
        <IconCont selected={context.selected} ><Icon size={24} icon={icon}/></IconCont>
        <TextCont>{ props.title }</TextCont>
      </FlexCont>
    </OuterCont>
  )
}

export const TwitterNav = () => {
  
  return (
    <Container>
      <SideNav defaultSelectedPath="1">
        <Nav id="1">
          <NavItem 
            icon={homeIcon} 
            selectedIcon={homeSelectedIcon} 
            title={"Home"}
          />
        </Nav>
        <Nav id="2">
          <NavItem 
            icon={exploreIcon} 
            title={"Explore"}/>
        </Nav>
        <Nav id="3">
          <NavItem 
            icon={notificationIcon}
            selectedIcon={notificationIconSelected}
            title={"Notification"}/>          
        </Nav>
        <Nav id="4">
          <NavItem 
            icon={messagesIcon} 
            title={"Messages"}
          />
        </Nav>
        <Nav id="5">
          <NavItem 
            icon={bookmarkIcon} 
            title={"Bookmarks"}
          />
        </Nav>
      </SideNav>
    </Container>
  )
}
