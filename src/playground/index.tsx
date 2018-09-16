


import * as React from 'react'
import { render } from 'react-dom'

import { Basic } from './Basic'

import { injectGlobal } from 'styled-components'
import styled from 'styled-components'


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
  width: 420px;
  height: 260px;
  padding: 12px;
`


const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`



const RenderItems = () => (
    <Flex>
        <View><Basic /></View>

    </Flex>
)

const start = (): void => { // effect much
    render(<RenderItems />, document.getElementById('app'));
}


document.addEventListener("DOMContentLoaded", start)

// <View><Container ><SubNavigation /></Container></View>
{/* <View><Container ><BasicSideNav itemContainer={NavItem2}/></Container></View>
<View><Container ><BasicSideNav itemContainer={NavItem3}/></Container></View>
<View><Container ><SideNavTextItem /></Container></View> */}