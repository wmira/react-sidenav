


import * as React from 'react'
import { render } from 'react-dom'

import { SideNavView } from 'react-sidenav/playground/SideNavView'

import { injectGlobal } from 'styled-components'
import styled from 'styled-components'
import { TextOnly } from 'react-sidenav/playground/TextOnly';
import { Custom } from 'react-sidenav/playground/Custom';
import { WithTextAndIcons } from 'react-sidenav/playground/WithTextAndIcons';
import { MemoryRouter, Route } from 'react-router';
import { WithRR4 } from 'react-sidenav/playground/WithRR4';
import { SideNavWithRouterView } from 'react-sidenav/playground/SideNavWithRouterView';


injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
  html, body {
    margin: 0;
    padding: 12px;
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
const View = styled.div`
  width: 460px;
  height: 450px;
  padding: 12px;
`


const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`


const RenderItems = () => (
    <Flex>
        <View><SideNavView sidenav={TextOnly}/></View>
        <View><SideNavView sidenav={Custom}/></View>
        <View><SideNavView bgColor={'#2B333E'} sidenav={WithTextAndIcons}/></View>
        <View><SideNavWithRouterView /></View>
    </Flex>
)

const start = (): void => { // effect much
    render(<RenderItems />, document.getElementById('app'));
}


document.addEventListener("DOMContentLoaded", start)
