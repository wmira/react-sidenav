


import * as React from 'react'
import { render } from 'react-dom'
import { SideNav } from '../SideNav'
import { NavItem } from '../NavItem'
import styled from 'styled-components'
import { injectGlobal } from 'styled-components'

import Icon from 'react-icons-kit'
const { fileEmpty } = require('react-icons-kit/icomoon/fileEmpty')

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
  html, body {
    margin: 0;
    padding: 0px;
    width: 100%;
    height: 100%;
    font-size: 14px;
    color: #333;      
    font-family: 'Roboto Condensed', sans-serif;    
  }
  #root {
    width: 100%;
    height: 100%;
  }
  * {
    box-sizing: border-box;
  }
`

export const StyledSideNav = styled(SideNav)`    
    width: 260px;
    height: 500px;
`
export const StyledNavItem = styled(NavItem)`
    padding: 10px 14px;
    &:hover {
        background: pink;
        color: #FFF;
    }
`


const start = (): void => { //effect much    
    render((
        <StyledSideNav>
            <StyledNavItem> 
                <Center><Icon icon={fileEmpty} /> Item 1</Center>
            </StyledNavItem>
            <StyledNavItem>  Item 2 </StyledNavItem>
            <StyledNavItem>  Item 3 </StyledNavItem>
        </StyledSideNav>
    ), document.getElementById('app'))
}


document.addEventListener("DOMContentLoaded", start)